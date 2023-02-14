import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
	const [book, setBook] = useState({
		title: "",
		desc: "",
		price: null,
		cover: "",
	});

	const [error, setError] = useState(false);

	const navigate = useNavigate();

	const handleChange = (e) => {
		setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleClick = async (e) => {
		try {
			await axios.post("http://localhost:8000/api/books/create", book);
			navigate("/");
		} catch (err) {
			console.log(err);
			setError(true);
		}
	};

	return (
		<div className="form">
			<h1>Add new book</h1>
			<input
				type="text"
				placeholder="title"
				name="title"
				onChange={handleChange}
			/>
			<textarea
				rows={5}
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
				Add
			</button>
			{error && "Something went wrong!"}
			<Link to="/">See all books</Link>
		</div>
	);
};

export default Add;
