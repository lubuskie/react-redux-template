import { SWITCH_THEME } from "./_types";

export const switchTheme = (theme) => async (dispatch, getState) => {
  // const state = getState();
  // console.log("state :>> ", state);
  dispatch({ type: SWITCH_THEME, payload: theme });
};
