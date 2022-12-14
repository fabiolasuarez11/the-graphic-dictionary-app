import React from 'react';
import './Synonyms.css';

export default function Synonyms(props) {
	if (props.meanings) {
		return (
			<div className="Synonyms">
				<h5>Synonyms</h5>
				{props.meanings.map((meaning, index) => {
					return (
						<div key={index}>
							{meaning.synonyms.map((synonym, index) => {
								if (meaning.synonyms) {
									return (
										<div>
											<ul className="synonym-list">
												<li className="synonym" key={index}>
													{synonym}
												</li>
											</ul>
										</div>
									);
								} else if (meaning.synonyms.length === 0) {
									return (
										<div>
											<p className="error-message">
												😲 There are no synonyms for this word
											</p>
										</div>
									);
								} else {
									return null;
								}
							})}
						</div>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
