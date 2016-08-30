// fetch communities
// Select community

// fetch boards
// select board

// fetch posts
// select post
import * as types from "./../../actions";

export default (state = {
  	isFetching: false,
  	communities: null,
  	boards: null,
  	posts: null,
  	selected: null
}, action) => {
  	switch (action.type) {
  		case 'SELECT_COMUNITY':
  			return Object.assign({}, state, {
		        isFetching: false,
		        selected: action.payload
			});
			break;
		case '_FETCH_COMMUNITIES':
		    return Object.assign({}, state, {
		        isFetching: false,
		        communities: action.payload
			});
		    break;
		case 'SELECT_BOARD':
  			return Object.assign({}, state, {
		        isFetching: false,
		        selected: action.payload
			});
			break;
		case '_FETCH_BOARDS':
		    return Object.assign({}, state, {
		        isFetching: false,
		        boards: action.payload
			});
		    break;
		case 'SELECT_POST':
  			return Object.assign({}, state, {
		        isFetching: false,
		        selected: action.payload
			});
			break;
		case '_FETCH_POSTS':
		    return Object.assign({}, state, {
		        isFetching: false,
		        posts: action.payload
			});
		    break;
    	default:
      		return state
      		break;
  	}

}; 