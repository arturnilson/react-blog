const express = require('express');
const db = require('./config/db');
const cors = require('cors');

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/get', (req, res) => {
    db.query("SELECT * FROM posts",
        (err, result) => {
            if (err) {
                console.log(err);
            }

            res.send(result);
        });
});

app.get('/api/getFromId/:id', (req, res) => {
    const id = req.params.id;

    db.query("SELECT * FROM posts WHERE id = ?", id,
        (err, result) => {
            if (err) {
                console.log(err);
            }

            res.send(result);
        });
});

app.post("/api/create", (req, res) => {
    const username = req.body.userName;
    const title = req.body.title;
    const text = req.body.text;

    console.log(username, title, text);

    db.query("INSERT INTO posts (title, post_text, username) VALUES (?,?,?)",
        [title, text, username],
        (err, result) => {
            if (err) {
                console.log(err);
            }

            console.log(result);
        });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})