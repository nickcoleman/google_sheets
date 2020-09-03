import React from 'react';
import Card from '../../shared/Card';
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import employees from './employees.json';
import david from '../../assets/david.png'
import rocco from '../../assets/rocco.png'
import gabby from '../../assets/gabby.png'
import liz from '../../assets/liz.png'


export default function (){
	const matches = useMediaQuery("(min-width:600px)");
	const style = {
	container: {
		margin: "2rem 0",
		display: "grid",
		justifyContent: "center",
		gridGap: "3.5rem 2rem",
		gridTemplateColumns: matches
		? "repeat(auto-fill, minmax(400px, 1fr))"
		: "repeat(auto-fill, minmax(350px, 1fr))",
	},
	};


	return (
		<Container style={style.container}>
			<Card image={david} profile={employees[0]}/>
			<Card image={rocco} profile={employees[1]}/>
			<Card image={gabby} profile={employees[2]}/>
			<Card image={liz} profile={employees[3]}/>
		</Container>
	);
}

