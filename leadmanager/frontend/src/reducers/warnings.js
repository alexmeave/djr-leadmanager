import { CREATE_WARNING } from '../actions/types';


const initialState = {}


export default function(state = initialState, action){
	switch(action.type){
		case CREATE_WARNING:
			return (state = action.payload);
		default:
			return state;
	}
}