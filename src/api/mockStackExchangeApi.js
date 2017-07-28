import React, {PropTypes} from 'react';


class StackExchangeApi {

  static SearchByIntitle (inTitle){
    return new Promise((resolve, reject) => {
      fetch(`https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=${inTitle}&site=stackoverflow`)
        .then(response => response.json())
        .then(data => {
          resolve(data.items);
      })
        .catch(error => { reject(error); });
    });
  }
}

export default StackExchangeApi;
