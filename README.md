# Mareluna Suite de Charme

Libro di benvenuto digitale per gli ospiti di **Mareluna Suite de Charme**, in Via Partenope 1, sul lungomare Caracciolo a Napoli.

Una sola pagina, pensata prima per il telefono. Si tocca un'icona e si apre la scheda: posizione, colazione, concierge, camere, e il resto. Niente faldone di carta.

Il sito ufficiale è [marelunasdc.com](https://www.marelunasdc.com/).

## Come funziona

La pagina mostra una griglia di icone. Ogni icona apre un pannello. Le sezioni ancora senza dati hanno un puntino e la scritta «Contenuto in arrivo».

All'apertura compare il marchio su fondo bianco, poi la fotografia della finestra sul golfo. Si può saltare toccando lo schermo, il pulsante «Salta», o i tasti Esc, Invio o Spazio. L'animazione non parte se il telefono chiede meno movimento (`prefers-reduced-motion`), e non si ripete nella stessa sessione.

Le lingue sono nove: italiano (predefinito), inglese, spagnolo, francese, tedesco, portoghese, cinese semplificato, giapponese e arabo. La prima visita segue la lingua del browser; se non è tra queste nove, resta l'italiano. La scelta viene ricordata. L'arabo è disposto da destra a sinistra.

## File

- `index.html` — pagina, caratteri, numero di versione
- `styles.css` — aspetto
- `app.js` — griglia, pannelli, lingue, animazione
- `content.js` — tutti i testi per gli ospiti
- `icons/` — marchio e icone in SVG
- `photos/` — fotografie ottimizzate (JPG e WebP, senza dati della fotocamera)
- `favicon.svg` — segno del sole e della luna

I percorsi sono relativi: il sito funziona anche pubblicato in una sottocartella, per esempio `/mareluna/`.

## Modificare i testi

I testi stanno tutti in [`content.js`](content.js). Si cambia una frase, si salva, si aggiorna la pagina.

Ogni frase è un oggetto con una chiave per lingua: `it`, `en`, `es`, `fr`, `de`, `pt`, `zh`, `ja`, `ar`. Se una lingua manca, la pagina usa l'italiano e poi l'inglese.

- Una sezione `notes` (colazione, Wi-Fi, regole, e le altre) resta su «Contenuto in arrivo» finché `paragraphs` è vuoto. Si aggiungono frasi, una per oggetto lingua. `bullets` è un elenco. `pending` è la riga dedicata a ciò che ancora non c'è (per esempio nome della rete e password).
- Una sezione `list` usa `items`, ciascuno con `icon`, `title` e `text`.
- Una sezione `places` usa `items` con `name`, `address`, `text` e `mapsUrl`, come il Garage Chiatamone.
- `location` mostra l'indirizzo della struttura e le distanze. `contact` mostra telefono, email e i collegamenti.
- `soon` è una sezione interamente in arrivo.

Si aggiungono solo fatti controllati. Non si inventano password, prezzi, orari o numeri.

## Numero di versione

I telefoni tengono in memoria i file vecchi. Quando si modifica CSS, JavaScript o le immagini citate nell'HTML, si alza il numero insieme, oggi `1.0.0`, in tutti questi punti di `index.html`:

- `window.MARELUNA_VERSION`
- `styles.css?v=`
- `content.js?v=`
- `app.js?v=`
- il marchio, le fotografie e le favicon con `?v=`

Le icone della griglia prendono il numero da `MARELUNA_VERSION` da sole.

## Anteprima in locale

Non c'è un passaggio di build. Dalla cartella del progetto:

```bash
python3 -m http.server 8000
```

Poi si apre [http://localhost:8000](http://localhost:8000).

## Pubblicazione

Il sito è online su GitHub Pages: [brunoflor.github.io/mareluna](https://brunoflor.github.io/mareluna/).

## Stato

Prima versione, in corso d'opera.

## Autore

Realizzato da [Bruno Flora](https://github.com/Brunoflor) — Napoli.
