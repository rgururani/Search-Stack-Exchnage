import * as types from './actionTypes';
import StackExchangeApi from '../api/mockStackExchangeApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import toastr from 'toastr';

export function QuestionLoadSuccess(questions) {
  return { type: types.LOAD_QUESTION_SUCCESS, questions};
}

export function loadQuestions(Intitle = '') {
  if(Intitle == ''){
    return function (dispatch) {
      toastr.error("Plaese enter a value to search");
      dispatch(QuestionLoadSuccess([]));
    };
  }

  return function (dispatch) {
    dispatch(beginAjaxCall());
    return StackExchangeApi.SearchByIntitle(Intitle).then(questions => {
        dispatch(QuestionLoadSuccess(questions));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
