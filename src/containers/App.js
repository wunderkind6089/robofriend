import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';
import Title from '../components/Title';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchField } from '../actions';

const mapStateToProps= state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchedToProps= (dispatch) => {
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}	
}

class App extends Component{
	constructor(){
		super()
		this.state= {
			Robot: []
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({Robot: users})});
		
	}

	render() {
		const {Robot} = this.state;
		const { searchField, onSearchChange } = this.props; 
		const filteredRobot = Robot.filter(Robot =>{
			return Robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		if(Robot.length === 0){
			return <h1>Loading..</h1>
		}else {
		return(  
			<div className= "tc">
			<Title/>
			<SearchBox searchChange={onSearchChange}/>
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
export default connect(mapStateToProps, mapDispatchedToProps)(App);