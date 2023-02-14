import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
	const [books, setBooks] = useState([]);
	

	useEffect(() => {
		const fetchAllBooks = async () => {
			try {
				const res = await axios.get("http://localhost:8000/api/books");
				setBooks(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchAllBooks();
	}, []);

	const handleDelete = async (id) => {
		try {
			await axios.delete(`http://localhost:8000/api/books/` + id);
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	

	return (
		<div className="bookContainer">
			<h1>Books Shop</h1>
			<div className="books">
				{books.map((book) => (
					<div className="book" key={book.id}>
						{book.cover && <img src={book.cover} alt="" />}
						<h2>{book.title}</h2>
						<span>{book.desc}</span>
						<br />
						<span>{book.price}</span>
						<button className="delete" onClick={() => handleDelete(book.id)}>
							Delete
						</button>
						<Link to={`/update/${book.id}`}>
							<button className="update" >Update</button>
						</Link>
					</div>
				))}
			</div>
			<Link to="/add">
				<button className="addButton">Add new book</button>
			</Link>
		</div>
	);
};

export default Books;
