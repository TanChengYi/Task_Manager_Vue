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
      task: {
        id: '',
        title: '',
        description: '',
        status: 'Not Started',
        dueDate: '',
        priority: 'Medium',
        creationDate: new Date().toISOString(),
        modificationDate: '',
        completionDate: null,
        tags: [],
        assignee: '',
        attachments: [],
        notes: ''
      }
    };
  },
  methods: {
    addTask() {
      this.task.id = Date.now().toString();
      this.task.modificationDate = new Date().toISOString();
      this.$store.dispatch('addTask', this.task);
      this.task = {};  // Reset the form fields
    }
  }
}
</script>
