
import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isAuthenticated: null,
  userId: null
}

export default (state = INITIAL_STATE, action) => {

  console.log(state);
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isAuthenticated: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isAuthenticated: false, userId: null };
    default:
      return state;
  }

};


