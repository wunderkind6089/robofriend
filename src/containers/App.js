import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';
import Title from '../components/Title';
import ErrorBoundary from '../components/ErrorBoundary';


class App extends Component{
	constructor(){
		super()
		this.state= {
			Robot: [],
			searchfield: '' 
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({Robot: users}));
		
	}

	onSearchChange = (event) =>{
		this.setState({ 
			searchfield: event.target.value
		})		
	}

	render() {
		const {Robot, searchfield} = this.state;
		const filteredRobot = Robot.filter(Robot =>{
			return Robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if(Robot.length === 0){
			return <h1>Loading..</h1>
		}else {
		return(  
			<div className= "tc">
			<Title/>
			<SearchBox searchChange= {this.onSearchChange}/>
			<Scroll>
			<ErrorBoundary>
			<CardList Robot= {filteredRobot}/>
			</ErrorBoundary>
			</Scroll>	
			</div>
		); 
		} 
	}
}
export default App;