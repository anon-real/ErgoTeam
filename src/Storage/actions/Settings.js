import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS, OPEN_CREATE_PROPOSAL, OPEN_PROPOSALS_LIST, OPEN_WALLET} from '../../Constant/ActionTypes';

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

export const setOpenCreateProposal = status => {
  return dispatch => {
    dispatch({
      type: OPEN_CREATE_PROPOSAL,
      data: status,
    });
  };
};

export const setOpenProposalList = status => {
  return dispatch => {
    dispatch({
      type: OPEN_PROPOSALS_LIST,
      data: {status:status,data:null},
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
