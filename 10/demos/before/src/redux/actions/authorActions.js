import { getAuthors } from "../../api/authorApi";
import * as types from "./actionTypes";

export const loadAuthorsSuccess = authors => {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
};

export const loadAuthors = () => {
  return dispatch => {
    return getAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(err => {
        throw err;
      });
  };
};
