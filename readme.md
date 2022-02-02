# Vaiolowser Ngrok
![Vaiolowser](https://raw.githubusercontent.com/spartacus04/Vaiolowser/master/icon.ico)

Questo programma permette di invare a Vaiolowser un link di ngrok.

Qui puoi trovare Vaiolowser https://github.com/spartacus04/vaiolowser

## Prerequisiti

`Nodejs >= 16`

## Utilizzo

### Installazione
- Clonare la repository

`git clone https://github.com/spartacus04/vaiolowser-ngrok`

- Installare le dipendenze

`npm i`

- Compilare il codice typescript

`npm run tsc`

- Creare un file .env nella cartella del progetto e inserisci al suo interno il project id di firebase, per aiutarti puoi seguire il file .env.template

### Avvio

avviare `run.bat` o `run.sh` in base al sistema operativo

`run [tcp/http/tls] [porta] [nome gioco] [*percorso all'icona] [*separa ip da porta (true/false)] [*mostrare su discord (true/false)]`

Gli argomenti col simbolo * non sono obbligatori