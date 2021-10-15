# Vaiolowser Ngrok
![Vaiolowser](https://raw.githubusercontent.com/spartacus04/Vaiolowser/master/icon.ico)

Questo programma permette di invare a Vaiolowser un link di ngrok.

Qui puoi trovare Vaiolowser https://github.com/spartacus04/vaiolowser

## Prerequisiti

`Nodejs >= 16`

## Utilizzo

### Installazione
- Clona la repository

`git clone https://github.com/spartacus04/vaiolowser-ngrok`

- Installare le dipendenze

`npm i`

- Compilare il codice typescript

`npm run tsc`

- Creare un file .env nella cartella del progetto e inseriscici i il token di ngrok e il project id di firebase, puoi seguire il template nel file .env-template

### Avvio

avviare `run.bat` o `run.sh` in base al tuo sistema operativo

`run [tcp/http/tls] [porta] [nome gioco]`