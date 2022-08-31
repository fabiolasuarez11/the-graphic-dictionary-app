import React from 'react';

export default function Meanings(props) {
	if (props.definitions) {
		return (
			<div className="Meaning">
				{props.definitions.meanings.map((meaning, index) => {
					return (
						<div key={index}>
							<h3 className="text-center">{meaning.partOfSpeech}</h3>
							<h5>Definitions</h5>
							{meaning.definitions.map((definition, index) => {
								if (definition.definition) {
									return (
										<div key={index}>
											<p>{definition.definition} </p>
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
