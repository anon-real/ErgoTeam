import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS, SET_ADDONS_MENU, SET_DETAILS_MENU, SET_LANGUAGE, SHOW_ALERT} from '../../Constant/ActionTypes';

const INIT_STATE = {
  initialURL: '/',
  error: '',
  message: '',
  loading: false,
  addonsOpen:{status:false, mpn:null, index:0},
  detailsOpen:{status:false, mpn:null, description:''},
  language:'en',
  showAlert:false
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
    case SET_LANGUAGE:{
      return { ...state , detailsOpen: action.data}
    }
    case SET_ADDONS_MENU:{
      return { ...state , addonsOpen: action.data}
    }
    case SET_DETAILS_MENU:{
      return { ...state , detailsOpen: action.data}
    }
    case SHOW_ALERT:{
      return{
        ...state,
        showAlert: action.data
      };
    }
    default:
      return state;
  }
};
