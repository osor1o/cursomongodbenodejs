const express = require("express");
const bodyParser = require("body-parser");
const booksRoutes = require("./src/routes/books");
const database = require("./config/database");
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use('/', booksRoutes);

database.connect()
        .then(() => app.listen(port, () => console.log(`App is runing on port: ${port}`)))
        .catch(err => {
            console.log(err);
            process.exit(1);
        })