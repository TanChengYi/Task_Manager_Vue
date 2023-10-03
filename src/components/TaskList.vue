<template>
    <div>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <TaskItem :task="task" />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import TaskItem from './TaskItem.vue';
  
  export default {
    components: {
      TaskItem
    },
    computed: {
      tasks() {
        return this.$store.state.tasks;
      }
    }
  }
  </script>
  