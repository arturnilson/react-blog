const express = require('express');
const db = require('./config/db');

const app = express();

const PORT = 3001;

app.get('/', (req, res) => { });

app.post("/api/create", (req, res) => {
    db.query("INSERT INTO posts (title, post_text, username) VALUES ()", (err, result) => {
        if (err) {
            console.log(err);
        }

        console.log(result);
    });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})