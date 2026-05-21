# Proposta tecnica - Sito multipagina Omnira

## Sintesi del progetto

Omnira è un sito web multipagina pensato per presentare un'azienda software, i suoi prodotti digitali e un punto di contatto per utenti o potenziali clienti. La soluzione proposta è un sito statico leggero, responsive e facilmente modificabile, realizzato con HTML, CSS e JavaScript vanilla.

L'obiettivo è costruire una presenza web chiara e ordinata, con navigazione semplice tra Home, Prodotti e Info, mantenendo uno stile visivo coerente tramite un tema CSS condiviso.

## Obiettivi

- Presentare l'identità dell'azienda Omnira in modo professionale.
- Mostrare una selezione di prodotti e servizi tramite card e griglie responsive.
- Offrire una pagina informativa con form di registrazione o contatto.
- Mantenere una struttura di codice semplice, leggibile e adatta a un progetto didattico.
- Separare gli stili globali dagli stili specifici delle singole pagine.

## Architettura proposta

Il progetto è organizzato come sito statico multipagina:

```text
JHCmultipage/
├── index.html
├── prodotti.html
├── info.html
├── script.js
├── assets/
│   └── img/
│       └── sfondoBG.jpg
└── css/
    ├── tema.css
    ├── style.css
    ├── prodotti.css
    └── info.css
```

## Pagine previste

### Home

La pagina `index.html` introduce Omnira con una sezione hero, una descrizione dell'azienda, una preview dei prodotti e un blocco dedicato ai servizi principali. Il bottone "I nostri prodotti" porta alla pagina catalogo.

### Prodotti

La pagina `prodotti.html` presenta il catalogo tramite una griglia di immagini e card descrittive. Ogni prodotto contiene categoria, nome e breve descrizione.

### Info

La pagina `info.html` include un form di registrazione con campi principali: nome, cognome, email, password e conferma password. La validazione lato client è gestita dal file JavaScript.

## Strategia CSS

La proposta prevede una divisione chiara degli stili:

- `tema.css`: variabili globali, reset, tipografia, container, bottoni, header, navbar e footer.
- `style.css`: stili specifici della Home.
- `prodotti.css`: stili specifici del catalogo prodotti.
- `info.css`: stili specifici della pagina Info e del form.

Questa separazione riduce le ripetizioni e rende più semplice modificare il tema generale senza dover intervenire su ogni singola pagina.

## Funzionalità JavaScript

Il file `script.js` gestisce la validazione del form di registrazione:

- blocco dell'invio predefinito del form;
- controllo della corrispondenza tra password e conferma password;
- controllo della lunghezza minima della password;
- messaggio di conferma e reset del form.

## Requisiti tecnici

- HTML5 semantico.
- CSS3 con variabili personalizzate.
- Layout responsive tramite CSS Grid e media query.
- Navigazione multipagina con link relativi.
- Nessuna dipendenza esterna obbligatoria.
- Compatibilità con browser moderni.

## Deliverable

- Pagina Home completa.
- Pagina Prodotti con griglia responsive.
- Pagina Info con form funzionante.
- Tema grafico condiviso.
- Stili specifici per pagina.
- Validazione base del form tramite JavaScript.

## Prossimi miglioramenti consigliati

- Uniformare completamente footer e header su tutte le pagine.
- Collegare `script.js` alla pagina `info.html`, se non ancora incluso.
- Migliorare l'accessibilità del form con messaggi di errore visibili nella pagina.
- Aggiungere immagini locali per i prodotti, evitando dipendenze da URL esterni.
- Verificare il layout su mobile, tablet e desktop prima della consegna finale.
