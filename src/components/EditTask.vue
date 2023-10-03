<template>
  <form @submit.prevent="addTask">
    <input v-model="task.title" placeholder="Task Title" required />
    <textarea v-model="task.description" placeholder="Description"></textarea>
    <input type="date" v-model="task.dueDate" placeholder="Due Date" />
    <select v-model="task.priority">
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: this.$route.params.task
    };
  },
  methods: {
    editTask() {
      this.task.modificationDate = new Date().toISOString();
      this.$store.dispatch('editTask', this.task);
    }
  }
}
</script>
