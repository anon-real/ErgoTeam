import { SEND_FORGET_PASSWORD_EMAIL, CATEGORY_LIST, UPDATE_LOAD_USER, LICENSE_LIST, SEARCH_LIST, SELECTED_LIST} from '../../Constant/ActionTypes';

export const setSelectedList = list => {
  return dispatch => {
    dispatch({
      type: SELECTED_LIST,
      data: list,
    });
  };
};

export const setLicenseList = list => {
  return dispatch => {
    dispatch({
      type: LICENSE_LIST,
      data: list,
    });
  };
};

export const setSearchList = list => {
  return dispatch => {
    dispatch({
      type: SEARCH_LIST,
      data: list,
    });
  };
};

export const setCategoryList = list => {
  return dispatch => {
    dispatch({
      type: CATEGORY_LIST,
      data: list,
    });
  };
};

export const updateLoadUser = loading => {
  return dispatch => {
    dispatch({
      type: UPDATE_LOAD_USER,
      payload: loading,
    });
  };
};

export const setForgetPassMailSent = status => {
  return dispatch => {
    dispatch({
      type: SEND_FORGET_PASSWORD_EMAIL,
      payload: status,
    });
  };
};

