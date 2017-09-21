import { connect } from 'react-redux';
import { filters, toggleTodo } from '../action';
import TodoList from '../components/todoList';

const getTodos = (todos, filter) => {
  switch (filter) {
    case filters.ALL:
      return todos
    case filters.COMPLETED:
      return todos.filter(t => t.isCompleted)
    case filters.ACTIVED:
      return todos.filter(t => !t.isCompleted)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getTodos(state.todos, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (key) => dispatch(toggleTodo(key))
  }
}

export default TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)
