const express = require("express");
const res = require("express/lib/response");
const app = express();
//express bodyparser:js to json , json to js
app.use(express.json());
const users = [
  { id: 1, name: "mariem" },
  { id: 2, name: "walid" },
];
app.get("/", (req, res) => {
  res.send({ msg: "afficher users", allusers: users });
});

app.post("/add", (req, res) => {
  const user = req.body;
  res.send({ msg: "ajouter user", user });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const user = users.filter((el) => el.id === parseInt(id, 10));
  console.log(user);
  res.send({ msg: "get user by id", user: user });
});

const port = 5000;
app.listen(port, (err) => {
  err ? console.error() : console.log("succes");
});
