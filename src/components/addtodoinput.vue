<template>
  <div class="row" id="inputtodo">
    <div class="col-md-10">
      <input
        type="text"
        v-model="inputData.todoinput"
        @keydown.enter="addtodo"
        class="form-control"
        placeholder="NEW TASK.."
      />
    </div>
    <div class="col-md-2">
      <button type="submit" @click="addtodo" class="btn btn-primary">
        Save
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputData: {
        todoinput: "",
        checked: false,
      },
    };
  },
  methods: {
    addtodo() {
      const datas = { ...this.inputData };
      this.$store.dispatch("addtotodo", datas);
    },
  },
};
</script>