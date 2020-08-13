/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CALL_FOLK, ERROR_EX, FOLK_1, FOLK_2 } from './constants';

// The initial state of the App
export const initialState = {
  data: null,
  loading: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const exampleReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CALL_FOLK:
        draft.loading = true;
        break;
      case FOLK_1:
        draft.loading = false;
        break;
      case FOLK_2:
        draft.loading = false;
        break;
      case ERROR_EX:
        draft.loading = false;
        draft.error = action.error;

        break;
    }
  });
export default exampleReducer;
