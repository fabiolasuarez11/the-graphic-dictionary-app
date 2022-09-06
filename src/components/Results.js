import React from 'react';
import Meanings from './Meanings';
import Phonetics from './Phonetics';
import Synonyms from './Synonyms';
import './Results.css';

export default function Results(props) {
	if (props.dictionary) {
		return (
			<div className="Results">
				<h2 className="text-center m-4">{props.dictionary.word}</h2>
				<Phonetics phonetics={props.dictionary.phonetics} />
				<Meanings meanings={props.dictionary.meanings} />
				<Synonyms meanings={props.dictionary.meanings} />
			</div>
		);
	} else {
		return null;
	}
}
