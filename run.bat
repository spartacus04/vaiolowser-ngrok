@echo off

set protocol=%1
set port=%2
set name=%3

cls && node --no-warnings dist/index.js %protocol% %port% %name%