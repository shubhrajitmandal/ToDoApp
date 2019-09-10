const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Task = require("../models/Task");

// router.get("/", async (req, res) => {
//   try {
//     const tasks = await Task.find();
//     res.json(tasks);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

router.get("/", (req, res) => {
  Task.find()
    .then(taskList => {
      console.log(taskList);
      res.render("home", {
        taskList: taskList
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post("/", (req, res) => {
  const task = new Task({
    task: req.body.task
  });
  task
    .save()
    .then(result => {
      console.log(result);
      res.redirect("/");
    })
    .catch(err => console.log(err));
  //   res.json({ message: "successfully posted!" });
});

router.delete("/:taskID", (req, res) => {
  Task.deleteOne({
    _id: req.params.taskID
  })
    .then(() => {
      console.log("Task Deleted!!");
      res.redirect(303, "/");
    })
    .catch(err => console.log(err));
});

router.patch("/:taskID", (req, res) => {
  Task.updateOne(
    {
      _id: req.params.taskID
    },
    {
      $set: { task: req.body.task }
    }
  )
    .then(() => {
      console.log("Task Updated!");
      res.redirect(303, "/");
    })
    .catch(err => console.log(err));
});
module.exports = router;
