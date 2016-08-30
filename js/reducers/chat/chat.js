// fetch convos
// select convo
import * as types from "./../../actions";

export default (state = {
  	isFetching: false,
  	conversations: null,
  	selected: null
}, action) => {
  	switch (action.type) {
  		case 'SELECT_CONVO':
  			return Object.assign({}, state, {
		        isFetching: false,
		        selected: action.payload
			});
			break;
		case '_FETCH_CONVOS':
		    return Object.assign({}, state, {
		        isFetching: false,
		        conversations: action.payload
			});
		    break;
    	default:
      		return state
      		break;
  	}

}; 