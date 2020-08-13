/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CALL_FOLK, ERROR_EX, FOLK_1, FOLK_2 } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function callFolk() {
  return {
    type: CALL_FOLK,
  };
}

export function errorEx(error) {
  return {
    type: ERROR_EX,
    error,
  };
}

export function folk1(data) {
  return {
    type: FOLK_1,
    data,
  };
}

export function folk2(data) {
  return {
    type: FOLK_2,
    data,
  };
}
