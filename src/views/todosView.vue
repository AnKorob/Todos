<template>
  <div
    v-loading="isLoading"
    element-loading-text="Загрузка данных..."
    element-loading-background="rgb(247 248 249 / 80%)"
  >
    <div class="test">
      <div class="test-users" v-for="user in users" :key="user.id">
        <div class="test-users-block">
          <div class="test-users-block--main">{{ user.name }}</div>
          <el-button default class="action-button" @click="showInfo(user.id)">
            Show Info
          </el-button>
        </div>
      </div>
    </div>
    <div class="test-info">
      <div class="test-info-block" v-if="getCompletedTodos.length">
        <div>Email:{{ userMail.email }}</div>
        <div>Username:{{ userMail.username }}</div>
        <div>Website:{{ userMail.website }}</div>
        <div>Phone:{{ userMail.phone }}</div>
      </div>
    </div>
    <div class="test-content">
      <div class="test-content-block">
        <div v-for="todo in getNotCompletedTodos" :key="todo.title">
          <el-checkbox
            :value="todo.completed"
            @input="
              (completed) =>
                SET_TAB_STATUS({
                  id: todo.id,
                  completed,
                  show,
                })
            "
          >
            {{ todo.title }}
          </el-checkbox>
        </div>
      </div>
      <div class="test-content-block completed">
        <div v-for="todo in getCompletedTodos" :key="todo.title">
          <el-checkbox
            :value="todo.completed"
            @input="
              (completed) =>
                SET_TAB_STATUS({
                  id: todo.id,
                  completed,
                })
            "
          >
            {{ todo.title }}
          </el-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "todosView",
  data: function () {
    return {
      checked: true,
      show: false,
      isLoading: false,
    };
  },
  computed: {
    ...mapState("todos", [
      "users",
      "todos",
      "todosDone",
      "userTodos",
      "userMail",
    ]),
    ...mapGetters("todos", ["getCompletedTodos", "getNotCompletedTodos"]),
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    ...mapActions({
      getTodos: "todos/getTodos",
      getUsers: "todos/getUsers",
      getUserTodos: "todos/getUserTodos",
      getUserMail: "todos/getUserMail",
    }),
    ...mapMutations({
      setUsers: "todos/SET_USERS",
      setTodos: "todos/SET_TODOS",
      setTodosDone: "todos/SET_TODOS_DONE",
      removeTodos: "todos/REMOVE_TODOS",
      SET_TAB_STATUS: "todos/SET_TAB_STATUS",
      setMail: "todos/SET_MAIL",
    }),
    showInfo(id) {
      this.isLoading = true;
      Promise.all([this.getUserTodos(id), this.getUserMail(id)]).then(() => {
        this.isLoading = false;
      });
    },
  },
};
</script>
<style lang="scss">
.test {
  width: 1000px;
  display: flex;
  align-items: center;
  flex-direction: row;
  &-info {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
    text-align: center;
    &-block {
      width: 100%;
      background: linear-gradient(to bottom right, #409eff, #f56c6c);
    }
  }
  &-content {
    display: flex;
    flex-direction: row;
    width: 100%;
    &-block {
      width: 50%;
      & .completed {
        text-decoration: line-through;
      }
    }
  }
  &-todos {
    display: flex;
    flex-direction: column;
    &-block {
      display: flex;
      flex-direction: column;
      & > .el-checkbox {
        margin-right: 10px;
      }
      &-title {
        font-size: 16px;
      }
    }
  }
  &-users {
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    &-block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 20px;
      &--main {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 34px;
        font-size: 14px;
        text-align: center;
      }
      &--hidden {
        font-size: 14px;
      }
    }
  }
}
.completed {
  text-decoration: line-through;
}
.action-button {
  font-size: 14;
}
</style>
