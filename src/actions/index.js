export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

//we pass in the action functions in the App
export const addOne = () => {
  //   console.log("action click ");
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  console.log("action");
  return { type: APPLY_NUMBER, payload: number }; //returns an object
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};
