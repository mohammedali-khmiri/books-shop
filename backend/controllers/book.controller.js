import db from "../dbConnection.js";

/**
 * Get all books from the database,
 * and returns the data in JSON format.
 */
export const getAllBooks = (req, res) => {
	const q = "SELECT * FROM books";

	db.query(q, (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
};

//GET ONE BOOK
export const getBook = (req, res) => {
	const bookId = req.params.id;
	const q = "SELECT * FROM books WHERE id = ?";

	db.query(q, bookId, (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
};

/**
 * It takes the data from the form and inserts it into the database
 */
export const createBook = (req, res) => {
	const q = "INSERT INTO books (`title`, `desc`, `price`,`cover`) VALUES(?)";
	const values = [
		req.body.title,
		req.body.desc,
		req.body.price,
		req.body.cover,
	];

	db.query(q, [values], (err, data) => {
		if (err) return res.json(err);
		console.log(data);
		return res.json("Book has been added successfully");
	});
};

//delete book
export const deleteBook = (req, res) => {
	const bookId = req.params.id;
	const q = "DELETE FROM books WHERE id = ?";

	db.query(q, bookId, (err, data) => {
		if (err) return res.json(err);
		return res.json("Book has been deleted successfully");
	});
};

//update book
export const updateBook = (req, res) => {
	const bookId = req.params.id;
	const q =
		"UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?";

	const values = [
		req.body.title,
		req.body.desc,
		req.body.price,
		req.body.cover,
	];

	db.query(q, [...values, bookId], (err, data) => {
		if (err) return res.json(err);
		return res.json("Book has been updated successfully");
	});
};
