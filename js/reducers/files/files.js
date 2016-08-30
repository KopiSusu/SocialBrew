// fetch files
// select file
import * as types from "./../../actions";

export default (state = {
  	isFetching: false,
  	files: null,
  	selected: null
}, action) => {
  	switch (action.type) {
  		case 'SELECT_FILE':
  			return Object.assign({}, state, {
		        isFetching: false,
		        selected: action.payload
			});
			break;
		case '_FETCH_FILES':
		    return Object.assign({}, state, {
		        isFetching: false,
		        files: action.payload
			});
		    break;
    	default:
      		return state
      		break;
  	}

}; 