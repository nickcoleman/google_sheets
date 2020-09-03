import React, {useState} from 'react';
require('./cardstylesheet.css');

export default ({profile, image}) => {
	const [showDetails, toggleDetails] = useState(false)
	const roles = function(){
		return profile.roles.map((el, i)=>{
		return <div key={`role-${i}`}>{el}</div>
		})
	}

	return(
		<div className="card">
			<img alt={`${profile.name}`} src={image}/>
			<div className="content">
				<h4 className='name'>{profile.name}</h4>
				<div className="position">{profile.position}</div>
				{roles()}
				<p className='experience' >{profile.experience}</p>
				{showDetails && <p className='statement'>{profile.personal_statement}</p>}
				<span className='readMore' onClick={()=>{toggleDetails(!showDetails)}}>Read More</span>
				<div>Let's schedule your FREE martial arts lesson at our Riverton studio! Call or text me directly: <a href={`tel:${profile.phone}`}>{profile.phone}</a>{' '}<a href={`mailto:${profile.email}`}>{profile.email}</a></div>
			</div>
		</div>
	)
}
