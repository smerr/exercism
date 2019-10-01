@echo off

REM promotion can be promote or no-promote
set exercise=%1

echo.

call exercism.exe download --exercise=%exercise% --track=javascript

cd c:/exercism/javascript/%exercise%

call npm install

exit /b 0

REM download.bat <exercise>