export default {
  SET_USERS(state, users) {
    state.users = users;
  },
  SET_TODOS(state, todos) {
    state.todos = todos;
  },
  SET_USER_TODO(state, data) {
    state.userTodos = state.todos.filter((todos) => todos.userId == data);
    console.log(state.userTodos);
  },
  SET_MAIL(state, data) {
    state.userMail = data;
  },
  SET_TAB_STATUS(state, data) {
    let index = null;
    const todo = state.todos.find((todo, i) => {
      if (todo.id === data.id) {
        index = i;
        return true;
      }
      return false;
    });
    todo.completed = data.completed;
    state.todos.splice(index, 1, todo);
  },
};
