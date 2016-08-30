/* @flow */
import { combineReducers } from 'redux'
import calendar from './calendar/calendar'
import chat from './chat/chat'
import common from './common/common'
import files from './files/files'
import home from './home/home'

const rootReducer = combineReducers({
	calendar,
	chat,
	common,
	files,
	home
});

export default rootReducer;

