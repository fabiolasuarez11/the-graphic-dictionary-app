import React from 'react';
import './Phonetics.css';

export default function Phonetics(props) {
	if (props.phonetics) {
		return (
			<div className="Phonetics">
				<h5>Phonetics</h5>
				<span className="phonetic">{props.phonetics.text}</span>
				<a href={props.phonetics.audio} target="_blank" rel="noreferrer">
					<i className="fa-solid fa-volume-high fa-lg"></i>
				</a>
			</div>
		);
	} else {
		return null;
	}
}
