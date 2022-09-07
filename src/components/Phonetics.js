import React from 'react';
import './Phonetics.css';

export default function Phonetics(props) {
	if (props.phonetics) {
		return (
			<div className="Phonetics">
				<h5>Phonetics</h5>
				{props.phonetics.map((phonetic, index) => {
					return (
						<div key={index}>
							<span className="phonetic">{phonetic.text}</span>
							<a href={phonetic.audio} target="_blank" rel="noreferrer">
								<i className="fa-solid fa-volume-high"></i>
							</a>
						</div>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
