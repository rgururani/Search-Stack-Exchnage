import expect from 'expect';
import * as hometActions from './homeActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('home Actions', () => {
  describe('getquestionactionsucess', () => {
    it('should create a ', () => {
      //arrange

      expect(true).toEqual(true);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

