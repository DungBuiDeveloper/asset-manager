/**
 * Blogpage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectEx = state => state.example || initialState;

const makeselectExs = () =>
  createSelector(
    selectEx,
    exSelect => exSelect.data,
  );

const makeSelectLoading = () =>
  createSelector(
    selectEx,
    exSelect => exSelect.loading,
  );
const makeSelectError = () =>
  createSelector(
    selectEx,
    exSelect => exSelect.error,
  );

export { selectEx, makeselectExs, makeSelectLoading, makeSelectError };
