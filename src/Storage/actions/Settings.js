import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS, OPEN_PROPOSAL, OPEN_WALLET} from '../../Constant/ActionTypes';

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

export const setOpenProposal = status => {
  return dispatch => {
    dispatch({
      type: OPEN_PROPOSAL,
      data: status,
    });
  };
};

export const setOpenWallet = status => {
  return dispatch => {
    dispatch({
      type: OPEN_WALLET,
      data: status,
    });
  };
};
