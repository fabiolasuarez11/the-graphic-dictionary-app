import React, { useState } from 'react';

export default function Search() {
	const [keyword, setKeyword] = useState('');

	function search(event) {
		event.preventDefault();
	}

	function handleKeyword(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Search">
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
					<button className="btn btn-primary" type="submit">
						Search
					</button>
				</form>
			</div>
		</div>
	);
}
