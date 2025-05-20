import {
  DECREASE_TOTAL_LIKES,
  INCREASE_LIKES_BY_AMOUNT,
  INCREASE_TOTAL_LIKES,
} from "../types";

const initialState = {
  totalLikes: 122,
  userName: "Marvin",
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_TOTAL_LIKES:
      return { ...state, totalLikes: state.totalLikes + 1 };
    case DECREASE_TOTAL_LIKES:
      return { ...state, totalLikes: state.totalLikes - 1 };
    case INCREASE_LIKES_BY_AMOUNT:
      return { ...state, totalLikes: state.totalLikes + action.payload };
    default:
      return state;
  }
};
