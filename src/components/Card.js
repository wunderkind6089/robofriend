import React from 'react';

const Card = ({name, username, id, image}) => {
	
		return(
		<div className= 'bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 tc pointer '>
			<img alt= 'robots' src={`https://robohash.org/${id}?200`}/>
			<div>
			  <h2>{name}</h2>
			  <p>{username}</p>
			</div> 
		</div>
	);
}

export default Card;