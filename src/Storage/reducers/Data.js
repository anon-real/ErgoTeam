// import { SEND_FORGET_PASSWORD_EMAIL, CATEGORY_LIST, UPDATE_LOAD_USER, LICENSE_LIST, SEARCH_LIST, SELECTED_LIST} from '../../Constant/ActionTypes';

const INIT_STATE = {
  categoryList: {data:[],length:0},
  searchList:{data:[],length:0},
  selectedList:[],
  licenseList:null,
  loadUser: false,
  send_forget_password_email: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    // case LICENSE_LIST: {
    //   return {
    //     ...state,
    //     licenseList: (action.data)?{data:action.data,length:action.data.length}:null
    //   };
    // }
    default:
      return state;
  }
};
