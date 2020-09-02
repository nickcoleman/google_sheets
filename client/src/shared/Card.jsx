import React, {useState} from 'react';
require('./cardstylesheet.css');

export default ({profile, image}) => {
	const [showDetails, toggleDetails] = useState(false)

	return(
		<div className="card">
			<img alt={`${profile.name}`} src={image}/>
			<div className="content">
				<h4 className='name'>{profile.name}</h4>
				<div className="position">{profile.position}</div>
				<p className='experience' >{profile.experience}</p>
				{showDetails && <p className='statement'>{profile.personal_statement}</p>}
				<span className='readMore' onClick={()=>{toggleDetails(!showDetails)}}>Read More</span>
			</div>
		</div>
	)
}
