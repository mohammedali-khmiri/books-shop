import router from "express";
import {
	getAllBooks,
	createBook,
	deleteBook,
	updateBook,
	getBook,
} from "../controllers/book.controller.js";
const routerBook = router.Router();

//param book
/* A middleware that is executed before the other middlewares. It is used to find the book by id and
attach it to the request object. */

// routerBook.param("book", async (req, res, next, id) => {
// 	try {
// 		const book = await book.findById(id);
// 		if (!book) {
// 			return res.status(404).json("book not found ");
// 		} else {
// 			req.book = book;
// 			next();
// 		}
// 	} catch (err) {
// 		return res.status(500).json(err);
// 	}
// });

routerBook.get("/", getAllBooks);
routerBook.get("/:id", getBook);
routerBook.post("/create", createBook);
routerBook.delete("/:id", deleteBook);
routerBook.put("/:id", updateBook);

export default routerBook;
