<template>
  <div class="container" id="body">
    <div class="card">
      <input-todo />
      <div class="mb-5" id="routerlink">
        <router-link class="ms-5" to="/">All Todo</router-link>

        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import inputTodo from "../components/addtodoinput";
export default {
  components: {
    inputTodo,
  },
};
</script>