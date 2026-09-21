// Minimal static server (Node built-ins only) for Render.
// Serves index.html, css/js, profile.jpg and pdfs/ with correct MIME types.
// No dependencies: `npm start` works after `npm install` (no-op).
"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = process.env.PORT || 3000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function serve(res, file, code = 200) {
  const ext = path.extname(file).toLowerCase();
  res.writeHead(code, {
    "Content-Type": MIME[ext] || "application/octet-stream",
    "Cache-Control": ext === ".pdf" ? "public, max-age=3600" : "public, max-age=300",
  });
  fs.createReadStream(file).pipe(res);
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  let rel = urlPath === "/" ? "index.html" : urlPath.replace(/^\/+/, "");
  const file = path.normalize(path.join(ROOT, rel));
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    return serve(res, path.join(ROOT, "index.html")); // SPA-style fallback keeps ?lang&view links working
  }
  serve(res, file);
});

server.listen(PORT, () => console.log(`CV site listening on :${PORT}`));
