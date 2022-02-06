const express = require("express");
const path = require("path");
const functions = require("./helpers");

const app = express();

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/notes", (req, res) => {
  const db = functions.readFromFile("./db/db.json");
  res.json(db);
});

app.post("/api/notes", (req, res) => {
  functions.readAndAppend(req.body, "./db/db.json");
  res.json({ msg: "success" });
});

app.listen(3001, () => console.log("server starting"));
