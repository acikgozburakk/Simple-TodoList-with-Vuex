<template>
  <todo-list :todoList="todoList" />
</template>
<script>
import TodoList from "../components/todoitem";
import { mapGetters } from "vuex";
export default {
  components: {
    TodoList,
  },
  computed: {
    ...mapGetters({
      todoList: "mytodolist",
    }),
  },
};
</script>