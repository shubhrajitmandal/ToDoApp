const express = require("express");
const hbs = require("express-handlebars");
const app = express();
const mongoose = require("mongoose");

const PORT = 3000;

// DB Config
mongoose
  .connect("mongodb://localhost:27017/TodoApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database Connected....."))
  .catch(err => console.log(err));

// TEMPLATING ENGINE
app.engine("handlebars", hbs());
app.set("view engine", "handlebars");

// MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use("/", require("./routes/index"));

// static middleware allows to designate one or more
//directories as containing static resources like images, CSS files, client-side JS
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.render("home", { taskList: todos });
// });

// app.post("/todoList", (req, res) => {
//   Id++;
//   todos.push({
//     id: Id,
//     task: req.body.task
//   });
//   res.redirect("/");
// });

// app.delete("/:taskID", (req, res) => {
//   const id = req.params.taskID;
//   for (var i = id; i < todos.length - 1; i++) {
//     todos[i] = todos[i + 1];
//   }
//   Id--;
//   res.redirect("/");
//   // res.redirect("/");
// });

// app.patch("/:taskID", (req, res) => {
//   // console.log(req.body.updatedTask);
//   const id = req.params.taskID;
//   const newTask = req.body.updatedTask;
//   todos[id].task = newTask;
//   res.redirect("/");
// });

// app.use((req, res, next) => {
//   res.status(404);
//   res.render("404");
// });

// // 500 error handler (middleware)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500);
//   res.render("500");
// });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}....`);
});
