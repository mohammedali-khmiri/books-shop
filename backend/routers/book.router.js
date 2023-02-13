import router from "express";
import { getAllBooks, createBook } from "../controllers/book.controller.js";

const routerBook = router.Router();

routerBook.get("/", getAllBooks);
routerBook.post("/create", createBook);

export default routerBook;
