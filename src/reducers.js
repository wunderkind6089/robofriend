import { CHANGE_SEARCH_FIELD } from './constants'

const initialState = {
	searchField: ''
}

export const searchRobot= (state= initialState, actions= {}) =>{
	switch(actions.type){
		case CHANGE_SEARCH_FIELD:
		return Object.assign({}, state, {searchField: actions.payload})
		default: 
		return state;
	}  
} 