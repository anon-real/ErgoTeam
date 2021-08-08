import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS, OPEN_PROPOSAL, OPEN_WALLET} from '../../Constant/ActionTypes';

const INIT_STATE = {
  initialURL: '/',
  error: '',
  message: '',
  loading: false,
  openProposal:false,
  openWallet:false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_START: {
      return { ...state, error: '', message: '', loading: true };
    }
    case FETCH_SUCCESS: {
      return { ...state, error: '', loading: false, message: action.payload };
    }
    case FETCH_ERROR: {
      return { ...state, loading: false, message: '', error: action.payload };
    }
    case OPEN_PROPOSAL: {
      return {...state, openProposal:action.data}
    }
    case OPEN_WALLET: {
      return {...state, openWallet:action.data}
    }
    default:
      return state;
  }
};
