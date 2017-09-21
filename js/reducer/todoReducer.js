import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../action';

export default todo = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          key: action.key,
          isCompleted: false,
          content: action.content,
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.key === action.key) {
          return { ...todo, isCompleted: !todo.isCompleted }
        }
        return todo
      });
    case DELETE_TODO:
      return state.filter((todo) => todo.key != action.key);
    default:
      return state;
  }
}
