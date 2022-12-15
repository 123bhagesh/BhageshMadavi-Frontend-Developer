// import { GET_MUSIC_RECORDS_REQUEST } from "./actionTypes"
import * as types from "./actionTypes";
const initalState = {
  data: [],

};

const reducer = (oldState = initalState, action) => {
  const { type, payload } = action;

  switch (type) {

    case types.GET_DATA_SUCCESS:
      return {
        ...oldState,
        data: payload,
 
      }

    default:
      return oldState;
  }
};

export { reducer };
