import { combineReducers } from 'redux';

const actionHandler = {};

const AppReducer = (state = {}, action) => {
  const fn = actionHandler[action.type];
  return fn ? fn(state, action) : state;
};

const reducer = combineReducers({
  appReducer: AppReducer,
});

export default reducer;