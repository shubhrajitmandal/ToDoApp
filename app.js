const express = require("express");
const hbs = require("express-handlebars");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.engine("handlebars", hbs());
app.set("view engine", "handlebars");

// static middleware allows to designate one or more
//directories as containing static resources like images, CSS files, client-side JS
app.use(express.static("./public"));

const todos = ["Go for Walk."];

app.get("/", (req, res) => {
  res.render("home", { taskList: todos });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.post("/todoList", (req, res) => {
  todos.push(req.body.task);
  res.redirect("/");
});

app.use((req, res, next) => {
  res.status(404);
  res.render("404");
});

// 500 error handler (middleware)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render("500");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}....`);
});
