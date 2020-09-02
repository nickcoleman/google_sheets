import React from 'react';
import Card from '../../shared/Card';
import Container from "@material-ui/core/Container";
import employees from './employees.json';
import david from '../../assets/david.png'
import rocco from '../../assets/rocco.png'
import gabby from '../../assets/gabby.png'
import liz from '../../assets/liz.png'

export default function (){
	return (
		<Container style={style.container}>
			<Card image={david} profile={employees[0]}/>
			<Card image={rocco} profile={employees[1]}/>
			<Card image={gabby} profile={employees[2]}/>
			<Card image={liz} profile={employees[3]}/>
		</Container>
	);
}

const style = {
	container: {
		margin: '2rem 0',
		maxWidth: '920px',
		display: 'grid',
		gridGap: '2rem',
		gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
	}
}