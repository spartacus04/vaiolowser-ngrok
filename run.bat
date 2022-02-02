@echo off

set protocol=%1
set port=%2
set name=%3
set icon=%4
set separe=%5
set show=%6

cls && node --no-warnings dist/index.js %protocol% %port% %name% %icon% %separe% %show%