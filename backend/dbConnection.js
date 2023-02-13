import mysql from "mysql";

/* Creating a connection to the database. */
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "medmysql",
	database: "test",
});

export default db;
