(function () {
  var STORAGE_KEY = "mareluna-lang";
  var INTRO_KEY = "mareluna-intro";
  var content = window.MARELUNA_CONTENT;

  if (!content || !content.sections || !content.ui) {
    var alert = document.createElement("p");
    alert.setAttribute("role", "alert");
    alert.textContent = "Content file missing.";
    document.body.appendChild(alert);
    return;
  }

  var state = {
    lang: "it",
    openId: null,
    triggerId: null,
  };

  function svg(paths) {
    return (
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' +
      paths +
      "</svg>"
    );
  }

  var ICONS = {
    pin: svg('<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.2"/>'),
    external: svg('<path d="M14 5h5v5"/><path d="M19 5 10 14"/><path d="M16 13.5V19H5V8h5.5"/>'),
  };

  var LANGS = [
    { code: "it", name: "Italiano" },
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
    { code: "pt", name: "Português" },
    { code: "zh", name: "中文" },
    { code: "ja", name: "日本語" },
    { code: "ar", name: "العربية" },
  ];

  function isLang(code) {
    for (var i = 0; i < LANGS.length; i++) {
      if (LANGS[i].code === code) return true;
    }
    return false;
  }

  function langName(code) {
    for (var i = 0; i < LANGS.length; i++) {
      if (LANGS[i].code === code) return LANGS[i].name;
    }
    return code;
  }

  function matchLang(tag) {
    var value = String(tag || "").toLowerCase().replace(/_/g, "-");
    if (value.indexOf("zh") === 0) return "zh";
    var base = value.split("-")[0];
    return isLang(base) ? base : "";
  }

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (isLang(saved)) return saved;
    } catch (e) {
      /* private mode */
    }
    var list = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || "it"];
    for (var i = 0; i < list.length; i++) {
      var hit = matchLang(list[i]);
      if (hit) return hit;
    }
    return "it";
  }

  function text(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    if (value.text) return text(value.text);
    return value[state.lang] || value.it || value.en || "";
  }

  function t(key) {
    return text(content.ui[key]);
  }

  function isComingSoon(section) {
    if (section.type === "soon") return true;
    var paragraphs = section.paragraphs && section.paragraphs.length;
    var items = section.items && section.items.length;
    var distances = section.distances && section.distances.length;
    var bullets = section.bullets && section.bullets.length;
    return !paragraphs && !items && !distances && !bullets;
  }

  function icon(name, className) {
    var span = document.createElement("span");
    span.className = className || "icon";
    span.setAttribute("aria-hidden", "true");
    span.innerHTML = ICONS[name] || ICONS.pin;
    return span;
  }

  function asset(path) {
    var version = window.MARELUNA_VERSION;
    if (!version) return path;
    return path + (path.indexOf("?") === -1 ? "?v=" : "&v=") + version;
  }

  function glyph(name, className) {
    var img = document.createElement("img");
    img.className = className || "tile-glyph";
    img.src = asset("icons/" + name + ".svg");
    img.alt = "";
    img.decoding = "async";
    img.draggable = false;
    return img;
  }

  function actionLink(href, label, options) {
    options = options || {};
    var a = document.createElement("a");
    a.className = "btn";
    a.href = href;
    if (options.ltr) a.dir = "ltr";
    if (options.external) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    var visible = document.createElement("span");
    visible.textContent = label;
    a.appendChild(visible);
    if (options.external) {
      var hint = document.createElement("span");
      hint.className = "visually-hidden";
      hint.textContent = ", " + t("newTab");
      a.appendChild(hint);
      a.appendChild(icon("external", "btn-icon"));
    }
    return a;
  }

  function paragraph(value) {
    var quote = value && value.quote;
    var node = document.createElement(quote ? "blockquote" : "p");
    node.textContent = text(value);
    return node;
  }

  function pendingNote(section) {
    if (!section.pending) return null;
    var note = document.createElement("p");
    note.className = "pending";
    note.textContent = text(section.pending);
    return note;
  }

  function figure(image) {
    if (!image) return null;
    var fig = document.createElement("figure");
    fig.className = "photo";
    var pic = document.createElement("picture");
    if (image.webp) {
      var source = document.createElement("source");
      source.type = "image/webp";
      source.srcset = asset(image.webp);
      pic.appendChild(source);
    }
    var img = document.createElement("img");
    img.src = asset(image.src);
    img.alt = text(image.alt);
    img.decoding = "async";
    pic.appendChild(img);
    fig.appendChild(pic);
    return fig;
  }

  function closeLangMenus(except) {
    var menus = document.querySelectorAll(".lang-menu");
    menus.forEach(function (menu) {
      if (menu === except) return;
      menu.hidden = true;
      var toggle = menu.parentElement.querySelector(".lang-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  }

  function updateLangSwitch(container) {
    if (!container.querySelector(".lang-toggle")) buildLangSwitch(container);
    var current = langName(state.lang);
    var toggle = container.querySelector(".lang-toggle");
    toggle.lang = state.lang;
    toggle.setAttribute("aria-label", t("languageLabel") + ", " + current);
    toggle.querySelector(".lang-code").textContent = state.lang.toUpperCase();
    toggle.querySelector(".lang-current").textContent = current;
    var options = container.querySelectorAll(".lang-option");
    options.forEach(function (option) {
      var on = option.getAttribute("data-set-lang") === state.lang;
      option.setAttribute("aria-selected", on ? "true" : "false");
    });
    container.querySelector(".lang-menu").setAttribute("aria-label", t("languageLabel"));
  }

  function buildLangSwitch(container) {
    var menuId = container.id + "-menu";
    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "lang-toggle";
    toggle.setAttribute("aria-haspopup", "listbox");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", menuId);
    var code = document.createElement("span");
    code.className = "lang-code";
    code.setAttribute("aria-hidden", "true");
    var current = document.createElement("span");
    current.className = "lang-current";
    var caret = document.createElement("span");
    caret.className = "lang-caret";
    caret.setAttribute("aria-hidden", "true");
    caret.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
    toggle.appendChild(code);
    toggle.appendChild(current);
    toggle.appendChild(caret);
    toggle.addEventListener("click", function () {
      var menu = container.querySelector(".lang-menu");
      var open = menu.hidden;
      closeLangMenus(open ? menu : null);
      menu.hidden = !open;
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) {
        var selected = menu.querySelector('[aria-selected="true"]') || menu.querySelector(".lang-option");
        if (selected) selected.focus();
      }
    });
    toggle.addEventListener("keydown", function (event) {
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      event.preventDefault();
      toggle.click();
    });

    var menu = document.createElement("ul");
    menu.id = menuId;
    menu.className = "lang-menu";
    menu.setAttribute("role", "listbox");
    menu.hidden = true;
    LANGS.forEach(function (item) {
      var li = document.createElement("li");
      var option = document.createElement("button");
      option.type = "button";
      option.className = "lang-option";
      option.setAttribute("role", "option");
      option.lang = item.code;
      option.dir = item.code === "ar" ? "rtl" : "ltr";
      option.dataset.setLang = item.code;
      var mark = document.createElement("span");
      mark.className = "lang-code";
      mark.setAttribute("aria-hidden", "true");
      mark.textContent = item.code.toUpperCase();
      var name = document.createElement("span");
      name.textContent = item.name;
      option.appendChild(mark);
      option.appendChild(name);
      option.addEventListener("click", function () {
        setLang(item.code);
        closeLangMenus(null);
        toggle.focus();
      });
      option.addEventListener("keydown", function (event) {
        var keys = ["ArrowDown", "ArrowUp", "Home", "End"];
        if (keys.indexOf(event.key) === -1) return;
        event.preventDefault();
        var all = Array.prototype.slice.call(menu.querySelectorAll(".lang-option"));
        var index = all.indexOf(option);
        if (event.key === "ArrowDown") index = (index + 1) % all.length;
        if (event.key === "ArrowUp") index = (index - 1 + all.length) % all.length;
        if (event.key === "Home") index = 0;
        if (event.key === "End") index = all.length - 1;
        all[index].focus();
      });
      li.appendChild(option);
      menu.appendChild(li);
    });
    container.appendChild(toggle);
    container.appendChild(menu);
  }

  function renderGrid() {
    var root = document.getElementById("sections");
    var list = document.createElement("ul");
    list.className = "grid";
    list.setAttribute("aria-label", t("sectionsLabel"));
    content.sections.forEach(function (section) {
      var item = document.createElement("li");
      var button = document.createElement("button");
      button.type = "button";
      button.className = "tile";
      button.dataset.section = section.id;
      button.setAttribute("aria-haspopup", "dialog");
      button.setAttribute("aria-controls", "sheet");
      button.setAttribute("aria-expanded", state.openId === section.id ? "true" : "false");
      var face = document.createElement("span");
      face.className = "tile-face";
      face.appendChild(glyph(section.icon));
      if (isComingSoon(section)) {
        var dot = document.createElement("span");
        dot.className = "tile-dot";
        dot.setAttribute("aria-hidden", "true");
        face.appendChild(dot);
      }
      button.appendChild(face);
      var label = document.createElement("span");
      label.className = "tile-label";
      label.textContent = text(section.title);
      button.appendChild(label);
      if (isComingSoon(section)) {
        var soon = document.createElement("span");
        soon.className = "visually-hidden";
        soon.textContent = t("comingSoon");
        button.appendChild(soon);
      }
      button.addEventListener("click", function () {
        openSection(section.id);
      });
      item.appendChild(button);
      list.appendChild(item);
    });
    root.replaceChildren(list);
  }

  function renderSoon(section) {
    var wrap = document.createElement("div");
    wrap.className = "soon";
    wrap.appendChild(glyph(section.icon, "soon-icon"));
    var title = document.createElement("p");
    title.className = "soon-title";
    title.textContent = t("comingSoon");
    var body = document.createElement("p");
    body.className = "soon-text";
    body.textContent = t("comingSoonBody");
    wrap.appendChild(title);
    wrap.appendChild(body);
    return wrap;
  }

  function renderAddressBlock() {
    var block = document.createElement("section");
    block.className = "address-block";
    var label = document.createElement("h3");
    label.className = "block-title";
    label.textContent = t("addressLabel");
    var address = document.createElement("p");
    address.className = "address";
    address.dir = "ltr";
    content.property.addressLines.forEach(function (line, index) {
      if (index) address.appendChild(document.createElement("br"));
      address.appendChild(document.createTextNode(line));
    });
    block.appendChild(label);
    block.appendChild(address);
    block.appendChild(actionLink(content.property.mapsUrl, t("openMaps"), { external: true }));
    return block;
  }

  function renderParagraphs(section, parent) {
    (section.paragraphs || []).forEach(function (item) {
      parent.appendChild(paragraph(item));
    });
  }

  function renderBullets(section, parent) {
    if (!section.bullets || !section.bullets.length) return;
    var list = document.createElement("ul");
    list.className = "bullets";
    section.bullets.forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = text(item);
      list.appendChild(li);
    });
    parent.appendChild(list);
  }

  function renderDistances(section) {
    var block = document.createElement("section");
    block.className = "distance-block";
    var label = document.createElement("h3");
    label.className = "block-title";
    label.id = "distances-title";
    label.textContent = t("distancesLabel");
    var list = document.createElement("ul");
    list.className = "distances";
    list.setAttribute("aria-labelledby", "distances-title");
    section.distances.forEach(function (row) {
      var li = document.createElement("li");
      var name = document.createElement("span");
      name.className = "dist-label";
      name.textContent = text(row.label);
      var detail = document.createElement("span");
      detail.className = "dist-detail";
      detail.textContent = text(row.detail);
      li.appendChild(name);
      li.appendChild(detail);
      list.appendChild(li);
    });
    block.appendChild(label);
    block.appendChild(list);
    return block;
  }

  function renderLocation(section) {
    var wrap = document.createElement("div");
    var photo = figure(section.image);
    if (photo) wrap.appendChild(photo);
    renderParagraphs(section, wrap);
    wrap.appendChild(renderAddressBlock());
    if (content.property.coordinates) {
      var coords = document.createElement("p");
      coords.className = "coordinates";
      coords.dir = "ltr";
      var strong = document.createElement("strong");
      strong.textContent = t("coordinatesLabel") + " ";
      coords.appendChild(strong);
      coords.appendChild(document.createTextNode(text(content.property.coordinates)));
      wrap.appendChild(coords);
    }
    if (section.distances && section.distances.length) wrap.appendChild(renderDistances(section));
    var note = pendingNote(section);
    if (note) wrap.appendChild(note);
    return wrap;
  }

  function renderPlaces(section) {
    var wrap = document.createElement("div");
    var photo = figure(section.image);
    if (photo) wrap.appendChild(photo);
    renderParagraphs(section, wrap);
    var list = document.createElement("ul");
    list.className = "places";
    (section.items || []).forEach(function (place) {
      var item = document.createElement("li");
      item.className = "place";
      var name = document.createElement("h3");
      name.className = "place-name";
      name.textContent = text(place.name);
      var address = document.createElement("p");
      address.className = "place-address";
      address.dir = "ltr";
      address.textContent = text(place.address);
      var description = document.createElement("p");
      description.className = "place-text";
      description.textContent = text(place.text);
      item.appendChild(name);
      item.appendChild(address);
      item.appendChild(description);
      if (place.mapsUrl) {
        item.appendChild(actionLink(place.mapsUrl, t("openMaps"), { external: true }));
      }
      list.appendChild(item);
    });
    if (section.items && section.items.length) wrap.appendChild(list);
    var note = pendingNote(section);
    if (note) wrap.appendChild(note);
    return wrap;
  }

  function renderList(section) {
    var wrap = document.createElement("div");
    var photo = figure(section.image);
    if (photo) wrap.appendChild(photo);
    renderParagraphs(section, wrap);
    renderBullets(section, wrap);
    var list = document.createElement("ul");
    list.className = "facts";
    (section.items || []).forEach(function (fact) {
      var item = document.createElement("li");
      item.className = "fact";
      if (fact.icon) item.appendChild(glyph(fact.icon, "fact-icon"));
      var copy = document.createElement("div");
      var title = document.createElement("h3");
      title.className = "fact-title";
      title.textContent = text(fact.title);
      var body = document.createElement("p");
      body.className = "fact-text";
      body.textContent = text(fact.text);
      copy.appendChild(title);
      copy.appendChild(body);
      item.appendChild(copy);
      list.appendChild(item);
    });
    if (section.items && section.items.length) wrap.appendChild(list);
    var note = pendingNote(section);
    if (note) wrap.appendChild(note);
    return wrap;
  }

  function renderNotes(section) {
    var wrap = document.createElement("div");
    wrap.className = "notes";
    var photo = figure(section.image);
    if (photo) wrap.appendChild(photo);
    renderParagraphs(section, wrap);
    renderBullets(section, wrap);
    var note = pendingNote(section);
    if (note) wrap.appendChild(note);
    return wrap;
  }

  function renderContact(section) {
    var wrap = document.createElement("div");
    wrap.className = "contact";
    renderParagraphs(section, wrap);
    var actions = document.createElement("div");
    actions.className = "contact-actions";
    actions.appendChild(actionLink(content.property.phoneHref, content.property.phoneDisplay, { ltr: true }));
    actions.appendChild(actionLink(content.property.emailHref, content.property.email, { ltr: true }));
    wrap.appendChild(actions);
    var person = document.createElement("p");
    person.className = "person";
    var name = document.createElement("span");
    name.className = "person-name";
    name.textContent = "Francesca";
    person.appendChild(name);
    person.appendChild(document.createTextNode(" — Booking and Reservation"));
    wrap.appendChild(person);
    wrap.appendChild(renderAddressBlock());
    var more = document.createElement("div");
    more.className = "contact-actions";
    more.appendChild(actionLink(content.property.facebook, "Facebook", { external: true }));
    more.appendChild(actionLink(content.property.website, t("officialSite"), { external: true }));
    wrap.appendChild(more);
    return wrap;
  }

  function renderSectionBody(section) {
    if (isComingSoon(section)) return renderSoon(section);
    if (section.type === "location") return renderLocation(section);
    if (section.type === "contact") return renderContact(section);
    if (section.type === "places") return renderPlaces(section);
    if (section.type === "list") return renderList(section);
    return renderNotes(section);
  }

  function findSection(id) {
    for (var i = 0; i < content.sections.length; i++) {
      if (content.sections[i].id === id) return content.sections[i];
    }
    return null;
  }

  function renderSheet() {
    document.getElementById("back-label").textContent = t("back");
    var title = document.getElementById("sheet-title");
    var body = document.getElementById("sheet-body");
    var section = findSection(state.openId);
    if (!section) {
      title.textContent = "";
      body.replaceChildren();
      return;
    }
    title.textContent = text(section.panelTitle || section.title);
    body.replaceChildren(renderSectionBody(section));
    body.scrollTop = 0;
  }

  function renderHome() {
    var welcome = document.getElementById("welcome-line");
    welcome.textContent = t("welcome");
    var hero = document.getElementById("hero-img");
    if (hero) hero.alt = t("heroAlt");

    var address = document.getElementById("home-address");
    address.replaceChildren();
    address.appendChild(icon("pin", "home-pin"));
    var link = document.createElement("a");
    link.href = content.property.mapsUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.dir = "ltr";
    link.textContent = content.property.addressLine;
    var hint = document.createElement("span");
    hint.className = "visually-hidden";
    hint.textContent = ", " + t("newTab");
    link.appendChild(hint);
    address.appendChild(link);

    var phone = document.getElementById("home-phone");
    phone.replaceChildren();
    var call = document.createElement("a");
    call.href = content.property.phoneHref;
    call.dir = "ltr";
    call.textContent = content.property.phoneDisplay;
    var callHint = document.createElement("span");
    callHint.className = "visually-hidden";
    callHint.textContent = " " + t("call");
    call.appendChild(callHint);
    phone.appendChild(call);
  }

  function render(options) {
    options = options || {};
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
    document.documentElement.dataset.lang = state.lang;
    document.title = t("pageTitle");
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("metaDescription"));
    document.getElementById("skip").textContent = t("skip");
    var skipIntro = document.getElementById("intro-skip");
    if (skipIntro) skipIntro.textContent = t("skipIntro");
    updateLangSwitch(document.getElementById("lang-switch"));
    updateLangSwitch(document.getElementById("sheet-lang"));
    renderGrid();
    renderHome();
    renderSheet();
    if (options.announce) {
      document.getElementById("live").textContent = langName(state.lang);
    }
  }

  function setLang(lang) {
    if (!isLang(lang)) return;
    var changed = lang !== state.lang;
    state.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore quota / private mode */
    }
    if (!changed) return;
    render({ announce: true });
  }

  function syncExpanded() {
    var buttons = document.querySelectorAll(".tile");
    buttons.forEach(function (button) {
      button.setAttribute(
        "aria-expanded",
        button.dataset.section === state.openId ? "true" : "false"
      );
    });
  }

  function openSection(id) {
    closeLangMenus(null);
    state.openId = id;
    state.triggerId = id;
    syncExpanded();
    renderSheet();
    var dialog = document.getElementById("sheet");
    if (!dialog.open) dialog.showModal();
    document.getElementById("sheet-back").focus();
  }

  function onClose() {
    var id = state.triggerId;
    state.openId = null;
    syncExpanded();
    renderSheet();
    window.setTimeout(function () {
      var button = document.querySelector('[data-section="' + id + '"]');
      if (button) button.focus();
    }, 0);
  }

  function playIntro() {
    var overlay = document.getElementById("intro");
    var logo = document.getElementById("intro-logo");
    var headerLogo = document.querySelector(".logo");
    var wrap = document.getElementById("wrap");
    if (!overlay || !logo || !headerLogo) return;

    function finishNow() {
      document.documentElement.classList.add("intro-seen");
      document.documentElement.classList.remove("intro-reveal");
      if (wrap) wrap.inert = false;
      if (overlay.isConnected) overlay.remove();
    }

    if (document.documentElement.classList.contains("intro-seen")) {
      finishNow();
      return;
    }

    var reduce = false;
    try {
      reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (e) {
      reduce = false;
    }
    if (reduce) {
      finishNow();
      return;
    }

    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch (e) {
      /* private mode */
    }

    if (wrap) wrap.inert = true;

    var closed = false;
    var flying = false;
    var first = null;
    var flightTimer = 0;
    var safetyTimer = 0;

    function flightTransform() {
      var last = headerLogo.getBoundingClientRect();
      if (!first || last.width < 2) return "";
      var scale = last.width / first.width;
      var dx = last.left + last.width / 2 - (first.left + first.width / 2);
      var dy = last.top + last.height / 2 - (first.top + first.height / 2);
      return "translate(" + dx.toFixed(2) + "px, " + dy.toFixed(2) + "px) scale(" + scale.toFixed(4) + ")";
    }

    function onResize() {
      if (!flying || closed) return;
      var next = flightTransform();
      if (next) logo.style.transform = next;
    }

    function finish() {
      if (closed) return;
      closed = true;
      flying = false;
      window.clearTimeout(flightTimer);
      window.clearTimeout(safetyTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
      finishNow();
    }

    function pin(el, rect) {
      el.style.position = "fixed";
      el.style.left = rect.left + "px";
      el.style.top = rect.top + "px";
      el.style.width = rect.width + "px";
      el.style.margin = "0";
      el.style.maxWidth = "none";
      el.style.transform = "none";
      el.style.animation = "none";
      el.style.height = rect.height + "px";
    }

    function startFlight() {
      if (closed || flying) return;
      logo.style.animation = "none";
      logo.style.transform = "none";
      logo.style.opacity = "1";
      var logoRect = logo.getBoundingClientRect();
      if (logoRect.width < 2 || headerLogo.getBoundingClientRect().width < 2) {
        finish();
        return;
      }
      pin(logo, logoRect);
      first = logoRect;
      flying = true;
      window.addEventListener("resize", onResize);
      logo.style.transformOrigin = "center center";
      logo.style.transition = "none";
      void logo.offsetWidth;
      document.documentElement.classList.add("intro-reveal");
      overlay.classList.add("is-reveal");
      logo.style.transition = "transform 0.75s ease-in-out";
      logo.style.transform = flightTransform();
      logo.addEventListener("transitionend", function (event) {
        if (event.target !== logo || event.propertyName !== "transform") return;
        finish();
      });
    }

    function onKey(event) {
      if (event.key === "Escape" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        finish();
      }
    }

    overlay.addEventListener("pointerdown", function (event) {
      if (event.target && event.target.id === "intro-skip") return;
      event.preventDefault();
      finish();
    });
    document.getElementById("intro-skip").addEventListener("click", function (event) {
      event.stopPropagation();
      finish();
    });
    window.addEventListener("keydown", onKey);

    function begin() {
      if (!overlay.isConnected || overlay.classList.contains("is-play") || closed) return;
      overlay.classList.add("is-play");
      flightTimer = window.setTimeout(startFlight, 1250);
      safetyTimer = window.setTimeout(finish, 3400);
    }
    begin();
  }

  function bind() {
    var dialog = document.getElementById("sheet");
    document.getElementById("sheet-back").addEventListener("click", function () {
      dialog.close();
    });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", onClose);
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".lang")) closeLangMenus(null);
    });
    document.addEventListener(
      "keydown",
      function (event) {
        if (event.key !== "Escape") return;
        var open = document.querySelector(".lang-menu:not([hidden])");
        if (!open) return;
        event.preventDefault();
        event.stopPropagation();
        var toggle = open.parentElement.querySelector(".lang-toggle");
        closeLangMenus(null);
        if (toggle) toggle.focus();
      },
      true
    );
  }

  state.lang = isLang(document.documentElement.dataset.lang)
    ? document.documentElement.dataset.lang
    : detectLang();
  bind();
  render();
  playIntro();
})();
