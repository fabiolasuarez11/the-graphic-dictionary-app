import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import './Search.css';

export default function Search() {
	const [keyword, setKeyword] = useState('age');
	const [dictionary, setDictionary] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const [photos, setPhotos] = useState([]);

	function search() {
		const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);

		const pexelsApiKey =
			'563492ad6f91700001000001e30f9b6d45bc43bcb7b6822b83c66f69';
		const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
		const headers = { Authorization: `Bearer ${pexelsApiKey}` };

		axios
			.get(pexelsApiUrl, {
				headers: headers,
			})
			.then(handlePexelsResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleResponse(response) {
		console.log(response.data[0]);
		setDictionary(response.data[0]);
	}

	function handlePexelsResponse(response) {
		setPhotos(response.data.photos);
	}

	function handleKeyword(event) {
		event.preventDefault();
		setKeyword(event.target.value);
	}

	function load() {
		setLoaded(true);
		search();
	}

	if (loaded) {
		return (
			<div className="Search">
				<div className="container">
					<form className="d-flex" role="search" onSubmit={handleSubmit}>
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
					<Results dictionary={dictionary} photos={photos} />
				</div>
			</div>
		);
	} else {
		load();
		return <div>'Loading...'</div>;
	}
}
