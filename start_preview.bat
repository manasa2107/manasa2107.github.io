@echo off
cd /d "%~dp0"
echo.
echo === Portfolio preview (no Node.js needed) ===
echo If the browser does not open, visit:
echo   http://127.0.0.1:8765/preview.html
echo.
echo Press Ctrl+C in this window to stop the server.
echo.

if exist ".venv\Scripts\python.exe" (
  ".venv\Scripts\python.exe" serve_preview.py
) else (
  python serve_preview.py
)

pause
