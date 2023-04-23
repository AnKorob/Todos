export default {
  getCompletedTodos: (state) => state.todos.filter((todo) => todo.completed),
  getNotCompletedTodos: (state) =>
    state.todos.filter((todo) => todo.completed == false),
};
