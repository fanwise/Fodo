import { SET_FILTER, filters } from '../action';

export default filter = (state = filters.ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}
