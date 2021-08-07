import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS, SET_ADDONS_MENU, SET_DETAILS_MENU, SET_LANGUAGE, SHOW_ALERT} from 'Constant/ActionTypes';

export const fetchSuccess = message => {
  return dispatch => {
    dispatch({
      type: FETCH_SUCCESS,
      payload: message || '',
    });
  };
};
export const fetchError = error => {
  return dispatch => {
    dispatch({
      type: FETCH_ERROR,
      payload: error,
    });
  };
};

export const fetchStart = () => {
  return dispatch => {
    dispatch({
      type: FETCH_START,
    });
  };
};

export const setAddonsSideMenu = status => {
  return dispatch => {
    dispatch({
      type: SET_ADDONS_MENU,
      data: status,
    });
  };
};

export const setDetailsSideMenu = status => {
  return dispatch => {
    dispatch({
      type: SET_DETAILS_MENU,
      data: status,
    });
  };
};

export const setLanguage= language => {
  return dispatch => {
    dispatch({
      type: SET_LANGUAGE,
      data: language,
    });
  };
};

export const setShowAlert = status =>{
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      data: status
    });
  };
}
