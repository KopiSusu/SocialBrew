// fetch convos
// select convo
import * as types from "./../../actions";

export default (state = {
  	isFetching: false,
  	events: null,
  	selected: null
}, action) => {
  	switch (action.type) {
  		case 'SELECT_EVENT':
  			return Object.assign({}, state, {
		        isFetching: false,
		        selected: action.payload
			});
			break;
		case '_FETCH_EVENTS':
		    return Object.assign({}, state, {
		        isFetching: false,
		        events: action.payload
			});
		    break;
    	default:
      		return state
      		break;
  	}

}; 