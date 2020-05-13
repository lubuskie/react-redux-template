import { SWITCH_THEME } from "../_actions/_types";

const initialState = {
  darkMode: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};
