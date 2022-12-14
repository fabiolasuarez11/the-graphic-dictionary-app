import React from 'react';

export default function Examples(props) {
	if (props.meanings) {
		return (
			<div className="Examples">
				<h5>Examples</h5>
				{props.meanings.map((meaning, index) => {
					return (
						<div key={index}>
							{meaning.definitions.map((definition, index) => {
								if (definition.example) {
									return (
										<div key={index}>
											<p>{definition.example} </p>
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
