import express from "express";
import cors from "cors";
import db from "./dbConnection.js";
import routerBook from "./routers/book.router.js";
const app = express();

//middleware
/* A middleware that parses the incoming request body and makes it available as req.body. */
app.use(express.json());
app.use(cors());

//If there are an auth problem 👇👇
//update our root user
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

/* Connecting to the database. */
db.connect(function (err) {
	if (err) {
		console.error("error connecting: " + err);
		return;
	}
	console.log("DB connected !");
});

/* Routes*/

app.use("/api/books", routerBook);

/* Listening to the port. */
app.listen(8000, () => {
	console.log(`Backend server is running on port 8000`);
});
