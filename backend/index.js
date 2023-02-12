const express = require("express");
const mysql = require("mysql");
const app = express();

//middleware
/* A middleware that parses the incoming request body and makes it available as req.body. */
// app.use(express.json());

/* Creating a connection to the database. */
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "medmysql",
	database: "test",
});

/* Routes*/
app.get("/", (req, res) => {
	res.json("hello home page");
});

app.get("/books", (req, res) => {
	const q = "SELECT * FROM books";
	db.query(q, (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

/* Listening to the port. */
app.listen(8000, () => {
	console.log(`Backend server is running on port 8000`);
});
