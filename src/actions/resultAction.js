import * as types from './actionTypes';
import stackExchangeResultApi from '../api/mockStackExchangeResultApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadResultSuccess(answers) {
  return { type: types.LOAD_RESULT_SUCCESS, answers};
}


export function loadResults(id) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return stackExchangeResultApi.SearchResultByQuestionId(id).then(answers => {
      dispatch(loadResultSuccess(answers));
    }).catch(error => {
      throw(error);
    });
  };
}
