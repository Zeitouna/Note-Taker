const express = require("express");
const path = require("path");
const { v4 } = require("uuid");

const { readAndAppend, readFromFile } = require("./helpers");

const app = express();

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/notes", (req, res) => {
  const db = readFromFile("./db/db.json");
  res.json(db);
});

app.post("/api/notes", (req, res) => {
  const data = { title: req.body.title, text: req.body.text, id: v4() };
  readAndAppend(data, "./db/db.json");
  res.json({ msg: "success" });
});

app.listen(3001, () => console.log("server starting"));
