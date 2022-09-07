import React from 'react';
import './Meanings.css';

export default function Meanings(props) {
	if (props.meanings) {
		return (
			<div className="Meanings">
				{props.meanings.map((meaning, index) => {
					return (
						<div key={index}>
							<h3 className="text-center">{meaning.partOfSpeech}</h3>
							<h5>Definitions</h5>
							{meaning.definitions.map((definition, index) => {
								if (definition.definition) {
									return (
										<div key={index}>
											<div className="definition">{definition.definition}</div>
											<div className="example">
												<em>{definition.example}</em>
											</div>
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
