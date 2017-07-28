import React, {PropTypes} from 'react';


class StackExchangeResultApi {

  static SearchResultByQuestionId (questionId){
    return new Promise((resolve, reject) => {
      fetch(`https://api.stackexchange.com/2.2/questions/${questionId}/answers?order=desc&sort=activity&site=stackoverflow`)
        .then(response => response.json())
        .then(data => {
          resolve(data.items);
        })
        .catch(error => { reject(error); });
    });
  }
}

export default StackExchangeResultApi;
