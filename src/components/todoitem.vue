<template>
  <div class="container">
    <div class="card">
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ 'list-group-item-dark': todo.checked }"
          v-for="todo in todoList"
          :key="todo.id"
        >
          <input type="checkbox" v-model="todo.checked" @click="updatecheck" />
          <span class="ms-5">{{ todo.todoinput }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todoList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    updatecheck() {
      const datas = { ...this.todo };
      this.$store.dispatch("completetodo", datas);
    },
  },

  created() {
    this.$store.dispatch("inittodo");
  },
};
</script>