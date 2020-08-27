const repository = require('./db');
const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
const server = http.Server(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/getTodo/:id', (req, res) => {
    var id = req.params.id;
    repository.getTodoById(id)
        .then(result => {
            return res.status(200).json(result);
        }).catch( err => {
            console.log(err);
            return res.status(500).json({ message: "internal server error"});
        });
});

app.use('/api/getTodos', (req, res) => {
    repository.getAllTodos()
        .then(result => {
            return res.status(200).json(result);
        }).catch( err => {
            console.log(err);
            return res.status(500).json({ message: "internal server error"});
        });
});

app.use('/api/addtodo', (req, res) => {
    const { body } = req;
    repository.addTodo(body)
        .then(result => {
            return res.status(200).json(result);
        }).catch( err => {
            console.log(err);
            return res.status(500).json({ message: "internal server error"});
        });
});

app.use('/api/deleteTodo/:id', (req, res) => {
    var id = req.params.id;
    repository.deleteTodo(id).then(() => {
        res.status(200).json({message: "Todo deleted"});
      })
      .catch( err => {
            console.log(err);
            return res.status(500).json({ message: "internal server error"});
    });
});

server.listen(3200, () => {
    console.log("server listening on port 3200");
})


