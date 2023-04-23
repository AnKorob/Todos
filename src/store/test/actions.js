export default {
  getUsers({ commit }) {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then((response) => response.json())
      .then((users) => {
        commit("SET_USERS", users);
      });
  },
  getUserMail({ commit }, id) {
    return new Promise((resolve) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((userMail) => {
          commit("SET_MAIL", userMail);
        });
      resolve();
    });
  },
  getUserTodos({ commit }, id) {
    return new Promise((resolve) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos/`)
        .then((response) => response.json())
        .then((todos) => {
          commit("SET_TODOS", todos);
        });

      resolve();
    });
  },
};
