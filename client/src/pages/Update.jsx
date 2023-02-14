import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
	const [book, setBook] = useState([]);
	// const bookInfo = book[0];
	// console.log(book);

	const navigate = useNavigate();
	const location = useLocation();
	const bookId = location.pathname.split("/")[2];

	useEffect(() => {
		const fetchBook = async () => {
			try {
				const res = await axios.get(
					"http://localhost:8000/api/books/" + bookId
				);
				setBook(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchBook();
	}, [bookId]);

	const handleChange = (e) => {
		setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleClick = async (e) => {
		e.preventDefault();
		try {
			await axios.put("http://localhost:8000/api/books/" + bookId, book);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="form">
			<h1>Update the book</h1>

			<input
				type="text"
				placeholder="title"
				name="title"
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="desc"
				name="desc"
				onChange={handleChange}
			/>
			<input
				type="number"
				placeholder="price"
				name="price"
				onChange={handleChange}
			/>
			<input
				type="text"
				placeholder="cover"
				name="cover"
				onChange={handleChange}
			/>
			<button className="formButton" onClick={handleClick}>
				Update
			</button>
		</div>
	);
};

export default Update;
