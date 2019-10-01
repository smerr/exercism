@echo off

REM promotion can be promote or no-promote
set exercise=%1

echo.

call exercism.exe submit C:/exercism/javascript/%exercise%/%exercise%.js

exit /b 0

REM submit.bat <exercise>
