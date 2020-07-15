// 1. action type

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 2. functions creating action

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
  number: 0,
};

// 3. reducer function

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
