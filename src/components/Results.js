import React from 'react';
import './Results.css';

export default function Results(props) {
	if (props.definitions) {
		return (
			<div className="Results">
				<div className="card m-5">
					<div className="card-header">
						<h2>{props.definitions.word}</h2>
					</div>
					{props.definitions.meanings.map((meaning, index) => {
						return (
							<div key={index}>
								<h3>{meaning.partOfSpeech}</h3>
								{meaning.definitions.map((definition, index) => {
									if (definition.definition) {
										return (
											<div key={index}>
												<h5>Definition</h5>
												<p>{definition.definition} </p>
											</div>
										);
									}
									if (definition.example) {
										return (
											<div key={index}>
												<h5>Example</h5>
												<p>
													<em>{definition.example}</em>
												</p>
											</div>
										);
									}
									if (definition.synonyms) {
										return (
											<div>
												<h5>Synonym</h5>
												<ul>
													{definition.synonyms.map((synonym, index) => {
														return <li key={index}>{synonym}</li>;
													})}
												</ul>
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
			</div>
		);
	} else {
		return null;
	}
}
