import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function homeReducer(state = initialState.questions, action) {
  switch (action.type) {
    case types.LOAD_QUESTION_SUCCESS:
      return action.questions;

    default:
      return state;
  }
}
