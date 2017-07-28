import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import questions from './homeReducer';
import answers from './resultReducer';

const rootReducer = combineReducers({
  questions,
  answers,
  ajaxCallsInProgress
});

export default rootReducer;
