import React from 'react';
import Card from './Card';


const CardList = ({Robot}) =>{
	
 	return(
 		<div>
			{
			Robot.map((user, i) =>{
 	return(
 		<Card
 			key= {i}
 			image= {Robot[i].image}
 			id = {Robot[i].id}
 			name= {Robot[i].name}
 			username= {Robot[i].username}
 			/>
 		);
 	}) 	
			}
		</div>
 	);
 }

 export default CardList; 