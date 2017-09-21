export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (content) => {
  const key = (new Date).getTime();
  return { type: ADD_TODO, content, key };
}

export const toggleTodo = (key) => {
  return { type: TOGGLE_TODO, key };
}

export const deleteTodo = (key) => {
  return { type: DELETE_TODO, key };
}
