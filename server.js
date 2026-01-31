const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT;

/* =========================
   STATIC ASSETS
   ========================= */
// dflip, css, js, etc.
app.use("/dflip", express.static(path.join(__dirname, "dflip")));
app.use("/books", express.static(path.join(__dirname, "books")));

/* =========================
   HEALTH CHECK (Railway)
   ========================= */
app.get("/health", (_, res) => {
  res.status(200).send("OK");
});

/* =========================
   HOME PAGE
   ========================= */
app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/* =========================
   BOOK API
   ========================= */
app.get("/api/books", (_, res) => {
  const dir = path.join(__dirname, "books");

  if (!fs.existsSync(dir)) {
    return res.json([]);
  }

  fs.readdir(dir, (err, files) => {
    if (err) return res.json([]);

    res.json(
      files.filter(f => f.toLowerCase().endsWith(".pdf"))
    );
  });
});

/* =========================
   START SERVER
   ========================= */
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server listening on ${PORT}`);
});
