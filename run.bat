@echo off

set protocol=%1
set port=%2
set name=%3
set icon=%4

cls && node --no-warnings dist/index.js %protocol% %port% %name% %icon%