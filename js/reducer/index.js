import { combineReducers } from 'redux';
import Filter from './filterReducer';
import Todo from './todoReducer';

export default todoApp = combineReducers({
  filter: Filter,
  todos: Todo
})
