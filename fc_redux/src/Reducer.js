import * as ActionTypes from './ActionTypes.js';

export default (state, action) => {
  const {counterCaption} = action;
  
  switch (action.type) {
    case ActionTypes.INCREMENT:
      //return {...state, [counterCaption]: state[counterCaption] + 1}; 等同于下面三句
      const newState=Object.assign({},state);
      newState[counterCaption]++;
      return newState;
    case ActionTypes.DECREMENT:
      return {...state, [counterCaption]: state[counterCaption] - 1};
    default:
      return state
  }
}