import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';

export default function Search() {
	const [keyword, setKeyword] = useState('');
	const [dictionary, setDictionary] = useState(null);

	function search(event) {
		event.preventDefault();

		const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleResponse(response) {
		console.log(response.data[0]);
		setDictionary(response.data[0]);
	}

	function handleKeyword(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Search container">
			<div className="container-fluid">
				<form className="d-flex" role="search" onSubmit={search}>
					<input
						className="form-control"
						type="search"
						placeholder="What are you searching?"
						aria-label="Search"
						autoFocus="on"
						onChange={handleKeyword}
					/>
					<button className="btn btn-primary ms-2" type="submit">
						Search
					</button>
				</form>
				<Results dictionary={dictionary} />
			</div>
		</div>
	);
}
