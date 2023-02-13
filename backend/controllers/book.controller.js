import db from "../dbConnection.js";

export const getAllBooks = (req, res) => {
	const q = "SELECT * FROM books";

	db.query(q, (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
};

export const createBook = (req, res) => {
	const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES(?)";
	const values = [req.body.title, req.body.desc, req.body.cover];

	db.query(q, [values], (err, data) => {
		if (err) return res.json(err);
		console.log(data);
		return res.json("Book has been added successfully");
	});
};
