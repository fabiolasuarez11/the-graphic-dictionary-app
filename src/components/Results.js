import React from 'react';
import Examples from './Examples';
import Meanings from './Meanings';
import './Results.css';
import Synonyms from './Synonyms';

export default function Results(props) {
	if (props.definitions) {
		return (
			<div className="Results">
				<h2 className="text-center m-4">{props.definitions.word}</h2>
				<Meanings definitions={props.definitions} />
				<Examples definitions={props.definitions} />
				<Synonyms definitions={props.definitions} />
			</div>
		);
	} else {
		return null;
	}
}
