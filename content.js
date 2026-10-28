/**
 * Mareluna Suite de Charme — testi per gli ospiti.
 *
 * Come modificare
 * - Ogni frase è un oggetto con una chiave per lingua:
 *   it, en, es, fr, de, pt, zh, ja, ar.
 * - Se manca una lingua, la pagina usa l'italiano, poi l'inglese.
 * - type "notes": paragrafi in `paragraphs`. Lista vuota = contenuto in arrivo.
 *   `bullets` è un elenco di frasi. `pending` è la riga di ciò che ancora manca.
 *   `quote: true` con `text` mostra la frase come citazione.
 * - type "list": schede in `items` (icon, title, text).
 * - type "places": schede in `items` (name, address, text, mapsUrl).
 * - type "location": indirizzo della struttura, distanze, mappa.
 * - type "contact": telefono, email, Francesca, mappa, Facebook, sito.
 * - type "soon": tutta la sezione è "contenuto in arrivo".
 * - Aggiungete solo fatti verificati. Non inventate password, orari o prezzi.
 */
window.MARELUNA_CONTENT = {
  "property": {
    "addressLines": [
      "Via Partenope, 1",
      "Lungomare Caracciolo",
      "80121 Napoli"
    ],
    "addressLine": "Via Partenope, 1 — Lungomare Caracciolo, 80121 Napoli",
    "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Via+Partenope+1%2C+Lungomare+Caracciolo%2C+80121+Napoli",
    "phoneDisplay": "+39 081 764 38 49",
    "phoneHref": "tel:+390817643849",
    "email": "info@marelunasdc.com",
    "emailHref": "mailto:info@marelunasdc.com",
    "facebook": "https://www.facebook.com/marelunasdc/",
    "website": "https://www.marelunasdc.com/",
    "coordinates": {
      "it": "40.83° Nord – 14.24° Est",
      "en": "40.83° N – 14.24° E",
      "es": "40.83° Norte – 14.24° Este",
      "fr": "40.83° Nord – 14.24° Est",
      "de": "40.83° Nord – 14.24° Ost",
      "pt": "40.83° Norte – 14.24° Este",
      "zh": "北纬 40.83° – 东经 14.24°",
      "ja": "北緯 40.83° – 東経 14.24°",
      "ar": "40.83° شمالًا – 14.24° شرقًا"
    }
  },
  "ui": {
    "pageTitle": {
      "it": "Mareluna Suite de Charme — Libro di benvenuto",
      "en": "Mareluna Suite de Charme — Welcome book",
      "es": "Mareluna Suite de Charme — Libro de bienvenida",
      "fr": "Mareluna Suite de Charme — Livre d'accueil",
      "de": "Mareluna Suite de Charme — Willkommensbuch",
      "pt": "Mareluna Suite de Charme — Livro de boas-vindas",
      "zh": "Mareluna Suite de Charme — 迎宾手册",
      "ja": "Mareluna Suite de Charme — ウェルカムブック",
      "ar": "Mareluna Suite de Charme — كتاب الترحيب"
    },
    "metaDescription": {
      "it": "Libro di benvenuto digitale per gli ospiti di Mareluna Suite de Charme, sul lungomare di Napoli.",
      "en": "Digital welcome book for guests of Mareluna Suite de Charme, on the Naples seafront.",
      "es": "Libro de bienvenida digital para los huéspedes de Mareluna Suite de Charme, en el paseo marítimo de Nápoles.",
      "fr": "Livre d'accueil numérique pour les voyageurs de Mareluna Suite de Charme, sur le front de mer de Naples.",
      "de": "Digitales Willkommensbuch für Gäste von Mareluna Suite de Charme an der Uferpromenade von Neapel.",
      "pt": "Livro de boas-vindas digital para os hóspedes da Mareluna Suite de Charme, no passeio marítimo de Nápoles.",
      "zh": "那不勒斯海滨 Mareluna Suite de Charme 的数字迎宾手册。",
      "ja": "ナポリの海岸通り、Mareluna Suite de Charme のデジタルウェルカムブック。",
      "ar": "كتاب ترحيب رقمي لضيوف Mareluna Suite de Charme على كورنيش نابولي."
    },
    "welcome": {
      "it": "Vi diamo il benvenuto",
      "en": "Welcome",
      "es": "Os damos la bienvenida",
      "fr": "Nous vous souhaitons la bienvenue",
      "de": "Willkommen",
      "pt": "Damos-vos as boas-vindas",
      "zh": "欢迎光临",
      "ja": "ようこそ",
      "ar": "أهلاً بكم"
    },
    "heroAlt": {
      "it": "Finestra aperta sul Golfo di Napoli",
      "en": "Open window onto the Gulf of Naples",
      "es": "Ventana abierta al Golfo de Nápoles",
      "fr": "Fenêtre ouverte sur le golfe de Naples",
      "de": "Geöffnetes Fenster zum Golf von Neapel",
      "pt": "Janela aberta para o Golfo de Nápoles",
      "zh": "面向那不勒斯海湾的敞开窗户",
      "ja": "ナポリ湾に開いた窓",
      "ar": "نافذة مفتوحة على خليج نابولي"
    },
    "languageLabel": {
      "it": "Lingua",
      "en": "Language",
      "es": "Idioma",
      "fr": "Langue",
      "de": "Sprache",
      "pt": "Língua",
      "zh": "语言",
      "ja": "言語",
      "ar": "اللغة"
    },
    "skip": {
      "it": "Vai alle sezioni",
      "en": "Skip to sections",
      "es": "Ir a las secciones",
      "fr": "Aller aux sections",
      "de": "Zu den Abschnitten",
      "pt": "Ir para as secções",
      "zh": "跳到栏目",
      "ja": "セクションへ",
      "ar": "انتقل إلى الأقسام"
    },
    "skipIntro": {
      "it": "Salta",
      "en": "Skip",
      "es": "Saltar",
      "fr": "Passer",
      "de": "Überspringen",
      "pt": "Saltar",
      "zh": "跳过",
      "ja": "スキップ",
      "ar": "تخطَّ"
    },
    "sectionsLabel": {
      "it": "Sezioni della guida",
      "en": "Guide sections",
      "es": "Secciones de la guía",
      "fr": "Sections du guide",
      "de": "Abschnitte des Guides",
      "pt": "Secções do guia",
      "zh": "指南栏目",
      "ja": "ガイドのセクション",
      "ar": "أقسام الدليل"
    },
    "back": {
      "it": "Indietro",
      "en": "Back",
      "es": "Atrás",
      "fr": "Retour",
      "de": "Zurück",
      "pt": "Voltar",
      "zh": "返回",
      "ja": "戻る",
      "ar": "رجوع"
    },
    "openMaps": {
      "it": "Apri in Google Maps",
      "en": "Open in Google Maps",
      "es": "Abrir en Google Maps",
      "fr": "Ouvrir dans Google Maps",
      "de": "In Google Maps öffnen",
      "pt": "Abrir no Google Maps",
      "zh": "在 Google 地图中打开",
      "ja": "Google マップで開く",
      "ar": "فتح في خرائط Google"
    },
    "newTab": {
      "it": "si apre in una nuova scheda",
      "en": "opens in a new tab",
      "es": "se abre en una pestaña nueva",
      "fr": "s'ouvre dans un nouvel onglet",
      "de": "öffnet sich in einem neuen Tab",
      "pt": "abre num novo separador",
      "zh": "在新标签页中打开",
      "ja": "新しいタブで開きます",
      "ar": "يفتح في علامة تبويب جديدة"
    },
    "addressLabel": {
      "it": "Indirizzo",
      "en": "Address",
      "es": "Dirección",
      "fr": "Adresse",
      "de": "Adresse",
      "pt": "Endereço",
      "zh": "地址",
      "ja": "住所",
      "ar": "العنوان"
    },
    "coordinatesLabel": {
      "it": "Coordinate",
      "en": "Coordinates",
      "es": "Coordenadas",
      "fr": "Coordonnées",
      "de": "Koordinaten",
      "pt": "Coordenadas",
      "zh": "坐标",
      "ja": "座標",
      "ar": "الإحداثيات"
    },
    "distancesLabel": {
      "it": "Distanze",
      "en": "Distances",
      "es": "Distancias",
      "fr": "Distances",
      "de": "Entfernungen",
      "pt": "Distâncias",
      "zh": "距离",
      "ja": "距離",
      "ar": "المسافات"
    },
    "comingSoon": {
      "it": "Contenuto in arrivo",
      "en": "Coming soon",
      "es": "Contenido próximamente",
      "fr": "Contenu à venir",
      "de": "Inhalt folgt",
      "pt": "Conteúdo em breve",
      "zh": "内容即将更新",
      "ja": "内容は近日公開",
      "ar": "المحتوى قادم"
    },
    "comingSoonBody": {
      "it": "Questa sezione sarà aggiornata a breve.",
      "en": "This section will be updated soon.",
      "es": "Esta sección se actualizará pronto.",
      "fr": "Cette section sera bientôt mise à jour.",
      "de": "Dieser Abschnitt wird in Kürze ergänzt.",
      "pt": "Esta secção será atualizada em breve.",
      "zh": "本栏目即将更新。",
      "ja": "このセクションは間もなく更新されます。",
      "ar": "سيُحدَّث هذا القسم قريبًا."
    },
    "officialSite": {
      "it": "Sito ufficiale",
      "en": "Official website",
      "es": "Sitio oficial",
      "fr": "Site officiel",
      "de": "Offizielle Website",
      "pt": "Site oficial",
      "zh": "官方网站",
      "ja": "公式サイト",
      "ar": "الموقع الرسمي"
    },
    "call": {
      "it": "chiama",
      "en": "call",
      "es": "llamar",
      "fr": "appeler",
      "de": "anrufen",
      "pt": "ligar",
      "zh": "拨打",
      "ja": "電話する",
      "ar": "اتصال"
    }
  },
  "sections": [
    {
      "id": "concierge",
      "icon": "concierge",
      "type": "notes",
      "title": {
        "it": "Concierge",
        "en": "Concierge",
        "es": "Concierge",
        "fr": "Concierge",
        "de": "Concierge",
        "pt": "Concierge",
        "zh": "礼宾服务",
        "ja": "コンシェルジュ",
        "ar": "الكونسيرج"
      },
      "paragraphs": [
        {
          "it": "Un servizio di concierge, 24 ore su 24, vi permette di rientrare a qualsiasi ora e di sentirvi accolti in ogni momento della giornata.",
          "en": "A concierge is on duty 24 hours a day, so you can return at any hour and feel looked after throughout the day.",
          "es": "Un conserje está disponible las 24 horas: pueden volver a cualquier hora y sentirse atendidos durante todo el día.",
          "fr": "Un concierge est présent 24 heures sur 24 : vous pouvez rentrer à toute heure et vous sentir accueillis tout au long de la journée.",
          "de": "Ein Concierge ist rund um die Uhr da. Sie können zu jeder Stunde zurückkommen und sich den ganzen Tag umsorgt fühlen.",
          "pt": "Um concierge está disponível 24 horas por dia: podem regressar a qualquer hora e sentir-se acolhidos ao longo do dia.",
          "zh": "礼宾服务全天 24 小时在岗，你们可以随时回来，整天都有人照料。",
          "ja": "コンシェルジュが24時間対応します。いつ戻っても、一日を通して迎えられます。",
          "ar": "خدمة الكونسيرج متاحة على مدار الساعة، ويمكنكم العودة في أي وقت والشعور بالترحيب طوال اليوم."
        },
        {
          "it": "Essere accolti con un sorriso, ricevere un consiglio prezioso, provare qualcosa di nuovo: è quello che ci viene naturale offrire.",
          "en": "A welcome with a smile, a useful piece of advice, the chance to try something new: that is simply how we like to receive you.",
          "es": "Un recibimiento con una sonrisa, un consejo valioso, la ocasión de probar algo nuevo: es lo que nos sale natural ofrecer.",
          "fr": "Être accueillis avec un sourire, recevoir un conseil précieux, essayer quelque chose de nouveau : c'est ce qu'il nous est naturel d'offrir.",
          "de": "Mit einem Lächeln empfangen werden, einen wertvollen Rat bekommen, etwas Neues ausprobieren: das bieten wir ganz selbstverständlich an.",
          "pt": "Ser recebidos com um sorriso, receber um conselho precioso, experimentar algo de novo: é o que nos é natural oferecer.",
          "zh": "以微笑迎接、给一句有用的建议、让你们尝试新的事物：这些是我们自然而然愿意做的。",
          "ja": "笑顔で迎えること、役に立つ助言、何か新しい体験。それが私たちの自然なもてなしです。",
          "ar": "الترحيب بابتسامة، ونصيحة ثمينة، وتجربة شيء جديد: هذا ما نقدمه بطبيعتنا."
        }
      ]
    },
    {
      "id": "colazione",
      "icon": "colazione",
      "type": "notes",
      "title": {
        "it": "Colazione",
        "en": "Breakfast",
        "es": "Desayuno",
        "fr": "Petit-déjeuner",
        "de": "Frühstück",
        "pt": "Pequeno-almoço",
        "zh": "早餐",
        "ja": "朝食",
        "ar": "الإفطار"
      },
      "paragraphs": [
        {
          "it": "La colazione internazionale è servita dalle 8:00 alle 10:00, nella sala affacciata sul Golfo di Napoli e sull'isola di Capri.",
          "en": "The international breakfast is served from 8:00 to 10:00, in the room looking onto the Gulf of Naples and the island of Capri.",
          "es": "El desayuno internacional se sirve de 8:00 a 10:00, en la sala que da al Golfo de Nápoles y a la isla de Capri.",
          "fr": "Le petit-déjeuner international est servi de 8 h 00 à 10 h 00, dans la salle qui donne sur le golfe de Naples et l'île de Capri.",
          "de": "Das internationale Frühstück wird von 8:00 bis 10:00 Uhr im Saal mit Blick auf den Golf von Neapel und die Insel Capri serviert.",
          "pt": "O pequeno-almoço internacional é servido das 8:00 às 10:00, na sala voltada para o Golfo de Nápoles e a ilha de Capri.",
          "zh": "国际早餐于 8:00 至 10:00 供应，地点在面向那不勒斯海湾和卡普里岛的厅里。",
          "ja": "インターナショナルブレックファストは 8:00 から 10:00、ナポリ湾とカプリ島を望む部屋でお出しします。",
          "ar": "يُقدَّم الإفطار الدولي من الساعة 8:00 إلى 10:00، في القاعة المطلة على خليج نابولي وجزيرة كابري."
        },
        {
          "it": "L'ingrediente principale è il panorama, arricchito dai sapori tipici di Napoli, senza tralasciare il gusto degli ospiti stranieri.",
          "en": "The main ingredient is the view, enriched with the flavours of Naples, while still keeping foreign guests' tastes in mind.",
          "es": "El ingrediente principal es el panorama, enriquecido con los sabores típicos de Nápoles, sin olvidar el gusto de los huéspedes extranjeros.",
          "fr": "L'ingrédient principal est la vue, enrichie des saveurs typiques de Naples, sans oublier le goût des voyageurs étrangers.",
          "de": "Die wichtigste Zutat ist die Aussicht, ergänzt um die typischen Aromen Neapels — und um den Geschmack der Gäste von auswärts.",
          "pt": "O ingrediente principal é a vista, enriquecida com os sabores típicos de Nápoles, sem esquecer o gosto dos hóspedes estrangeiros.",
          "zh": "主料是风景，再加上那不勒斯的典型风味，同时也照顾外国客人的口味。",
          "ja": "主な材料は眺めです。ナポリの味を添え、外国からのお客様の好みも大切にしています。",
          "ar": "المكوّن الأساسي هو المشهد، مع نكهات نابولي، ومن دون إغفال ذوق الضيوف القادمين من الخارج."
        }
      ],
      "pending": {
        "it": "Menu e informazioni sulle intolleranze: contenuto in arrivo.",
        "en": "Menu and information on food intolerances: coming soon.",
        "es": "Menú e información sobre intolerancias: contenido próximamente.",
        "fr": "Menu et informations sur les intolérances : contenu à venir.",
        "de": "Menü und Hinweise zu Unverträglichkeiten: folgen.",
        "pt": "Ementa e informações sobre intolerâncias: conteúdo em breve.",
        "zh": "菜单和食物不耐受信息：即将更新。",
        "ja": "メニューと食物不耐に関する情報：近日公開。",
        "ar": "قائمة الطعام ومعلومات عن الحساسيات الغذائية: المحتوى قادم."
      }
    },
    {
      "id": "camere",
      "icon": "bed",
      "type": "notes",
      "title": {
        "it": "Camere",
        "en": "Rooms",
        "es": "Habitaciones",
        "fr": "Chambres",
        "de": "Zimmer",
        "pt": "Quartos",
        "zh": "客房",
        "ja": "客室",
        "ar": "الغرف"
      },
      "panelTitle": {
        "it": "Camere e suite",
        "en": "Rooms and suite",
        "es": "Habitaciones y suite",
        "fr": "Chambres et suite",
        "de": "Zimmer und Suite",
        "pt": "Quartos e suite",
        "zh": "客房与套房",
        "ja": "客室とスイート",
        "ar": "الغرف والجناح"
      },
      "image": {
        "src": "photos/terrace.jpg",
        "webp": "photos/terrace.webp",
        "alt": {
          "it": "Tavolino sul balcone, con il golfo oltre la ringhiera",
          "en": "A small table on the balcony, the gulf beyond the railing",
          "es": "Mesita en el balcón, con el golfo más allá de la barandilla",
          "fr": "Petite table sur le balcon, le golfe au-delà de la balustrade",
          "de": "Kleiner Tisch auf dem Balkon, der Golf hinter dem Geländer",
          "pt": "Mesinha na varanda, com o golfo para lá da balaustrada",
          "zh": "阳台小桌，栏杆外是海湾",
          "ja": "バルコニーの小さなテーブル。手すりの向こうは湾",
          "ar": "طاولة صغيرة على الشرفة، والخليج خلف السياج"
        }
      },
      "paragraphs": [
        {
          "it": "Ci sono 6 camere, tutte con bagno interno e balcone privato con vista laterale sul mare, pensate per il comfort e l'eleganza.",
          "en": "There are 6 rooms, each with a private bathroom and a private balcony with a side sea view, arranged for comfort and elegance.",
          "es": "Hay 6 habitaciones, todas con baño privado y balcón privado con vista lateral al mar, pensadas para la comodidad y la elegancia.",
          "fr": "Il y a 6 chambres, toutes avec salle de bain privative et balcon privé avec vue latérale sur la mer, pensées pour le confort et l'élégance.",
          "de": "Es gibt 6 Zimmer, alle mit eigenem Bad und privatem Balkon mit seitlichem Meerblick, eingerichtet für Komfort und Eleganz.",
          "pt": "Há 6 quartos, todos com casa de banho privativa e varanda privada com vista lateral para o mar, pensados para o conforto e a elegância.",
          "zh": "共有 6 间客房，均带独立浴室和可侧望海景的私人阳台，讲究舒适与雅致。",
          "ja": "客室は6室。すべて専用バスルームと、海を斜めに望む専用バルコニー付きで、快適さと上品さのために整えられています。",
          "ar": "توجد 6 غرف، كلها بحمّام خاص وشرفة خاصة بإطلالة جانبية على البحر، مُعدّة للراحة والأناقة."
        },
        {
          "it": "L'esclusiva Suite sul Mare, con due balconi privati, ha una vista sulla penisola sorrentina e sull'isola di Capri, e si distingue per particolari elementi di arredo.",
          "en": "The exclusive Suite sul Mare, with two private balconies, looks onto the Sorrentine peninsula and the island of Capri, and is set apart by particular pieces of furniture.",
          "es": "La exclusiva Suite sul Mare, con dos balcones privados, mira a la península sorrentina y a la isla de Capri, y se distingue por elementos de decoración particulares.",
          "fr": "L'exclusive Suite sul Mare, avec deux balcons privés, donne sur la péninsule sorrentine et l'île de Capri, et se distingue par des éléments de décor particuliers.",
          "de": "Die exklusive Suite sul Mare hat zwei private Balkone, Blick auf die sorrentinische Halbinsel und die Insel Capri, und besondere Einrichtungsstücke.",
          "pt": "A exclusiva Suite sul Mare, com duas varandas privadas, volta-se para a península sorrentina e a ilha de Capri, e distingue-se por peças de mobiliário particulares.",
          "zh": "独有的 Suite sul Mare 带两处私人阳台，望向索伦托半岛和卡普里岛，并以特别的陈设见长。",
          "ja": "特別な Suite sul Mare は専用バルコニーが二つ。ソレント半島とカプリ島を望み、特徴のある家具が際立ちます。",
          "ar": "الجناح الحصري Suite sul Mare، بشرفتين خاصتين، يطل على شبه جزيرة سورينتو وجزيرة كابري، ويتميز بقطع أثاث خاصة."
        },
        {
          "it": "Le camere valorizzano gli elementi architettonici originali, tra cui le travi di castagno a vista, restaurate con cura.",
          "en": "The rooms bring out the original architectural elements, including the exposed chestnut beams, carefully restored.",
          "es": "Las habitaciones ponen en valor los elementos arquitectónicos originales, entre ellos las vigas de castaño vistas, restauradas con cuidado.",
          "fr": "Les chambres mettent en valeur les éléments d'architecture d'origine, dont les poutres de châtaignier apparentes, restaurées avec soin.",
          "de": "Die Zimmer heben die ursprünglichen Architekturelemente hervor, darunter die sichtbaren Kastanienbalken, sorgfältig restauriert.",
          "pt": "Os quartos valorizam os elementos arquitectónicos originais, entre eles as vigas de castanho à vista, restauradas com cuidado.",
          "zh": "客房保留并突出原有建筑元素，包括经过仔细修复的外露栗木梁。",
          "ja": "客室は元の建築要素を生かしています。丁寧に修復した栗の梁がむき出しです。",
          "ar": "تُبرز الغرف العناصر المعمارية الأصلية، ومنها عوارض الكستناء الظاهرة، بعد ترميمها بعناية."
        },
        {
          "it": "Nell'arredo: la luce calda delle abat-jour Foscarini, i lampadari trasparenti Kartell, i comodini in cristallo dalle linee curve. Il letto è in pelle color sabbia; armadio e scrivania portano la firma di noti designer scandinavi.",
          "en": "In the furnishings: the warm light of the Foscarini lamps, the transparent Kartell chandeliers, and crystal bedside tables with curved lines. The bed is sand-coloured leather; the wardrobe and desk are by well-known Scandinavian designers.",
          "es": "En el mobiliario: la luz cálida de las lámparas Foscarini, las lámparas de techo transparentes Kartell y las mesillas de cristal de líneas curvas. La cama es de piel color arena; el armario y el escritorio son de conocidos diseñadores escandinavos.",
          "fr": "Dans l'ameublement : la lumière chaude des lampes Foscarini, les lustres transparents Kartell, les tables de chevet en cristal aux lignes courbes. Le lit est en cuir couleur sable ; l'armoire et le bureau sont signés de designers scandinaves connus.",
          "de": "In der Einrichtung: das warme Licht der Foscarini-Leuchten, die transparenten Kartell-Kronleuchter, Nachttische aus Kristall mit geschwungenen Linien. Das Bett ist aus sandfarbenem Leder; Schrank und Schreibtisch stammen von bekannten skandinavischen Designern.",
          "pt": "No mobiliário: a luz quente dos candeeiros Foscarini, os lustres transparentes Kartell, as mesas de cabeceira em cristal de linhas curvas. A cama é de pele cor de areia; o armário e a secretária são de designers escandinavos conhecidos.",
          "zh": "陈设包括：Foscarini 灯的暖光、透明的 Kartell 吊灯，以及线条柔和的水晶床头柜。床是沙色皮革；衣柜和书桌出自知名北欧设计师。",
          "ja": "備え付けは、Foscarini のあたたかい光、透明な Kartell のシャンデリア、曲線のクリスタル製ナイトテーブル。ベッドは砂色の革。ワードローブとデスクは北欧のデザイナーによるものです。",
          "ar": "في التأثيث: ضوء مصابيح Foscarini الدافئ، وثريات Kartell الشفافة، وطاولات جانب السرير من البلور بخطوط منحنية. السرير من الجلد بلون الرمل، وخزانة الملابس والمكتب من مصممين اسكندنافيين معروفين."
        },
        {
          "it": "In alcune camere un sommier può diventare un terzo letto. In tutte si può aggiungere una culla.",
          "en": "In some rooms a daybed can be made into a third bed. A cot can be added in every room.",
          "es": "En algunas habitaciones un sofá cama puede convertirse en una tercera cama. En todas se puede añadir una cuna.",
          "fr": "Dans certaines chambres, un lit de jour peut devenir un troisième lit. Un berceau peut être ajouté dans toutes les chambres.",
          "de": "In einigen Zimmern kann ein Daybed zu einem dritten Bett werden. In jedem Zimmer kann ein Kinderbett hinzugefügt werden.",
          "pt": "Em alguns quartos, um sommier pode tornar-se uma terceira cama. Em todos se pode acrescentar um berço.",
          "zh": "部分客房的坐卧两用床可改为第三张床。每间客房都可以加一张婴儿床。",
          "ja": "一部の客室ではデイベッドを三人目のベッドにできます。どの客室にもベビーベッドを追加できます。",
          "ar": "في بعض الغرف يمكن تحويل أريكة نوم إلى سرير ثالث. ويمكن إضافة سرير أطفال في كل الغرف."
        },
        {
          "it": "I bagni, tutti interni alle camere, hanno mattonelle in ceramica di Vietri e un'ampia doccia con porte in cristallo scorrevoli. Le travi di castagno a vista sono anche nei bagni.",
          "en": "The bathrooms, all en suite, have Vietri ceramic tiles and a large shower with sliding crystal doors. The exposed chestnut beams are in the bathrooms too.",
          "es": "Los baños, todos dentro de las habitaciones, tienen azulejos de cerámica de Vietri y una ducha amplia con puertas correderas de cristal. Las vigas de castaño vistas están también en los baños.",
          "fr": "Les salles de bain, toutes dans les chambres, ont des carreaux de céramique de Vietri et une grande douche à portes coulissantes en cristal. Les poutres de châtaignier apparentes sont aussi dans les salles de bain.",
          "de": "Die Bäder, alle im Zimmer, haben Fliesen aus Vietri-Keramik und eine große Dusche mit Schiebetüren aus Kristall. Die sichtbaren Kastanienbalken sind auch in den Bädern.",
          "pt": "As casas de banho, todas no quarto, têm azulejos de cerâmica de Vietri e um duche amplo com portas de cristal de correr. As vigas de castanho à vista estão também nas casas de banho.",
          "zh": "浴室都在客房内，铺着维耶特里陶瓷砖，并有一间带水晶推拉门的宽大淋浴。外露的栗木梁也出现在浴室里。",
          "ja": "浴室はすべて客室の中にあり、ヴィエトリ陶のタイルと、クリスタルの引き戸がついた広いシャワーがあります。むき出しの栗の梁は浴室にもあります。",
          "ar": "الحمّامات كلها داخل الغرف، ببلاط خزف فييتري ودش واسع بأبواب بلور منزلقة. وعوارض الكستناء الظاهرة موجودة في الحمّامات أيضًا."
        },
        {
          "it": "Tutte le camere sono non fumatori.",
          "en": "All rooms are non-smoking.",
          "es": "Todas las habitaciones son para no fumadores.",
          "fr": "Toutes les chambres sont non-fumeurs.",
          "de": "Alle Zimmer sind Nichtraucherzimmer.",
          "pt": "Todos os quartos são para não fumadores.",
          "zh": "所有客房均为禁烟。",
          "ja": "すべての客室は禁煙です。",
          "ar": "جميع الغرف لغير المدخنين."
        }
      ],
      "bullets": [
        {
          "it": "Climatizzazione regolabile in ogni camera",
          "en": "Air conditioning you can set in each room",
          "es": "Climatización regulable en cada habitación",
          "fr": "Climatisation réglable dans chaque chambre",
          "de": "Klimaanlage, in jedem Zimmer regulierbar",
          "pt": "Climatização regulável em cada quarto",
          "zh": "每间客房可单独调节的空调",
          "ja": "各客室で調節できる空調",
          "ar": "تكييف يمكن ضبطه في كل غرفة"
        },
        {
          "it": "Smart TV Full HD da 42 pollici",
          "en": "42-inch Full HD smart TV",
          "es": "Smart TV Full HD de 42 pulgadas",
          "fr": "Smart TV Full HD de 42 pouces",
          "de": "42-Zoll-Smart-TV in Full HD",
          "pt": "Smart TV Full HD de 42 polegadas",
          "zh": "42 英寸 Full HD 智能电视",
          "ja": "42インチ Full HD スマートテレビ",
          "ar": "تلفاز ذكي Full HD مقاس 42 بوصة"
        },
        {
          "it": "Wi-Fi gratuito",
          "en": "Free Wi-Fi",
          "es": "Wi-Fi gratuito",
          "fr": "Wi-Fi gratuit",
          "de": "Kostenloses WLAN",
          "pt": "Wi-Fi gratuito",
          "zh": "免费 Wi-Fi",
          "ja": "無料 Wi-Fi",
          "ar": "واي فاي مجاني"
        },
        {
          "it": "Cassetta di sicurezza",
          "en": "Safe",
          "es": "Caja fuerte",
          "fr": "Coffre-fort",
          "de": "Safe",
          "pt": "Cofre",
          "zh": "保险箱",
          "ja": "金庫",
          "ar": "خزنة"
        },
        {
          "it": "Materasso memory",
          "en": "Memory-foam mattress",
          "es": "Colchón memory",
          "fr": "Matelas mémoire de forme",
          "de": "Memory-Matratze",
          "pt": "Colchão memory",
          "zh": "记忆棉床垫",
          "ja": "低反発マットレス",
          "ar": "مرتبة ميموري فوم"
        },
        {
          "it": "Doppi cuscini comfort",
          "en": "Two comfort pillows",
          "es": "Doble almohada de confort",
          "fr": "Double oreiller confort",
          "de": "Doppelte Komfortkissen",
          "pt": "Duas almofadas de conforto",
          "zh": "双份舒适枕头",
          "ja": "快適な枕が二つ",
          "ar": "وسادتان مريحتان"
        },
        {
          "it": "Minibar",
          "en": "Minibar",
          "es": "Minibar",
          "fr": "Minibar",
          "de": "Minibar",
          "pt": "Minibar",
          "zh": "迷你吧",
          "ja": "ミニバー",
          "ar": "ميني بار"
        },
        {
          "it": "Asciugacapelli",
          "en": "Hairdryer",
          "es": "Secador de pelo",
          "fr": "Sèche-cheveux",
          "de": "Haartrockner",
          "pt": "Secador de cabelo",
          "zh": "吹风机",
          "ja": "ヘアドライヤー",
          "ar": "مجفف شعر"
        },
        {
          "it": "Set da bagno di cortesia",
          "en": "Complimentary toiletries",
          "es": "Set de baño de cortesía",
          "fr": "Set de bain d'accueil",
          "de": "Pflegeprodukte im Bad",
          "pt": "Conjunto de banho de cortesia",
          "zh": "浴室洗漱用品",
          "ja": "バスアメニティ",
          "ar": "أدوات حمام مجانية"
        },
        {
          "it": "Reggivaligia in ottone con cinghie in cuoio",
          "en": "Brass luggage rack with leather straps",
          "es": "Soporte de maletas de latón con correas de cuero",
          "fr": "Porte-bagages en laiton à sangles de cuir",
          "de": "Gepäckständer aus Messing mit Lederriemen",
          "pt": "Suporte de malas em latão com correias de couro",
          "zh": "黄铜行李架，配皮带",
          "ja": "真鍮のラゲッジラック（革ベルト付き）",
          "ar": "حامل حقائب من النحاس بأربطة جلدية"
        }
      ]
    },
    {
      "id": "struttura",
      "icon": "palazzo",
      "type": "notes",
      "title": {
        "it": "La struttura",
        "en": "The house",
        "es": "La casa",
        "fr": "La maison",
        "de": "Das Haus",
        "pt": "A casa",
        "zh": "建筑与理念",
        "ja": "建物",
        "ar": "المبنى"
      },
      "image": {
        "src": "photos/reception.jpg",
        "webp": "photos/reception.webp",
        "alt": {
          "it": "Angolo dell'accoglienza, con una lampada, fiori e una valigia d'epoca",
          "en": "A corner of the house, with a lamp, flowers and a vintage suitcase",
          "es": "Un rincón de la casa, con una lámpara, flores y una maleta antigua",
          "fr": "Un coin de la maison, avec une lampe, des fleurs et une valise ancienne",
          "de": "Eine Ecke des Hauses, mit Lampe, Blumen und einem alten Koffer",
          "pt": "Um canto da casa, com um candeeiro, flores e uma mala antiga",
          "zh": "屋内一角：灯、花和一只老行李箱",
          "ja": "室内の一角。ランプと花、古いスーツケース",
          "ar": "ركن من البيت، مع مصباح وزهور وحقيبة قديمة"
        }
      },
      "paragraphs": [
        {
          "it": "La struttura è in un palazzo di fine Ottocento. È accogliente e arredata in stile moderno, con morbide contaminazioni classiche: lampadari di cristallo di Murano, una grande lanterna del Settecento, vecchie valigie e cappelliere — una collezione privata — che ricordano i viaggiatori di un tempo.",
          "en": "The house is in a late-19th-century building. It is welcoming and furnished in a modern style, with soft classical touches: Murano crystal chandeliers, a large 18th-century lantern, and old suitcases and hat boxes — a private collection — that recall travellers of another time.",
          "es": "La casa está en un palacio de finales del siglo XIX. Es acogedora y está amueblada en estilo moderno, con suaves toques clásicos: lámparas de cristal de Murano, una gran linterna del siglo XVIII, y viejas maletas y sombrereras — una colección privada — que recuerdan a los viajeros de otro tiempo.",
          "fr": "La maison est dans un palais de la fin du XIXe siècle. Elle est accueillante et meublée dans un style moderne, avec de douces touches classiques : lustres en cristal de Murano, une grande lanterne du XVIIIe siècle, vieilles valises et cartons à chapeaux — une collection privée — qui rappellent les voyageurs d'autrefois.",
          "de": "Das Haus liegt in einem Gebäude vom Ende des 19. Jahrhunderts. Es ist einladend und modern eingerichtet, mit sanften klassischen Einsprengseln: Murano-Kristalllüster, eine große Laterne aus dem 18. Jahrhundert, alte Koffer und Hutschachteln — eine Privatsammlung — die an Reisende von einst erinnern.",
          "pt": "A casa está num palácio de finais do século XIX. É acolhedora e mobilada em estilo moderno, com suaves toques clássicos: lustres de cristal de Murano, uma grande lanterna do século XVIII, malas antigas e caixas de chapéus — uma coleção privada — que lembram os viajantes de outros tempos.",
          "zh": "建筑位于一座十九世纪末的宅邸中。室内亲切，以现代风格布置，并带有柔和的古典点缀：穆拉诺水晶吊灯、一盏十八世纪的大灯笼，以及旧行李箱和帽盒——私人收藏——令人想起从前的旅人。",
          "ja": "建物は19世紀末の邸宅です。現代的な様式に、やわらかな古典が混ざります。ムラーノのクリスタルのシャンデリア、18世紀の大きなランタン、古いスーツケースと帽子箱（プライベートコレクション）が、かつての旅人を思い出させます。",
          "ar": "المبنى في قصر من أواخر القرن التاسع عشر. مضياف ومؤثث بأسلوب حديث، مع لمسات كلاسيكية ناعمة: ثريات من بلور مورانو، وفانوس كبير من القرن الثامن عشر، وحقائب قديمة وعلب قبعات — مجموعة خاصة — تذكّر بمسافري زمن آخر."
        },
        {
          "it": "I soffitti, alti più di quattro metri, danno luce e ampiezza agli spazi. Sono arricchiti da antiche travi di castagno e dalle panconcelle, le pianelle in cotto tra le travi, restaurate con cura: il nostro fiore all'occhiello.",
          "en": "The ceilings, more than four metres high, give the rooms light and a sense of space. They are enriched by ancient chestnut beams and by the panconcelle, the terracotta tiles between the beams, carefully restored: our point of pride.",
          "es": "Los techos, de más de cuatro metros, dan luz y amplitud. Los enriquecen antiguas vigas de castaño y las panconcelle, las baldosas de terracota entre las vigas, restauradas con cuidado: nuestro mayor orgullo.",
          "fr": "Les plafonds, hauts de plus de quatre mètres, donnent lumière et ampleur. Ils sont enrichis d'anciennes poutres de châtaignier et des panconcelle, les tuiles de terre cuite entre les poutres, restaurées avec soin : notre fierté.",
          "de": "Die mehr als vier Meter hohen Decken geben Licht und Weite. Sie werden von alten Kastanienbalken und den Panconcelle bereichert, den Terrakottafliesen zwischen den Balken, sorgfältig restauriert: unser besonderer Stolz.",
          "pt": "Os tectos, com mais de quatro metros, dão luz e amplitude. São enriquecidos por antigas vigas de castanho e pelas panconcelle, os ladrilhos de terracota entre as vigas, restauradas com cuidado: o nosso orgulho.",
          "zh": "天花板高于四米，让空间明亮而开阔。古老的栗木梁和梁间的陶砖 panconcelle 经过仔细修复，是我们最得意之处。",
          "ja": "天井は4メートルを超え、明るさと広がりを与えます。古い栗の梁と、梁の間のテラコッタの panconcelle を丁寧に修復したものが、私たちの自慢です。",
          "ar": "الأسقف، التي يزيد ارتفاعها على أربعة أمتار، تمنح الضوء والاتساع. تزيّنها عوارض كستناء قديمة وpanconcelle، بلاط الطين بين العوارض، بعد ترميمها بعناية: وهي مفخرتنا."
        },
        {
          "it": "Le nostre parole del cuore sono professionalità, qualità del servizio, calore umano e senso estetico del bello. Vi offriamo l'eleganza e il calore dell'antica accoglienza partenopea.",
          "en": "The words we hold dear are professionalism, quality of service, human warmth and an aesthetic sense of beauty. We offer you the elegance and warmth of old Neapolitan hospitality.",
          "es": "Nuestras palabras de corazón son profesionalidad, calidad del servicio, calidez humana y sentido estético de la belleza. Les ofrecemos la elegancia y el calor de la antigua hospitalidad napolitana.",
          "fr": "Nos mots de cœur sont professionnalisme, qualité du service, chaleur humaine et sens esthétique du beau. Nous vous offrons l'élégance et la chaleur de l'ancienne hospitalité napolitaine.",
          "de": "Unsere Herzensworte sind Professionalität, Qualität des Service, menschliche Wärme und ein ästhetisches Gefühl für das Schöne. Wir bieten Ihnen die Eleganz und Wärme der alten neapolitanischen Gastfreundschaft.",
          "pt": "As nossas palavras de coração são profissionalismo, qualidade do serviço, calor humano e sentido estético do belo. Oferecemos-vos a elegância e o calor da antiga hospitalidade napolitana.",
          "zh": "我们心中的词是：专业、服务品质、人情的温度，以及对美的感觉。我们把古老那不勒斯待客之道的优雅与温暖献给你们。",
          "ja": "私たちの大切な言葉は、プロ意識、サービスの質、人のあたたかさ、そして美への感覚です。古くからのナポリのおもてなしの優雅さとぬくもりをお届けします。",
          "ar": "كلماتنا من القلب هي الاحتراف، وجودة الخدمة، ودفء الإنسان، والحس الجمالي بالجمال. نقدم لكم أناقة ودفء الضيافة النابولية القديمة."
        },
        {
          "quote": true,
          "text": {
            "it": "«Il mondo sarà salvato dalla bellezza.» — Fëdor Dostoevskij",
            "en": "“Beauty will save the world.” — Fyodor Dostoevsky",
            "es": "«La belleza salvará al mundo.» — Fiódor Dostoievski",
            "fr": "« La beauté sauvera le monde. » — Fiodor Dostoïevski",
            "de": "„Die Schönheit wird die Welt retten.“ — Fjodor Dostojewski",
            "pt": "«A beleza salvará o mundo.» — Fiódor Dostoiévski",
            "zh": "“美将拯救世界。”——费奥多尔·陀思妥耶夫斯基",
            "ja": "「美は世界を救う。」——フョードル・ドストエフスキー",
            "ar": "«الجمال سينقذ العالم.» — فيودور دوستويفسكي"
          }
        },
        {
          "it": "Un ambiente elegante e accogliente per viaggiatori curiosi, esploratori e collezionisti di immagini, oggetti ed esperienze: un luogo dove vivere, nei gesti di ogni giorno, le emozioni del gusto italiano.",
          "en": "An elegant, welcoming place for curious travellers, explorers and collectors of images, objects and experiences: somewhere to live, in everyday gestures, the emotions of Italian taste.",
          "es": "Un ambiente elegante y acogedor para viajeros curiosos, exploradores y coleccionistas de imágenes, objetos y experiencias: un lugar donde vivir, en los gestos de cada día, las emociones del gusto italiano.",
          "fr": "Un lieu élégant et accueillant pour voyageurs curieux, explorateurs et collectionneurs d'images, d'objets et d'expériences : un endroit où vivre, dans les gestes de chaque jour, les émotions du goût italien.",
          "de": "Ein eleganter, einladender Ort für neugierige Reisende, Entdecker und Sammler von Bildern, Dingen und Erfahrungen: ein Platz, um im Alltag die Empfindungen des italienischen Geschmacks zu leben.",
          "pt": "Um ambiente elegante e acolhedor para viajantes curiosos, exploradores e colecionadores de imagens, objetos e experiências: um lugar onde viver, nos gestos de cada dia, as emoções do gosto italiano.",
          "zh": "这里优雅而亲切，适合好奇的旅人、探索者，以及收集图像、器物与体验的人：在日常的举动里，感受意大利味道带来的情绪。",
          "ja": "好奇心のある旅人、探検する人、イメージや物や体験を集める人のための、優雅であたたかい場所。日々の所作のなかで、イタリアの味の感情を生きるところです。",
          "ar": "مكان أنيق ومضياف للمسافرين الفضوليين والمستكشفين وجامعي الصور والأشياء والتجارب: مكان تعيشون فيه، في حركات كل يوم، مشاعر الذوق الإيطالي."
        },
        {
          "it": "Un esclusivo boutique hotel sul lungomare di Napoli, dove il bello è nei particolari ricercati, e dove la cultura dell'ospitalità e l'attenzione per l'ambiente stanno in ogni dettaglio. Per chi cerca un rapporto diretto con le persone, e case e luoghi non convenzionali, ricchi di storie, di gusti nuovi e di sapori genuini.",
          "en": "An exclusive boutique hotel on the Naples seafront, where beauty is in the carefully chosen details, and where the culture of hospitality and care for the environment are in every detail. For travellers who want a direct relationship with people, and unconventional houses and places, full of stories, new tastes and genuine flavours.",
          "es": "Un exclusivo boutique hotel en el paseo marítimo de Nápoles, donde la belleza está en los detalles buscados, y donde la cultura de la hospitalidad y el cuidado del entorno están en cada detalle. Para quien busca una relación directa con las personas, y casas y lugares no convencionales, llenos de historias, gustos nuevos y sabores genuinos.",
          "fr": "Un boutique hotel exclusif sur le front de mer de Naples, où le beau est dans les détails recherchés, et où la culture de l'hospitalité et l'attention à l'environnement sont dans chaque détail. Pour qui cherche un rapport direct avec les personnes, et des maisons et des lieux non conventionnels, riches d'histoires, de goûts nouveaux et de saveurs vraies.",
          "de": "Ein exklusives Boutique-Hotel an der Uferpromenade von Neapel, wo das Schöne in den gesuchten Details liegt und die Kultur der Gastfreundschaft wie die Achtsamkeit für die Umwelt in jedem Detail stecken. Für alle, die einen direkten Bezug zu Menschen suchen, und unkonventionelle Häuser und Orte, reich an Geschichten, neuen Geschmäckern und echten Aromen.",
          "pt": "Um boutique hotel exclusivo no passeio marítimo de Nápoles, onde o belo está nos pormenores procurados, e onde a cultura da hospitalidade e o cuidado com o ambiente estão em cada detalhe. Para quem procura uma relação direta com as pessoas, e casas e lugares não convencionais, ricos de histórias, gostos novos e sabores genuínos.",
          "zh": "那不勒斯海滨上的一家独有精品酒店：美在精心挑选的细节里，待客的文化和对环境的用心也在每一个细节里。适合想与人直接相处的旅人，也适合非同寻常、充满故事、新口味和真滋味的房子与地方。",
          "ja": "ナポリの海岸通りにある特別なブティックホテル。美しさは選び抜かれた細部にあり、おもてなしの文化と環境への配慮もあらゆる細部にあります。人と直接かかわりたい方へ。型にはまらない家と場所、物語と新しい味、本物の風味に満ちたところです。",
          "ar": "فندق بوتيك حصري على كورنيش نابولي، حيث الجمال في التفاصيل المختارة، وثقافة الضيافة والاهتمام بالبيئة في كل تفصيل. لمن يبحث عن علاقة مباشرة مع الناس، وعن بيوت وأماكن غير تقليدية، غنية بالقصص والأذواق الجديدة والنكهات الأصيلة."
        },
        {
          "quote": true,
          "text": {
            "it": "«Non c'è lusso più prezioso della cultura», e con essa uno stile di vita responsabile, perché le generazioni future possano godere tutta la bellezza del mondo.",
            "en": "“There is no luxury more precious than culture,” and with it a responsible way of living, so that future generations may enjoy all the beauty of the world.",
            "es": "«No hay lujo más precioso que la cultura», y con ella un estilo de vida responsable, para que las generaciones futuras puedan gozar de toda la belleza del mundo.",
            "fr": "« Il n'y a pas de luxe plus précieux que la culture », et avec elle un mode de vie responsable, pour que les générations futures puissent jouir de toute la beauté du monde.",
            "de": "„Es gibt keinen kostbareren Luxus als die Kultur“, und mit ihr eine verantwortungsvolle Lebensweise, damit künftige Generationen die ganze Schönheit der Welt genießen können.",
            "pt": "«Não há luxo mais precioso do que a cultura», e com ela um estilo de vida responsável, para que as gerações futuras possam gozar de toda a beleza do mundo.",
            "zh": "“没有比文化更珍贵的奢侈”，随之而来的是一种负责任的生活方式，让后代也能享有世界上全部的美。",
            "ja": "「文化ほど貴重な贅沢はない。」そして、未来の世代が世界の美しさをすべて享受できるような、責任ある生き方。",
            "ar": "«لا ترف أثمن من الثقافة»، ومعها أسلوب حياة مسؤول، كي تنعم الأجيال القادمة بكل جمال العالم."
          }
        },
        {
          "it": "Mareluna non è solo un nome, è una filosofia. Facciamo del nostro meglio per essere il più ecologici possibile: sistemi per ridurre i consumi di energia, raccolta differenziata e un turismo responsabile, nel rispetto della città che amiamo.",
          "en": "Mareluna is not only a name, it is a philosophy. We do our best to be as ecological as we can: systems to reduce energy use, recycling, and responsible tourism, with respect for the city we love.",
          "es": "Mareluna no es solo un nombre, es una filosofía. Hacemos lo posible por ser lo más ecológicos que podamos: sistemas para reducir el consumo de energía, recogida selectiva y un turismo responsable, con respeto por la ciudad que amamos.",
          "fr": "Mareluna n'est pas seulement un nom, c'est une philosophie. Nous faisons de notre mieux pour être aussi écologiques que possible : des systèmes pour réduire la consommation d'énergie, le tri des déchets et un tourisme responsable, dans le respect de la ville que nous aimons.",
          "de": "Mareluna ist nicht nur ein Name, es ist eine Philosophie. Wir tun unser Bestes, so ökologisch wie möglich zu sein: Systeme zur Senkung des Energieverbrauchs, Mülltrennung und verantwortlicher Tourismus, im Respekt vor der Stadt, die wir lieben.",
          "pt": "Mareluna não é apenas um nome, é uma filosofia. Fazemos o possível para ser o mais ecológicos que conseguirmos: sistemas para reduzir o consumo de energia, recolha seletiva e um turismo responsável, no respeito pela cidade que amamos.",
          "zh": "Mareluna 不只是一个名字，更是一种理念。我们尽力做到更环保：降低能耗的系统、垃圾分类，以及尊重我们所爱这座城市的负责任旅游。",
          "ja": "Mareluna は名前だけではありません。一つの考え方です。できるだけ環境に配慮します。エネルギーの使用を減らす仕組み、分別、そして愛する街を敬う責任ある観光です。",
          "ar": "Mareluna ليس اسمًا فحسب، بل فلسفة. نبذل وسعنا لنكون أقرب ما يمكن إلى احترام البيئة: أنظمة لخفض استهلاك الطاقة، وفرز النفايات، وسياحة مسؤولة، احترامًا للمدينة التي نحب."
        }
      ]
    },
    {
      "id": "checkin",
      "icon": "checkin",
      "type": "notes",
      "title": {
        "it": "Check-in",
        "en": "Check-in",
        "es": "Check-in",
        "fr": "Check-in",
        "de": "Check-in",
        "pt": "Check-in",
        "zh": "入住",
        "ja": "チェックイン",
        "ar": "تسجيل الوصول"
      },
      "paragraphs": [
        {
          "it": "Il check-in è possibile dalle 12:00 alle 22:00. Se arrivate prima, cercheremo di rendere l'attesa la più breve possibile.",
          "en": "Check-in is possible from 12:00 to 22:00. If you arrive earlier, we will try to make the wait as short as we can.",
          "es": "El check-in es posible de 12:00 a 22:00. Si llegan antes, intentaremos que la espera sea lo más breve posible.",
          "fr": "Le check-in est possible de 12 h 00 à 22 h 00. Si vous arrivez plus tôt, nous essaierons de rendre l'attente aussi courte que possible.",
          "de": "Der Check-in ist von 12:00 bis 22:00 Uhr möglich. Wenn Sie früher ankommen, versuchen wir, die Wartezeit so kurz wie möglich zu halten.",
          "pt": "O check-in é possível das 12:00 às 22:00. Se chegarem mais cedo, procuraremos tornar a espera o mais breve possível.",
          "zh": "入住时间为 12:00 至 22:00。如果你们提前到达，我们会尽量缩短等候。",
          "ja": "チェックインは 12:00 から 22:00 です。それより早く着かれた場合は、待ち時間をできるだけ短くするよう努めます。",
          "ar": "يمكن تسجيل الوصول من الساعة 12:00 إلى 22:00. إذا وصلتم أبكر، سنحاول أن نجعل الانتظار أقصر ما يمكن."
        },
        {
          "it": "Il concierge, attivo 24 ore su 24, vi permette di rientrare a qualsiasi ora.",
          "en": "The concierge, on duty 24 hours a day, means you can return at any hour.",
          "es": "El conserje, activo las 24 horas, les permite volver a cualquier hora.",
          "fr": "Le concierge, présent 24 heures sur 24, vous permet de rentrer à toute heure.",
          "de": "Der Concierge, rund um die Uhr im Dienst, ermöglicht Ihnen die Rückkehr zu jeder Stunde.",
          "pt": "O concierge, ativo 24 horas por dia, permite-vos regressar a qualquer hora.",
          "zh": "礼宾全天 24 小时在岗，你们可以随时回来。",
          "ja": "コンシェルジュは24時間対応なので、いつでも戻れます。",
          "ar": "الكونسيرج، العامل على مدار الساعة، يتيح لكم العودة في أي وقت."
        }
      ],
      "pending": {
        "it": "Procedura e documenti: contenuto in arrivo.",
        "en": "Procedure and documents: coming soon.",
        "es": "Procedimiento y documentos: contenido próximamente.",
        "fr": "Procédure et documents : contenu à venir.",
        "de": "Ablauf und Dokumente: folgen.",
        "pt": "Procedimento e documentos: conteúdo em breve.",
        "zh": "办理流程和所需证件：即将更新。",
        "ja": "手続きと必要書類：近日公開。",
        "ar": "الإجراءات والوثائق: المحتوى قادم."
      }
    },
    {
      "id": "wifi",
      "icon": "wifi",
      "type": "notes",
      "title": {
        "it": "Wi-Fi",
        "en": "Wi-Fi",
        "es": "Wi-Fi",
        "fr": "Wi-Fi",
        "de": "WLAN",
        "pt": "Wi-Fi",
        "zh": "Wi-Fi",
        "ja": "Wi-Fi",
        "ar": "Wi-Fi"
      },
      "paragraphs": [
        {
          "it": "Il Wi-Fi è gratuito in tutta la struttura, anche in camera. Potete collegarvi da computer o da telefono.",
          "en": "Wi-Fi is free throughout the house, including in the room. You can connect from a computer or a phone.",
          "es": "El Wi-Fi es gratuito en toda la casa, también en la habitación. Pueden conectarse desde un ordenador o un teléfono.",
          "fr": "Le Wi-Fi est gratuit dans toute la maison, y compris dans la chambre. Vous pouvez vous connecter depuis un ordinateur ou un téléphone.",
          "de": "Das WLAN ist im ganzen Haus kostenlos, auch im Zimmer. Sie können sich mit Computer oder Telefon verbinden.",
          "pt": "O Wi-Fi é gratuito em toda a casa, também no quarto. Podem ligar-se a partir de um computador ou de um telefone.",
          "zh": "整栋建筑免费 Wi-Fi，客房内也有。可以用电脑或手机连接。",
          "ja": "Wi-Fi は建物全体で無料、客室でも使えます。パソコンからも電話からも接続できます。",
          "ar": "الواي فاي مجاني في كل المبنى، وفي الغرفة أيضًا. يمكنكم الاتصال من حاسوب أو من هاتف."
        }
      ],
      "pending": {
        "it": "Nome della rete e password: contenuto in arrivo.",
        "en": "Network name and password: coming soon.",
        "es": "Nombre de la red y contraseña: contenido próximamente.",
        "fr": "Nom du réseau et mot de passe : contenu à venir.",
        "de": "Netzwerkname und Passwort: folgen.",
        "pt": "Nome da rede e palavra-passe: conteúdo em breve.",
        "zh": "网络名称和密码：即将更新。",
        "ja": "ネットワーク名とパスワード：近日公開。",
        "ar": "اسم الشبكة وكلمة المرور: المحتوى قادم."
      }
    },
    {
      "id": "servizi",
      "icon": "services",
      "type": "list",
      "title": {
        "it": "Servizi",
        "en": "Services",
        "es": "Servicios",
        "fr": "Services",
        "de": "Service",
        "pt": "Serviços",
        "zh": "服务",
        "ja": "サービス",
        "ar": "الخدمات"
      },
      "items": [
        {
          "icon": "living",
          "title": {
            "it": "Sala living",
            "en": "Living room",
            "es": "Sala living",
            "fr": "Salon",
            "de": "Wohnsalon",
            "pt": "Sala living",
            "zh": "起居室",
            "ja": "リビング",
            "ar": "صالة المعيشة"
          },
          "text": {
            "it": "Approfittate della sala affacciata sul mare per rilassarvi, leggere un libro o sorseggiare un bicchiere di vino, a qualsiasi ora.",
            "en": "Use the room looking onto the sea to relax, read a book or sip a glass of wine, at any hour.",
            "es": "Aprovechen la sala que da al mar para descansar, leer un libro o tomar una copa de vino, a cualquier hora.",
            "fr": "Profitez de la salle qui donne sur la mer pour vous détendre, lire un livre ou boire un verre de vin, à toute heure.",
            "de": "Nutzen Sie den Saal mit Meerblick, um sich zu entspannen, ein Buch zu lesen oder ein Glas Wein zu trinken — zu jeder Stunde.",
            "pt": "Aproveitem a sala voltada para o mar para descansar, ler um livro ou beber um copo de vinho, a qualquer hora.",
            "zh": "可以随时使用这间面海的厅：休息、读书，或慢慢喝一杯葡萄酒。",
            "ja": "海に面した部屋で、いつでもくつろいだり、本を読んだり、ワインを一杯どうぞ。",
            "ar": "استفيدوا من القاعة المطلة على البحر للاسترخاء أو قراءة كتاب أو احتساء كأس من النبيذ، في أي ساعة."
          }
        },
        {
          "icon": "tea",
          "title": {
            "it": "Tea corner",
            "en": "Tea corner",
            "es": "Tea corner",
            "fr": "Tea corner",
            "de": "Tea corner",
            "pt": "Tea corner",
            "zh": "茶角",
            "ja": "ティーコーナー",
            "ar": "ركن الشاي"
          },
          "text": {
            "it": "Un angolo tè per preparare una tisana in autonomia, in camera o nella sala affacciata sul mare.",
            "en": "A tea corner where you can make a hot infusion yourselves, in the room or in the lounge looking onto the sea.",
            "es": "Un rincón del té para prepararse una infusión con autonomía, en la habitación o en la sala que da al mar.",
            "fr": "Un coin thé pour préparer une infusion en toute autonomie, dans la chambre ou dans la salle qui donne sur la mer.",
            "de": "Eine Teecke, an der Sie sich selbst einen Aufguss bereiten können, im Zimmer oder im Saal mit Meerblick.",
            "pt": "Um canto do chá para prepararem uma infusão sozinhos, no quarto ou na sala voltada para o mar.",
            "zh": "茶角可以自己泡一杯热饮，在客房里或在面海的厅里慢慢喝。",
            "ja": "ティーコーナーで、客室でも海に面した部屋でも、自分で温かいハーブティーを入れられます。",
            "ar": "ركن شاي لتحضير منقوع ساخن بأنفسكم، في الغرفة أو في القاعة المطلة على البحر."
          }
        },
        {
          "icon": "wine",
          "title": {
            "it": "Degustazioni",
            "en": "Wine tastings",
            "es": "Catas",
            "fr": "Dégustations",
            "de": "Verkostungen",
            "pt": "Provas",
            "zh": "品鉴",
            "ja": "試飲",
            "ar": "تذوق"
          },
          "text": {
            "it": "Potrete degustare i migliori vini regionali. Orari e costi: contenuto in arrivo.",
            "en": "You will be able to taste the best regional wines. Hours and prices: coming soon.",
            "es": "Podrán degustar los mejores vinos regionales. Horarios y precios: contenido próximamente.",
            "fr": "Vous pourrez déguster les meilleurs vins régionaux. Horaires et prix : contenu à venir.",
            "de": "Sie können die besten regionalen Weine verkosten. Zeiten und Preise: folgen.",
            "pt": "Poderão provar os melhores vinhos regionais. Horários e preços: conteúdo em breve.",
            "zh": "可以品尝当地最好的葡萄酒。时间与费用：即将更新。",
            "ja": "土地の優れたワインを試飲できます。時間と料金：近日公開。",
            "ar": "يمكنكم تذوق أفضل النبيذ المحلي. المواعيد والتكاليف: المحتوى قادم."
          }
        },
        {
          "icon": "languages",
          "title": {
            "it": "Lingue",
            "en": "Languages",
            "es": "Idiomas",
            "fr": "Langues",
            "de": "Sprachen",
            "pt": "Línguas",
            "zh": "语言",
            "ja": "言語",
            "ar": "اللغات"
          },
          "text": {
            "it": "Parliamo italiano, inglese, spagnolo, francese e portoghese.",
            "en": "We speak Italian, English, Spanish, French and Portuguese.",
            "es": "Hablamos italiano, inglés, español, francés y portugués.",
            "fr": "Nous parlons italien, anglais, espagnol, français et portugais.",
            "de": "Wir sprechen Italienisch, Englisch, Spanisch, Französisch und Portugiesisch.",
            "pt": "Falamos italiano, inglês, espanhol, francês e português.",
            "zh": "我们说意大利语、英语、西班牙语、法语和葡萄牙语。",
            "ja": "イタリア語、英語、スペイン語、フランス語、ポルトガル語を話します。",
            "ar": "نتحدث الإيطالية والإنجليزية والإسبانية والفرنسية والبرتغالية."
          }
        },
        {
          "icon": "fax",
          "title": {
            "it": "Fax ed email",
            "en": "Fax and email",
            "es": "Fax y correo",
            "fr": "Fax et e-mail",
            "de": "Fax und E-Mail",
            "pt": "Fax e e-mail",
            "zh": "传真与电子邮件",
            "ja": "ファクスとメール",
            "ar": "الفاكس والبريد"
          },
          "text": {
            "it": "Lo staff vi aiuta a ricevere e inviare email o fax.",
            "en": "The staff can help you receive and send email or fax.",
            "es": "El personal les ayuda a recibir y enviar correos o fax.",
            "fr": "L'équipe vous aide à recevoir et à envoyer des e-mails ou des fax.",
            "de": "Das Team hilft Ihnen, E-Mails oder Faxe zu empfangen und zu senden.",
            "pt": "A equipa ajuda-vos a receber e a enviar e-mails ou fax.",
            "zh": "工作人员可以协助收发电子邮件或传真。",
            "ja": "スタッフがメールやファクスの受信と送信をお手伝いします。",
            "ar": "يساعدكم الفريق على استلام وإرسال البريد الإلكتروني أو الفاكس."
          }
        },
        {
          "icon": "alarm",
          "title": {
            "it": "Sveglia",
            "en": "Wake-up call",
            "es": "Servicio de despertador",
            "fr": "Réveil",
            "de": "Weckruf",
            "pt": "Despertar",
            "zh": "叫醒服务",
            "ja": "モーニングコール",
            "ar": "إيقاظ"
          },
          "text": {
            "it": "Su richiesta è disponibile un servizio sveglia.",
            "en": "A wake-up call is available on request.",
            "es": "Bajo petición hay un servicio de despertador.",
            "fr": "Sur demande, un service de réveil est disponible.",
            "de": "Auf Wunsch gibt es einen Weckruf.",
            "pt": "Mediante pedido, há um serviço de despertar.",
            "zh": "如需叫醒服务，可以提出。",
            "ja": "ご希望があればモーニングコールがあります。",
            "ar": "تتوفر خدمة إيقاظ عند الطلب."
          }
        },
        {
          "icon": "cards",
          "title": {
            "it": "Carte accettate",
            "en": "Cards accepted",
            "es": "Tarjetas aceptadas",
            "fr": "Cartes acceptées",
            "de": "Akzeptierte Karten",
            "pt": "Cartões aceites",
            "zh": "接受的银行卡",
            "ja": "使えるカード",
            "ar": "البطاقات المقبولة"
          },
          "text": {
            "it": "Visa, Mastercard, Maestro, Carta Sì, Pago bancomat.",
            "en": "Visa, Mastercard, Maestro, Carta Sì, Pago bancomat.",
            "es": "Visa, Mastercard, Maestro, Carta Sì, Pago bancomat.",
            "fr": "Visa, Mastercard, Maestro, Carta Sì, Pago bancomat.",
            "de": "Visa, Mastercard, Maestro, Carta Sì, Pago bancomat.",
            "pt": "Visa, Mastercard, Maestro, Carta Sì, Pago bancomat.",
            "zh": "Visa、Mastercard、Maestro、Carta Sì、Pago bancomat。",
            "ja": "Visa、Mastercard、Maestro、Carta Sì、Pago bancomat。",
            "ar": "Visa وMastercard وMaestro وCarta Sì وPago bancomat."
          }
        },
        {
          "icon": "luggage",
          "title": {
            "it": "Deposito bagagli",
            "en": "Luggage storage",
            "es": "Consigna de equipaje",
            "fr": "Consigne à bagages",
            "de": "Gepäckaufbewahrung",
            "pt": "Depósito de bagagem",
            "zh": "行李寄存",
            "ja": "荷物預かり",
            "ar": "إيداع الأمتعة"
          },
          "text": {
            "it": "Il giorno della partenza custodiamo i bagagli senza costi aggiuntivi, così potete godervi Napoli fino all'ultimo minuto.",
            "en": "On departure day we keep your luggage at no extra charge, so you can enjoy Naples until the last minute.",
            "es": "El día de la salida guardamos el equipaje sin coste adicional, para que puedan disfrutar de Nápoles hasta el último minuto.",
            "fr": "Le jour du départ, nous gardons les bagages sans frais supplémentaires, pour que vous profitiez de Naples jusqu'à la dernière minute.",
            "de": "Am Abreisetag verwahren wir das Gepäck ohne Aufpreis, damit Sie Neapel bis zur letzten Minute genießen können.",
            "pt": "No dia da partida guardamos as malas sem custo adicional, para que possam aproveitar Nápoles até ao último minuto.",
            "zh": "离开当天我们免费寄存行李，方便你们把那不勒斯享受到最后一刻。",
            "ja": "出発の日は追加料金なしでお荷物をお預かりします。最後の一分までナポリを楽しめます。",
            "ar": "يوم المغادرة نحفظ الأمتعة دون تكلفة إضافية، كي تستمتعوا بنابولي حتى اللحظة الأخيرة."
          }
        }
      ]
    },
    {
      "id": "posizione",
      "icon": "pin",
      "type": "location",
      "title": {
        "it": "Posizione",
        "en": "Location",
        "es": "Ubicación",
        "fr": "Adresse",
        "de": "Lage",
        "pt": "Localização",
        "zh": "位置",
        "ja": "場所",
        "ar": "الموقع"
      },
      "paragraphs": [
        {
          "it": "Il Mareluna Suite de Charme è in Via Partenope 1, il tratto pedonale del lungomare Caracciolo, la zona più centrale e suggestiva della città.",
          "en": "Mareluna Suite de Charme is at Via Partenope 1, the pedestrian stretch of the Lungomare Caracciolo, the most central and evocative part of the city.",
          "es": "Mareluna Suite de Charme está en Via Partenope 1, el tramo peatonal del Lungomare Caracciolo, la zona más céntrica y evocadora de la ciudad.",
          "fr": "Mareluna Suite de Charme est au 1 de la Via Partenope, le tronçon piéton du Lungomare Caracciolo, la partie la plus centrale et la plus évocatrice de la ville.",
          "de": "Mareluna Suite de Charme liegt in der Via Partenope 1, dem Fußgängerabschnitt des Lungomare Caracciolo, dem zentralsten und stimmungsvollsten Teil der Stadt.",
          "pt": "A Mareluna Suite de Charme fica na Via Partenope 1, o troço pedonal do Lungomare Caracciolo, a zona mais central e sugestiva da cidade.",
          "zh": "Mareluna Suite de Charme 位于 Via Partenope 1，即 Lungomare Caracciolo 的步行路段，是城中最中心、也最动人的一段。",
          "ja": "Mareluna Suite de Charme は Via Partenope 1、歩行者専用の Lungomare Caracciolo にあります。街でいちばん中心的で印象的な一帯です。",
          "ar": "تقع Mareluna Suite de Charme في Via Partenope 1، المقطع المخصّص للمشاة من Lungomare Caracciolo، أكثر مناطق المدينة مركزية وإيحاءً."
        },
        {
          "it": "Un luogo caro ai napoletani: l'abbraccio del golfo, il Castel dell'Ovo, la Villa Comunale e un immenso mare blu.",
          "en": "A place dear to Neapolitans: the embrace of the gulf, Castel dell'Ovo, the Villa Comunale and an immense blue sea.",
          "es": "Un lugar querido por los napolitanos: el abrazo del golfo, el Castel dell'Ovo, la Villa Comunale y un inmenso mar azul.",
          "fr": "Un lieu cher aux Napolitains : l'étreinte du golfe, le Castel dell'Ovo, la Villa Comunale et une immense mer bleue.",
          "de": "Ein den Neapolitanern teurer Ort: die Umarmung des Golfs, das Castel dell'Ovo, die Villa Comunale und ein unendliches blaues Meer.",
          "pt": "Um lugar querido dos napolitanos: o abraço do golfo, o Castel dell'Ovo, a Villa Comunale e um imenso mar azul.",
          "zh": "那不勒斯人珍视的地方：海湾的环抱、蛋堡、Villa Comunale，以及一片广阔的蓝海。",
          "ja": "ナポリの人に愛される場所。湾の抱擁、カステル・デッローヴォ、ヴィッラ・コムナーレ、そして果てしない青い海。",
          "ar": "مكان عزيز على أهل نابولي: حضن الخليج، وكاستل ديلوفو، وفيلا كومونالي، وبحر أزرق واسع."
        }
      ],
      "distances": [
        {
          "label": {
            "it": "Castel dell'Ovo",
            "en": "Castel dell'Ovo",
            "es": "Castel dell'Ovo",
            "fr": "Castel dell'Ovo",
            "de": "Castel dell'Ovo",
            "pt": "Castel dell'Ovo",
            "zh": "Castel dell'Ovo",
            "ja": "Castel dell'Ovo",
            "ar": "Castel dell'Ovo"
          },
          "detail": {
            "it": "3 min a piedi",
            "en": "3 min on foot",
            "es": "3 min a pie",
            "fr": "3 min à pied",
            "de": "3 Min. zu Fuß",
            "pt": "3 min a pé",
            "zh": "步行 3 分钟",
            "ja": "徒歩3分",
            "ar": "3 دقائق سيرًا"
          }
        },
        {
          "label": {
            "it": "Piazza del Plebiscito",
            "en": "Piazza del Plebiscito",
            "es": "Piazza del Plebiscito",
            "fr": "Piazza del Plebiscito",
            "de": "Piazza del Plebiscito",
            "pt": "Piazza del Plebiscito",
            "zh": "Piazza del Plebiscito",
            "ja": "Piazza del Plebiscito",
            "ar": "Piazza del Plebiscito"
          },
          "detail": {
            "it": "7 min a piedi · 700 m",
            "en": "7 min on foot · 700 m",
            "es": "7 min a pie · 700 m",
            "fr": "7 min à pied · 700 m",
            "de": "7 Min. zu Fuß · 700 m",
            "pt": "7 min a pé · 700 m",
            "zh": "步行 7 分钟 · 700 m",
            "ja": "徒歩7分 · 700 m",
            "ar": "7 دقائق سيرًا · 700 m"
          }
        },
        {
          "label": {
            "it": "Palazzo Reale",
            "en": "Royal Palace",
            "es": "Palacio Real",
            "fr": "Palais royal",
            "de": "Königspalast",
            "pt": "Palácio Real",
            "zh": "王宫",
            "ja": "王宮",
            "ar": "القصر الملكي"
          },
          "detail": {
            "it": "8 min a piedi · 800 m",
            "en": "8 min on foot · 800 m",
            "es": "8 min a pie · 800 m",
            "fr": "8 min à pied · 800 m",
            "de": "8 Min. zu Fuß · 800 m",
            "pt": "8 min a pé · 800 m",
            "zh": "步行 8 分钟 · 800 m",
            "ja": "徒歩8分 · 800 m",
            "ar": "8 دقائق سيرًا · 800 m"
          }
        },
        {
          "label": {
            "it": "Teatro San Carlo",
            "en": "Teatro San Carlo",
            "es": "Teatro San Carlo",
            "fr": "Teatro San Carlo",
            "de": "Teatro San Carlo",
            "pt": "Teatro San Carlo",
            "zh": "Teatro San Carlo",
            "ja": "Teatro San Carlo",
            "ar": "Teatro San Carlo"
          },
          "detail": {
            "it": "8 min a piedi · 800 m",
            "en": "8 min on foot · 800 m",
            "es": "8 min a pie · 800 m",
            "fr": "8 min à pied · 800 m",
            "de": "8 Min. zu Fuß · 800 m",
            "pt": "8 min a pé · 800 m",
            "zh": "步行 8 分钟 · 800 m",
            "ja": "徒歩8分 · 800 m",
            "ar": "8 دقائق سيرًا · 800 m"
          }
        },
        {
          "label": {
            "it": "Baretti di Chiaia",
            "en": "Chiaia baretti",
            "es": "Baretti de Chiaia",
            "fr": "Baretti de Chiaia",
            "de": "Baretti von Chiaia",
            "pt": "Baretti de Chiaia",
            "zh": "基艾亚 baretti",
            "ja": "キアイアの baretti",
            "ar": "بارات كييا"
          },
          "detail": {
            "it": "3 min a piedi · 300 m",
            "en": "3 min on foot · 300 m",
            "es": "3 min a pie · 300 m",
            "fr": "3 min à pied · 300 m",
            "de": "3 Min. zu Fuß · 300 m",
            "pt": "3 min a pé · 300 m",
            "zh": "步行 3 分钟 · 300 m",
            "ja": "徒歩3分 · 300 m",
            "ar": "3 دقائق سيرًا · 300 m"
          }
        },
        {
          "label": {
            "it": "Porticciolo di Mergellina",
            "en": "Mergellina harbour",
            "es": "Puerto deportivo de Mergellina",
            "fr": "Port de plaisance de Mergellina",
            "de": "Yachthafen Mergellina",
            "pt": "Porto de recreio de Mergellina",
            "zh": "梅尔杰利纳小港",
            "ja": "メルジェリーナの小さな港",
            "ar": "مرسى ميرجلينا"
          },
          "detail": {
            "it": "10 min a piedi · 1 km",
            "en": "10 min on foot · 1 km",
            "es": "10 min a pie · 1 km",
            "fr": "10 min à pied · 1 km",
            "de": "10 Min. zu Fuß · 1 km",
            "pt": "10 min a pé · 1 km",
            "zh": "步行 10 分钟 · 1 km",
            "ja": "徒歩10分 · 1 km",
            "ar": "10 دقائق سيرًا · 1 km"
          }
        },
        {
          "label": {
            "it": "Porto (Capri, Ischia, Eolie, Penisola sorrentina)",
            "en": "Port (Capri, Ischia, Aeolian Islands, Sorrentine peninsula)",
            "es": "Puerto (Capri, Ischia, islas Eolias, península sorrentina)",
            "fr": "Port (Capri, Ischia, îles Éoliennes, péninsule sorrentine)",
            "de": "Hafen (Capri, Ischia, Äolische Inseln, sorrentinische Halbinsel)",
            "pt": "Porto (Capri, Ischia, ilhas Eólias, península sorrentina)",
            "zh": "港口（卡普里、伊斯基亚、埃奥利群岛、索伦托半岛）",
            "ja": "港（カプリ、イスキア、エオリア諸島、ソレント半島）",
            "ar": "الميناء (كابري، إسكيا، الجزر الإيولية، شبه جزيرة سورينتو)"
          },
          "detail": {
            "it": "1,5 km",
            "en": "1.5 km",
            "es": "1,5 km",
            "fr": "1,5 km",
            "de": "1,5 km",
            "pt": "1,5 km",
            "zh": "1.5 公里",
            "ja": "1.5 km",
            "ar": "1.5 كم"
          }
        },
        {
          "label": {
            "it": "Stazione Napoli Piazza Garibaldi",
            "en": "Napoli Piazza Garibaldi station",
            "es": "Estación Napoli Piazza Garibaldi",
            "fr": "Gare Napoli Piazza Garibaldi",
            "de": "Bahnhof Napoli Piazza Garibaldi",
            "pt": "Estação Napoli Piazza Garibaldi",
            "zh": "那不勒斯 Piazza Garibaldi 火车站",
            "ja": "ナポリ・ピアッツァ・ガリバルディ駅",
            "ar": "محطة نابولي بياتسا غاريبالدي"
          },
          "detail": {
            "it": "3,5 km",
            "en": "3.5 km",
            "es": "3,5 km",
            "fr": "3,5 km",
            "de": "3,5 km",
            "pt": "3,5 km",
            "zh": "3.5 公里",
            "ja": "3.5 km",
            "ar": "3.5 كم"
          }
        },
        {
          "label": {
            "it": "Aeroporto di Capodichino (NAP)",
            "en": "Capodichino Airport (NAP)",
            "es": "Aeropuerto de Capodichino (NAP)",
            "fr": "Aéroport de Capodichino (NAP)",
            "de": "Flughafen Capodichino (NAP)",
            "pt": "Aeroporto de Capodichino (NAP)",
            "zh": "卡波迪基诺机场 (NAP)",
            "ja": "カポディキーノ空港 (NAP)",
            "ar": "مطار كابوديكينو (NAP)"
          },
          "detail": {
            "it": "8 km",
            "en": "8 km",
            "es": "8 km",
            "fr": "8 km",
            "de": "8 km",
            "pt": "8 km",
            "zh": "8 公里",
            "ja": "8 km",
            "ar": "8 كم"
          }
        },
        {
          "label": {
            "it": "Autostrade",
            "en": "Motorways",
            "es": "Autopistas",
            "fr": "Autoroutes",
            "de": "Autobahnen",
            "pt": "Autoestradas",
            "zh": "高速公路",
            "ja": "高速道路",
            "ar": "الطرق السريعة"
          },
          "detail": {
            "it": "4 km",
            "en": "4 km",
            "es": "4 km",
            "fr": "4 km",
            "de": "4 km",
            "pt": "4 km",
            "zh": "4 公里",
            "ja": "4 km",
            "ar": "4 كم"
          }
        },
        {
          "label": {
            "it": "Centro storico di Napoli",
            "en": "Historic centre of Naples",
            "es": "Centro histórico de Nápoles",
            "fr": "Centre historique de Naples",
            "de": "Altstadt von Neapel",
            "pt": "Centro histórico de Nápoles",
            "zh": "那不勒斯历史中心",
            "ja": "ナポリ旧市街",
            "ar": "الوسط التاريخي لنابولي"
          },
          "detail": {
            "it": "3,3 km",
            "en": "3.3 km",
            "es": "3,3 km",
            "fr": "3,3 km",
            "de": "3,3 km",
            "pt": "3,3 km",
            "zh": "3.3 公里",
            "ja": "3.3 km",
            "ar": "3.3 كم"
          }
        },
        {
          "label": {
            "it": "Capri",
            "en": "Capri",
            "es": "Capri",
            "fr": "Capri",
            "de": "Capri",
            "pt": "Capri",
            "zh": "Capri",
            "ja": "Capri",
            "ar": "Capri"
          },
          "detail": {
            "it": "37 km",
            "en": "37 km",
            "es": "37 km",
            "fr": "37 km",
            "de": "37 km",
            "pt": "37 km",
            "zh": "37 公里",
            "ja": "37 km",
            "ar": "37 كم"
          }
        },
        {
          "label": {
            "it": "Scavi di Pompei",
            "en": "Pompeii excavations",
            "es": "Excavaciones de Pompeya",
            "fr": "Fouilles de Pompéi",
            "de": "Ausgrabungen von Pompeji",
            "pt": "Escavações de Pompeia",
            "zh": "庞贝遗址",
            "ja": "ポンペイ遺跡",
            "ar": "حفريات بومبي"
          },
          "detail": {
            "it": "26,4 km",
            "en": "26.4 km",
            "es": "26,4 km",
            "fr": "26,4 km",
            "de": "26,4 km",
            "pt": "26,4 km",
            "zh": "26.4 公里",
            "ja": "26.4 km",
            "ar": "26.4 كم"
          }
        },
        {
          "label": {
            "it": "Reggia di Caserta",
            "en": "Royal Palace of Caserta",
            "es": "Palacio Real de Caserta",
            "fr": "Palais royal de Caserte",
            "de": "Königspalast von Caserta",
            "pt": "Palácio Real de Caserta",
            "zh": "卡塞塔王宫",
            "ja": "カゼルタ王宮",
            "ar": "قصر كازيرتا"
          },
          "detail": {
            "it": "34,1 km",
            "en": "34.1 km",
            "es": "34,1 km",
            "fr": "34,1 km",
            "de": "34,1 km",
            "pt": "34,1 km",
            "zh": "34.1 公里",
            "ja": "34.1 km",
            "ar": "34.1 كم"
          }
        },
        {
          "label": {
            "it": "Positano",
            "en": "Positano",
            "es": "Positano",
            "fr": "Positano",
            "de": "Positano",
            "pt": "Positano",
            "zh": "Positano",
            "ja": "Positano",
            "ar": "Positano"
          },
          "detail": {
            "it": "61,5 km",
            "en": "61.5 km",
            "es": "61,5 km",
            "fr": "61,5 km",
            "de": "61,5 km",
            "pt": "61,5 km",
            "zh": "61.5 公里",
            "ja": "61.5 km",
            "ar": "61.5 كم"
          }
        }
      ]
    },
    {
      "id": "parcheggi",
      "icon": "parking",
      "type": "places",
      "title": {
        "it": "Parcheggi",
        "en": "Parking",
        "es": "Aparcamiento",
        "fr": "Stationnement",
        "de": "Parken",
        "pt": "Estacionamento",
        "zh": "停车",
        "ja": "駐車",
        "ar": "مواقف السيارات"
      },
      "paragraphs": [
        {
          "it": "Siamo in zona pedonale. Vi consigliamo il parcheggio coperto Garage Chiatamone, in Via Chiatamone 26, a 5 minuti a piedi sul lungomare.",
          "en": "We are in a pedestrian area. We suggest the covered Garage Chiatamone car park, at Via Chiatamone 26, a 5-minute walk along the seafront.",
          "es": "Estamos en zona peatonal. Les recomendamos el aparcamiento cubierto Garage Chiatamone, en Via Chiatamone 26, a 5 minutos a pie por el paseo marítimo.",
          "fr": "Nous sommes en zone piétonne. Nous vous conseillons le parking couvert Garage Chiatamone, au 26 de la Via Chiatamone, à 5 minutes à pied le long du front de mer.",
          "de": "Wir liegen in einer Fußgängerzone. Wir empfehlen das überdachte Parkhaus Garage Chiatamone, Via Chiatamone 26, 5 Minuten zu Fuß an der Uferpromenade.",
          "pt": "Estamos numa zona pedonal. Recomendamos o parque coberto Garage Chiatamone, na Via Chiatamone 26, a 5 minutos a pé pelo passeio marítimo.",
          "zh": "这里是步行区。建议使用有顶棚的 Garage Chiatamone 停车场，地址 Via Chiatamone 26，沿海滨步行约 5 分钟。",
          "ja": "歩行者エリアにあります。屋根付きの Garage Chiatamone（Via Chiatamone 26）が便利です。海岸通りを歩いて5分です。",
          "ar": "نحن في منطقة للمشاة. ننصح بمرأب Garage Chiatamone المغطى، في Via Chiatamone 26، على بعد 5 دقائق سيرًا على الكورنيش."
        }
      ],
      "items": [
        {
          "name": "Garage Chiatamone",
          "address": "Via Chiatamone 26",
          "text": {
            "it": "Per gli ospiti del Mareluna è disponibile una tariffa in convenzione.",
            "en": "Guests of Mareluna have a special agreed rate.",
            "es": "Para los huéspedes de Mareluna hay una tarifa concertada.",
            "fr": "Les voyageurs de Mareluna bénéficient d'un tarif convenu.",
            "de": "Für Gäste von Mareluna gibt es einen vereinbarten Tarif.",
            "pt": "Para os hóspedes da Mareluna há uma tarifa convencionada.",
            "zh": "Mareluna 的客人可享受协议价格。",
            "ja": "Mareluna のお客様には提携料金があります。",
            "ar": "لضيوف Mareluna تعرفة متفق عليها."
          },
          "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Garage+Chiatamone%2C+Via+Chiatamone+26%2C+80121+Napoli"
        }
      ],
      "pending": {
        "it": "Tariffa, orari e telefono del garage: contenuto in arrivo.",
        "en": "Rate, hours and garage phone number: coming soon.",
        "es": "Tarifa, horarios y teléfono del garaje: contenido próximamente.",
        "fr": "Tarif, horaires et téléphone du garage : contenu à venir.",
        "de": "Tarif, Öffnungszeiten und Telefon des Garagenparkhauses: folgen.",
        "pt": "Tarifa, horários e telefone da garagem: conteúdo em breve.",
        "zh": "价格、营业时间和车库电话：即将更新。",
        "ja": "料金、営業時間、ガレージの電話番号：近日公開。",
        "ar": "التعرفة والمواعيد ورقم هاتف المرأب: المحتوى قادم."
      }
    },
    {
      "id": "trasporti",
      "icon": "transport",
      "type": "notes",
      "title": {
        "it": "Trasporti",
        "en": "Transport",
        "es": "Transporte",
        "fr": "Transports",
        "de": "Anreise",
        "pt": "Transportes",
        "zh": "交通",
        "ja": "交通",
        "ar": "المواصلات"
      },
      "paragraphs": [
        {
          "it": "Dall'aeroporto di Capodichino prendete l'autobus Alibus e scendete a Piazza Municipio (Molo Angioino/Beverello – Stazione Marittima). Da Piazza Municipio, l'autobus 151 vi porta in poche fermate a Piazza Vittoria: il Mareluna è all'angolo tra la piazza e il lungomare.",
          "en": "From Capodichino Airport take the Alibus and get off at Piazza Municipio (Molo Angioino/Beverello – Stazione Marittima). From Piazza Municipio, bus 151 brings you in a few stops to Piazza Vittoria: Mareluna is on the corner between the square and the seafront.",
          "es": "Desde el aeropuerto de Capodichino tomen el autobús Alibus y bajen en Piazza Municipio (Molo Angioino/Beverello – Stazione Marittima). Desde Piazza Municipio, el autobús 151 les lleva en pocas paradas a Piazza Vittoria: Mareluna está en la esquina entre la plaza y el paseo marítimo.",
          "fr": "Depuis l'aéroport de Capodichino, prenez le bus Alibus et descendez à Piazza Municipio (Molo Angioino/Beverello – Stazione Marittima). Depuis Piazza Municipio, le bus 151 vous mène en quelques arrêts à Piazza Vittoria : Mareluna est à l'angle de la place et du front de mer.",
          "de": "Vom Flughafen Capodichino nehmen Sie den Bus Alibus und steigen an der Piazza Municipio aus (Molo Angioino/Beverello – Stazione Marittima). Von der Piazza Municipio bringt Sie der Bus 151 in wenigen Haltestellen zur Piazza Vittoria: Mareluna liegt an der Ecke zwischen Platz und Uferpromenade.",
          "pt": "Do aeroporto de Capodichino apanhem o autocarro Alibus e saiam na Piazza Municipio (Molo Angioino/Beverello – Stazione Marittima). Da Piazza Municipio, o autocarro 151 leva-vos em poucas paragens à Piazza Vittoria: a Mareluna fica na esquina entre a praça e o passeio marítimo.",
          "zh": "从卡波迪基诺机场乘坐 Alibus，在 Piazza Municipio 下车（Molo Angioino/Beverello – 海事站）。再从 Piazza Municipio 乘 151 路公交，几站即到 Piazza Vittoria：Mareluna 就在广场与海滨的转角。",
          "ja": "カポディキーノ空港からバス Alibus に乗り、Piazza Municipio（Molo Angioino/Beverello – 海事駅）で降ります。そこからバス 151 で数停留所、Piazza Vittoria へ。Mareluna は広場と海岸通りの角にあります。",
          "ar": "من مطار كابوديكينو استقلوا حافلة Alibus وانزلوا في Piazza Municipio (Molo Angioino/Beverello – المحطة البحرية). ومن Piazza Municipio، تقلّكم الحافلة 151 في بضع محطات إلى Piazza Vittoria: تقع Mareluna عند زاوية الساحة والكورنيش."
        },
        {
          "it": "Dalla Stazione di Napoli Centrale (Piazza Garibaldi) prendete l'autobus 151 e scendete a Piazza Vittoria, allo stesso angolo.",
          "en": "From Napoli Centrale station (Piazza Garibaldi) take bus 151 and get off at Piazza Vittoria, at the same corner.",
          "es": "Desde la estación Napoli Centrale (Piazza Garibaldi) tomen el autobús 151 y bajen en Piazza Vittoria, en la misma esquina.",
          "fr": "Depuis la gare Napoli Centrale (Piazza Garibaldi), prenez le bus 151 et descendez à Piazza Vittoria, au même angle.",
          "de": "Vom Bahnhof Napoli Centrale (Piazza Garibaldi) nehmen Sie den Bus 151 und steigen an der Piazza Vittoria aus, an derselben Ecke.",
          "pt": "Da estação Napoli Centrale (Piazza Garibaldi) apanhem o autocarro 151 e saiam na Piazza Vittoria, na mesma esquina.",
          "zh": "从那不勒斯中央车站（Piazza Garibaldi）乘坐 151 路，在 Piazza Vittoria 同一转角下车。",
          "ja": "ナポリ中央駅（Piazza Garibaldi）からバス 151 に乗り、同じ角の Piazza Vittoria で降ります。",
          "ar": "من محطة نابولي المركزية (Piazza Garibaldi) استقلوا الحافلة 151 وانزلوا في Piazza Vittoria، عند الزاوية نفسها."
        },
        {
          "it": "Il porto, con collegamenti per Capri, Ischia, le isole Eolie e la Penisola sorrentina, dista 1,5 km.",
          "en": "The port, with connections to Capri, Ischia, the Aeolian Islands and the Sorrentine peninsula, is 1.5 km away.",
          "es": "El puerto, con enlaces a Capri, Ischia, las islas Eolias y la península sorrentina, está a 1,5 km.",
          "fr": "Le port, avec des liaisons vers Capri, Ischia, les îles Éoliennes et la péninsule sorrentine, est à 1,5 km.",
          "de": "Der Hafen, mit Verbindungen nach Capri, Ischia, zu den Äolischen Inseln und auf die sorrentinische Halbinsel, ist 1,5 km entfernt.",
          "pt": "O porto, com ligações para Capri, Ischia, as ilhas Eólias e a península sorrentina, fica a 1,5 km.",
          "zh": "港口有前往卡普里、伊斯基亚、埃奥利群岛和索伦托半岛的船，距离 1.5 公里。",
          "ja": "港からはカプリ、イスキア、エオリア諸島、ソレント半島へ船が出ます。距離は 1.5 km です。",
          "ar": "يبعد الميناء 1.5 كم، ومنه وصلات إلى كابري وإسكيا والجزر الإيولية وشبه جزيرة سورينتو."
        }
      ],
      "pending": {
        "it": "Taxi, metropolitana e numeri utili: contenuto in arrivo.",
        "en": "Taxis, metro and useful numbers: coming soon.",
        "es": "Taxis, metro y números útiles: contenido próximamente.",
        "fr": "Taxis, métro et numéros utiles : contenu à venir.",
        "de": "Taxi, U-Bahn und nützliche Nummern: folgen.",
        "pt": "Táxis, metro e números úteis: conteúdo em breve.",
        "zh": "出租车、地铁和实用电话：即将更新。",
        "ja": "タクシー、地下鉄、便利な番号：近日公開。",
        "ar": "سيارات الأجرة والمترو والأرقام المفيدة: المحتوى قادم."
      }
    },
    {
      "id": "ristoranti",
      "icon": "restaurant",
      "type": "notes",
      "title": {
        "it": "Ristoranti",
        "en": "Restaurants",
        "es": "Restaurantes",
        "fr": "Restaurants",
        "de": "Restaurants",
        "pt": "Restaurantes",
        "zh": "餐厅",
        "ja": "レストラン",
        "ar": "مطاعم"
      },
      "paragraphs": [
        {
          "it": "A circa 5 minuti a piedi, nella zona dei «baretti» di Chiaia, vi aspettano bar, club e ristoranti alla moda.",
          "en": "About a 5-minute walk away, in the Chiaia «baretti» area, trendy bars, clubs and restaurants are waiting.",
          "es": "A unos 5 minutos a pie, en la zona de los «baretti» de Chiaia, les esperan bares, clubes y restaurantes de moda.",
          "fr": "À environ 5 minutes à pied, dans le quartier des « baretti » de Chiaia, bars, clubs et restaurants à la mode vous attendent.",
          "de": "Etwa 5 Minuten zu Fuß entfernt, in der Gegend der «Baretti» von Chiaia, warten Bars, Clubs und Restaurants der Mode.",
          "pt": "A cerca de 5 minutos a pé, na zona dos «baretti» de Chiaia, esperam-vos bares, clubes e restaurantes da moda.",
          "zh": "步行约 5 分钟，在基艾亚的「baretti」一带，有时髦的酒吧、俱乐部和餐厅。",
          "ja": "徒歩およそ5分、キアイアの「baretti」エリアに、流行のバーとクラブとレストランがあります。",
          "ar": "على بعد نحو 5 دقائق سيرًا، في منطقة «baretti» في كييا، تنتظركم بارات ونوادٍ ومطاعم عصرية."
        }
      ],
      "pending": {
        "it": "L'elenco dei locali è in arrivo.",
        "en": "The list of places is coming soon.",
        "es": "La lista de locales está por llegar.",
        "fr": "La liste des adresses est à venir.",
        "de": "Die Liste der Lokale folgt.",
        "pt": "A lista dos locais está a caminho.",
        "zh": "场所名单即将更新。",
        "ja": "お店の一覧は近日公開です。",
        "ar": "قائمة الأماكن قادمة."
      }
    },
    {
      "id": "bar",
      "icon": "living",
      "type": "notes",
      "title": {
        "it": "Bar",
        "en": "Bars",
        "es": "Bares",
        "fr": "Bars",
        "de": "Bars",
        "pt": "Bares",
        "zh": "酒吧",
        "ja": "バー",
        "ar": "بارات"
      },
      "paragraphs": [
        {
          "it": "A circa 5 minuti a piedi raggiungete «i baretti» di Chiaia, la zona più ricercata della movida partenopea: bar, club e ristoranti alla moda.",
          "en": "About a 5-minute walk brings you to the Chiaia «baretti», the most sought-after part of Naples nightlife: trendy bars, clubs and restaurants.",
          "es": "A unos 5 minutos a pie llegan a «los baretti» de Chiaia, la zona más buscada de la noche napolitana: bares, clubes y restaurantes de moda.",
          "fr": "À environ 5 minutes à pied, vous rejoignez « les baretti » de Chiaia, le quartier le plus recherché de la nuit napolitaine : bars, clubs et restaurants à la mode.",
          "de": "In etwa 5 Minuten zu Fuß erreichen Sie «die Baretti» von Chiaia, den begehrtesten Teil des neapolitanischen Nachtlebens: Bars, Clubs und Restaurants der Mode.",
          "pt": "A cerca de 5 minutos a pé chegam aos «baretti» de Chiaia, a zona mais procurada da noite napolitana: bares, clubes e restaurantes da moda.",
          "zh": "步行约 5 分钟可到基艾亚的「baretti」，那不勒斯夜生活里最受青睐的一片：时髦的酒吧、俱乐部和餐厅。",
          "ja": "徒歩およそ5分で、キアイアの「baretti」へ。ナポリの夜でいちばん人気のエリアです。流行のバー、クラブ、レストランがあります。",
          "ar": "في نحو 5 دقائق سيرًا تصلون إلى «baretti» كييا، أكثر مناطق السهر النابولي طلبًا: بارات ونوادٍ ومطاعم عصرية."
        }
      ],
      "pending": {
        "it": "L'elenco dei locali è in arrivo.",
        "en": "The list of places is coming soon.",
        "es": "La lista de locales está por llegar.",
        "fr": "La liste des adresses est à venir.",
        "de": "Die Liste der Lokale folgt.",
        "pt": "A lista dos locais está a caminho.",
        "zh": "场所名单即将更新。",
        "ja": "お店の一覧は近日公開です。",
        "ar": "قائمة الأماكن قادمة."
      }
    },
    {
      "id": "attivita",
      "icon": "activities",
      "type": "notes",
      "title": {
        "it": "Attività",
        "en": "Things to see",
        "es": "Qué ver",
        "fr": "À voir",
        "de": "Sehenswertes",
        "pt": "O que ver",
        "zh": "可看之处",
        "ja": "見どころ",
        "ar": "ما يمكن رؤيته"
      },
      "image": {
        "src": "photos/castel.jpg",
        "webp": "photos/castel.webp",
        "alt": {
          "it": "Castel dell'Ovo sul lungomare, al crepuscolo",
          "en": "Castel dell'Ovo on the seafront at dusk",
          "es": "Castel dell'Ovo en el paseo marítimo, al anochecer",
          "fr": "Castel dell'Ovo sur le front de mer, au crépuscule",
          "de": "Castel dell'Ovo an der Uferpromenade in der Dämmerung",
          "pt": "Castel dell'Ovo no passeio marítimo, ao crepúsculo",
          "zh": "黄昏时分海滨上的蛋堡",
          "ja": "黄昏の海岸通りに立つカステル・デッローヴォ",
          "ar": "قصر كاستل ديلوفو على الكورنيش عند الغسق"
        }
      },
      "paragraphs": [
        {
          "it": "Pochi minuti a piedi e siete davanti al Castel dell'Ovo, a Piazza del Plebiscito, al Palazzo Reale e al Teatro San Carlo.",
          "en": "A few minutes on foot and you are in front of Castel dell'Ovo, Piazza del Plebiscito, the Royal Palace and the Teatro San Carlo.",
          "es": "Unos minutos a pie y están delante del Castel dell'Ovo, de Piazza del Plebiscito, del Palacio Real y del Teatro San Carlo.",
          "fr": "Quelques minutes à pied et vous êtes devant le Castel dell'Ovo, la Piazza del Plebiscito, le palais royal et le Teatro San Carlo.",
          "de": "Wenige Minuten zu Fuß, und Sie stehen vor dem Castel dell'Ovo, der Piazza del Plebiscito, dem Königspalast und dem Teatro San Carlo.",
          "pt": "Poucos minutos a pé e estão diante do Castel dell'Ovo, da Piazza del Plebiscito, do Palácio Real e do Teatro San Carlo.",
          "zh": "步行几分钟，便到蛋堡、Piazza del Plebiscito、王宫和圣卡洛剧院面前。",
          "ja": "歩いて数分で、カステル・デッローヴォ、ピアッツァ・デル・プレビシート、王宮、テアトロ・サン・カルロの前に着きます。",
          "ar": "بضع دقائق سيرًا وتكونون أمام كاستل ديلوفو وPiazza del Plebiscito والقصر الملكي ومسرح سان كارلو."
        },
        {
          "it": "Scoprire Napoli e le sue meraviglie nascoste è più facile con il nostro aiuto discreto. Se state pianificando il soggiorno, scriveteci: ci fa piacere darvi una mano.",
          "en": "Discovering Naples and its hidden wonders is easier with our discreet help. If you are planning your stay, write to us: we are glad to lend a hand.",
          "es": "Descubrir Nápoles y sus maravillas escondidas es más fácil con nuestra ayuda discreta. Si están planeando la estancia, escríbannos: nos alegra echar una mano.",
          "fr": "Découvrir Naples et ses merveilles cachées est plus facile avec notre aide discrète. Si vous préparez le séjour, écrivez-nous : nous sommes heureux de vous aider.",
          "de": "Neapel und seine verborgenen Wunder zu entdecken ist mit unserer zurückhaltenden Hilfe leichter. Wenn Sie den Aufenthalt planen, schreiben Sie uns: wir helfen gern.",
          "pt": "Descobrir Nápoles e as suas maravilhas escondidas é mais fácil com a nossa ajuda discreta. Se estão a planear a estadia, escrevam-nos: temos gosto em dar uma mão.",
          "zh": "有我们不多打扰的帮助，发现那不勒斯和它不显眼的美妙会更容易。如果你们正在安排住宿，写信给我们：我们乐意搭把手。",
          "ja": "ナポリとその隠れた素晴らしさを見つけるのは、私たちの控えめな手助けがあるとより簡単です。滞在を考えているなら書いてください。お手伝いできればうれしいです。",
          "ar": "اكتشاف نابولي وعجائبها الخفية أسهل بمساعدتنا الهادئة. إذا كنتم تخططون للإقامة، اكتبوا إلينا: يسعدنا أن نمدّ يد العون."
        }
      ],
      "distances": [
        {
          "label": {
            "it": "Castel dell'Ovo",
            "en": "Castel dell'Ovo",
            "es": "Castel dell'Ovo",
            "fr": "Castel dell'Ovo",
            "de": "Castel dell'Ovo",
            "pt": "Castel dell'Ovo",
            "zh": "Castel dell'Ovo",
            "ja": "Castel dell'Ovo",
            "ar": "Castel dell'Ovo"
          },
          "detail": {
            "it": "3 min a piedi",
            "en": "3 min on foot",
            "es": "3 min a pie",
            "fr": "3 min à pied",
            "de": "3 Min. zu Fuß",
            "pt": "3 min a pé",
            "zh": "步行 3 分钟",
            "ja": "徒歩3分",
            "ar": "3 دقائق سيرًا"
          }
        },
        {
          "label": {
            "it": "Piazza del Plebiscito",
            "en": "Piazza del Plebiscito",
            "es": "Piazza del Plebiscito",
            "fr": "Piazza del Plebiscito",
            "de": "Piazza del Plebiscito",
            "pt": "Piazza del Plebiscito",
            "zh": "Piazza del Plebiscito",
            "ja": "Piazza del Plebiscito",
            "ar": "Piazza del Plebiscito"
          },
          "detail": {
            "it": "7 min a piedi · 700 m",
            "en": "7 min on foot · 700 m",
            "es": "7 min a pie · 700 m",
            "fr": "7 min à pied · 700 m",
            "de": "7 Min. zu Fuß · 700 m",
            "pt": "7 min a pé · 700 m",
            "zh": "步行 7 分钟 · 700 m",
            "ja": "徒歩7分 · 700 m",
            "ar": "7 دقائق سيرًا · 700 m"
          }
        },
        {
          "label": {
            "it": "Palazzo Reale",
            "en": "Royal Palace",
            "es": "Palacio Real",
            "fr": "Palais royal",
            "de": "Königspalast",
            "pt": "Palácio Real",
            "zh": "王宫",
            "ja": "王宮",
            "ar": "القصر الملكي"
          },
          "detail": {
            "it": "8 min a piedi · 800 m",
            "en": "8 min on foot · 800 m",
            "es": "8 min a pie · 800 m",
            "fr": "8 min à pied · 800 m",
            "de": "8 Min. zu Fuß · 800 m",
            "pt": "8 min a pé · 800 m",
            "zh": "步行 8 分钟 · 800 m",
            "ja": "徒歩8分 · 800 m",
            "ar": "8 دقائق سيرًا · 800 m"
          }
        },
        {
          "label": {
            "it": "Teatro San Carlo",
            "en": "Teatro San Carlo",
            "es": "Teatro San Carlo",
            "fr": "Teatro San Carlo",
            "de": "Teatro San Carlo",
            "pt": "Teatro San Carlo",
            "zh": "Teatro San Carlo",
            "ja": "Teatro San Carlo",
            "ar": "Teatro San Carlo"
          },
          "detail": {
            "it": "8 min a piedi · 800 m",
            "en": "8 min on foot · 800 m",
            "es": "8 min a pie · 800 m",
            "fr": "8 min à pied · 800 m",
            "de": "8 Min. zu Fuß · 800 m",
            "pt": "8 min a pé · 800 m",
            "zh": "步行 8 分钟 · 800 m",
            "ja": "徒歩8分 · 800 m",
            "ar": "8 دقائق سيرًا · 800 m"
          }
        },
        {
          "label": {
            "it": "Porticciolo di Mergellina",
            "en": "Mergellina harbour",
            "es": "Puerto deportivo de Mergellina",
            "fr": "Port de plaisance de Mergellina",
            "de": "Yachthafen Mergellina",
            "pt": "Porto de recreio de Mergellina",
            "zh": "梅尔杰利纳小港",
            "ja": "メルジェリーナの小さな港",
            "ar": "مرسى ميرجلينا"
          },
          "detail": {
            "it": "10 min a piedi · 1 km",
            "en": "10 min on foot · 1 km",
            "es": "10 min a pie · 1 km",
            "fr": "10 min à pied · 1 km",
            "de": "10 Min. zu Fuß · 1 km",
            "pt": "10 min a pé · 1 km",
            "zh": "步行 10 分钟 · 1 km",
            "ja": "徒歩10分 · 1 km",
            "ar": "10 دقائق سيرًا · 1 km"
          }
        },
        {
          "label": {
            "it": "Centro storico di Napoli",
            "en": "Historic centre of Naples",
            "es": "Centro histórico de Nápoles",
            "fr": "Centre historique de Naples",
            "de": "Altstadt von Neapel",
            "pt": "Centro histórico de Nápoles",
            "zh": "那不勒斯历史中心",
            "ja": "ナポリ旧市街",
            "ar": "الوسط التاريخي لنابولي"
          },
          "detail": {
            "it": "3,3 km",
            "en": "3.3 km",
            "es": "3,3 km",
            "fr": "3,3 km",
            "de": "3,3 km",
            "pt": "3,3 km",
            "zh": "3.3 公里",
            "ja": "3.3 km",
            "ar": "3.3 كم"
          }
        },
        {
          "label": {
            "it": "Scavi di Pompei",
            "en": "Pompeii excavations",
            "es": "Excavaciones de Pompeya",
            "fr": "Fouilles de Pompéi",
            "de": "Ausgrabungen von Pompeji",
            "pt": "Escavações de Pompeia",
            "zh": "庞贝遗址",
            "ja": "ポンペイ遺跡",
            "ar": "حفريات بومبي"
          },
          "detail": {
            "it": "26,4 km",
            "en": "26.4 km",
            "es": "26,4 km",
            "fr": "26,4 km",
            "de": "26,4 km",
            "pt": "26,4 km",
            "zh": "26.4 公里",
            "ja": "26.4 km",
            "ar": "26.4 كم"
          }
        },
        {
          "label": {
            "it": "Reggia di Caserta",
            "en": "Royal Palace of Caserta",
            "es": "Palacio Real de Caserta",
            "fr": "Palais royal de Caserte",
            "de": "Königspalast von Caserta",
            "pt": "Palácio Real de Caserta",
            "zh": "卡塞塔王宫",
            "ja": "カゼルタ王宮",
            "ar": "قصر كازيرتا"
          },
          "detail": {
            "it": "34,1 km",
            "en": "34.1 km",
            "es": "34,1 km",
            "fr": "34,1 km",
            "de": "34,1 km",
            "pt": "34,1 km",
            "zh": "34.1 公里",
            "ja": "34.1 km",
            "ar": "34.1 كم"
          }
        },
        {
          "label": {
            "it": "Capri",
            "en": "Capri",
            "es": "Capri",
            "fr": "Capri",
            "de": "Capri",
            "pt": "Capri",
            "zh": "Capri",
            "ja": "Capri",
            "ar": "Capri"
          },
          "detail": {
            "it": "37 km",
            "en": "37 km",
            "es": "37 km",
            "fr": "37 km",
            "de": "37 km",
            "pt": "37 km",
            "zh": "37 公里",
            "ja": "37 km",
            "ar": "37 كم"
          }
        },
        {
          "label": {
            "it": "Positano",
            "en": "Positano",
            "es": "Positano",
            "fr": "Positano",
            "de": "Positano",
            "pt": "Positano",
            "zh": "Positano",
            "ja": "Positano",
            "ar": "Positano"
          },
          "detail": {
            "it": "61,5 km",
            "en": "61.5 km",
            "es": "61,5 km",
            "fr": "61,5 km",
            "de": "61,5 km",
            "pt": "61,5 km",
            "zh": "61.5 公里",
            "ja": "61.5 km",
            "ar": "61.5 كم"
          }
        }
      ],
      "pending": {
        "it": "Itinerari, orari e biglietti: contenuto in arrivo.",
        "en": "Itineraries, opening hours and tickets: coming soon.",
        "es": "Itinerarios, horarios y entradas: contenido próximamente.",
        "fr": "Itinéraires, horaires et billets : contenu à venir.",
        "de": "Routen, Öffnungszeiten und Tickets: folgen.",
        "pt": "Itinerários, horários e bilhetes: conteúdo em breve.",
        "zh": "路线、开放时间和门票：即将更新。",
        "ja": "モデルコース、開館時間、チケット：近日公開。",
        "ar": "المسارات والمواعيد والتذاكر: المحتوى قادم."
      }
    },
    {
      "id": "shopping",
      "icon": "shopping",
      "type": "notes",
      "title": {
        "it": "Shopping",
        "en": "Shopping",
        "es": "Compras",
        "fr": "Shopping",
        "de": "Einkaufen",
        "pt": "Compras",
        "zh": "购物",
        "ja": "買い物",
        "ar": "تسوّق"
      },
      "paragraphs": [
        {
          "it": "A poche decine di metri trovate le strade dello shopping più esclusivo della città: Via Calabritto, Piazza dei Martiri, Via dei Mille, Via Filangieri e Via Chiaia.",
          "en": "A few dozen metres away are the streets of the city's most exclusive shopping: Via Calabritto, Piazza dei Martiri, Via dei Mille, Via Filangieri and Via Chiaia.",
          "es": "A unas decenas de metros están las calles de las compras más exclusivas de la ciudad: Via Calabritto, Piazza dei Martiri, Via dei Mille, Via Filangieri y Via Chiaia.",
          "fr": "À quelques dizaines de mètres se trouvent les rues du shopping le plus exclusif de la ville : Via Calabritto, Piazza dei Martiri, Via dei Mille, Via Filangieri et Via Chiaia.",
          "de": "Ein paar Dutzend Meter entfernt liegen die Straßen des exklusivsten Einkaufens der Stadt: Via Calabritto, Piazza dei Martiri, Via dei Mille, Via Filangieri und Via Chiaia.",
          "pt": "A poucas dezenas de metros estão as ruas das compras mais exclusivas da cidade: Via Calabritto, Piazza dei Martiri, Via dei Mille, Via Filangieri e Via Chiaia.",
          "zh": "几十米外就是城里最讲究的购物街道：Via Calabritto、Piazza dei Martiri、Via dei Mille、Via Filangieri 和 Via Chiaia。",
          "ja": "数十メートル先に、街でいちばん格の高い買い物通りがあります。Via Calabritto、Piazza dei Martiri、Via dei Mille、Via Filangieri、Via Chiaia。",
          "ar": "على بعد بضع عشرات من الأمتار تجدون شوارع التسوّق الأكثر حصرية في المدينة: Via Calabritto وPiazza dei Martiri وVia dei Mille وVia Filangieri وVia Chiaia."
        }
      ]
    },
    {
      "id": "regole",
      "icon": "rules",
      "type": "notes",
      "title": {
        "it": "Regole",
        "en": "House rules",
        "es": "Normas",
        "fr": "Règles",
        "de": "Hausregeln",
        "pt": "Regras",
        "zh": "住宿须知",
        "ja": "ハウスルール",
        "ar": "قواعد المنزل"
      },
      "panelTitle": {
        "it": "Regole della casa",
        "en": "House rules",
        "es": "Normas de la casa",
        "fr": "Règles de la maison",
        "de": "Hausregeln",
        "pt": "Regras da casa",
        "zh": "住宿须知",
        "ja": "ハウスルール",
        "ar": "قواعد المنزل"
      },
      "paragraphs": [
        {
          "it": "Tutte le camere sono non fumatori.",
          "en": "All rooms are non-smoking.",
          "es": "Todas las habitaciones son para no fumadores.",
          "fr": "Toutes les chambres sont non-fumeurs.",
          "de": "Alle Zimmer sind Nichtraucherzimmer.",
          "pt": "Todos os quartos são para não fumadores.",
          "zh": "所有客房均为禁烟。",
          "ja": "すべての客室は禁煙です。",
          "ar": "جميع الغرف لغير المدخنين."
        }
      ],
      "pending": {
        "it": "Le altre regole della casa sono in arrivo.",
        "en": "The other house rules are coming soon.",
        "es": "Las demás normas de la casa están por llegar.",
        "fr": "Les autres règles de la maison sont à venir.",
        "de": "Die weiteren Hausregeln folgen.",
        "pt": "As restantes regras da casa estão a caminho.",
        "zh": "其他住宿须知即将更新。",
        "ja": "その他のハウスルールは近日公開です。",
        "ar": "بقية قواعد المنزل قادمة."
      }
    },
    {
      "id": "checkout",
      "icon": "checkout",
      "type": "notes",
      "title": {
        "it": "Check-out",
        "en": "Check-out",
        "es": "Check-out",
        "fr": "Check-out",
        "de": "Check-out",
        "pt": "Check-out",
        "zh": "退房",
        "ja": "チェックアウト",
        "ar": "تسجيل المغادرة"
      },
      "paragraphs": [
        {
          "it": "Il giorno della partenza le camere restano a vostra disposizione fino alle 10:00.",
          "en": "On departure day the rooms remain at your disposal until 10:00.",
          "es": "El día de la salida las habitaciones quedan a su disposición hasta las 10:00.",
          "fr": "Le jour du départ, les chambres restent à votre disposition jusqu'à 10 h 00.",
          "de": "Am Abreisetag stehen die Zimmer bis 10:00 Uhr zu Ihrer Verfügung.",
          "pt": "No dia da partida os quartos ficam à vossa disposição até às 10:00.",
          "zh": "离开当天，客房可使用至 10:00。",
          "ja": "出発の日、客室は 10:00 までご利用いただけます。",
          "ar": "يوم المغادرة تبقى الغرف في تصرفكم حتى الساعة 10:00."
        },
        {
          "it": "I bagagli si possono lasciare in deposito, senza costi aggiuntivi.",
          "en": "Luggage can be left in storage, at no extra charge.",
          "es": "El equipaje se puede dejar en consigna, sin coste adicional.",
          "fr": "Les bagages peuvent être laissés en consigne, sans frais supplémentaires.",
          "de": "Das Gepäck kann ohne Aufpreis zur Aufbewahrung gegeben werden.",
          "pt": "As malas podem ficar em depósito, sem custo adicional.",
          "zh": "行李可以免费寄存。",
          "ja": "お荷物は追加料金なしでお預けできます。",
          "ar": "يمكن ترك الأمتعة في الإيداع دون تكلفة إضافية."
        }
      ]
    },
    {
      "id": "emergenze",
      "icon": "emergency",
      "type": "soon",
      "title": {
        "it": "Emergenze",
        "en": "Emergencies",
        "es": "Emergencias",
        "fr": "Urgences",
        "de": "Notfälle",
        "pt": "Emergências",
        "zh": "紧急情况",
        "ja": "緊急",
        "ar": "طوارئ"
      }
    },
    {
      "id": "contatti",
      "icon": "phone",
      "type": "contact",
      "title": {
        "it": "Contatti",
        "en": "Contact",
        "es": "Contacto",
        "fr": "Contact",
        "de": "Kontakt",
        "pt": "Contacto",
        "zh": "联系",
        "ja": "連絡先",
        "ar": "للتواصل"
      },
      "paragraphs": [
        {
          "it": "Mettetevi in contatto con noi. Per qualsiasi domanda, non esitate a scriverci.",
          "en": "Get in touch with us. If you have any question, please do not hesitate to write.",
          "es": "Pónganse en contacto con nosotros. Si tienen cualquier pregunta, no duden en escribirnos.",
          "fr": "Prenez contact avec nous. Pour toute question, n'hésitez pas à nous écrire.",
          "de": "Nehmen Sie Kontakt mit uns auf. Bei jeder Frage zögern Sie nicht, uns zu schreiben.",
          "pt": "Entrem em contacto connosco. Para qualquer pergunta, não hesitem em escrever-nos.",
          "zh": "请与我们联系。无论什么问题，都欢迎写信。",
          "ja": "ご連絡ください。どんな質問でも、遠慮なくお書きください。",
          "ar": "تواصلوا معنا. لأي سؤال، لا تترددوا في الكتابة إلينا."
        }
      ]
    }
  ]
};
