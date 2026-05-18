"""
Local static preview — no Node.js required.
Run: .venv\\Scripts\\python.exe serve_preview.py
Or double-click start_preview.bat
"""

from __future__ import annotations

import http.server
import socketserver
import webbrowser
from pathlib import Path

PORT = 8765
ROOT = Path(__file__).resolve().parent


class RootHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)


def main() -> None:
    socketserver.TCPServer.allow_reuse_address = True
    url = f"http://127.0.0.1:{PORT}/preview.html"
    with socketserver.TCPServer(("127.0.0.1", PORT), RootHandler) as httpd:
        print("Serving:", ROOT)
        print("Open:", url)
        print("Press Ctrl+C to stop.\n")
        try:
            webbrowser.open(url)
        except OSError:
            pass
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.")


if __name__ == "__main__":
    main()
