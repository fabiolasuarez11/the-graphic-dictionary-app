import React from 'react';

export default function Results(props) {
	if (props.definitions) {
		return (
			<div className="Results">
				<h2>{props.definitions.word}</h2>
				{props.definitions.meanings.map((meaning, index) => {
					// return meaning.definitions[0].definition;
					//-05:42 in Meanings video
					return (
						<div key={index}>
							<h3>{meaning.partOfSpeech}</h3>
							{meaning.definitions.map((definition, index) => {
								return (
									<div key={index}>
										<p>
											{definition.definition} <br />
											<em>{definition.example}</em>
										</p>
									</div>
								);
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
