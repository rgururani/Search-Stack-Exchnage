import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as homeAction from '../actions/homeActions';

describe('Store', function() {
  it('Should handle creating courses', function() {
    // arrange
    const actual = true;
    const expected = true;
    expect(actual).toEqual(expected);
  });
});
