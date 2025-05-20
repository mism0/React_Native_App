import {
  DECREASE_TOTAL_LIKES,
  INCREASE_LIKES_BY_AMOUNT,
  INCREASE_TOTAL_LIKES,
} from "../types";

export const increaseTotalLikes = () => ({
  type: INCREASE_TOTAL_LIKES,
});

export const decreaseTotalLikes = () => ({
  type: DECREASE_TOTAL_LIKES,
});

export const increaseLikeByAmount = (payload: number) => ({
  type: INCREASE_LIKES_BY_AMOUNT,
  payload: payload,
});


