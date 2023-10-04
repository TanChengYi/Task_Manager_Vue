<template>
  <v-container>
    <v-list>
      <v-list-item-group v-if="tasks.length">
        <v-list-item v-for="task in tasks" :key="task.id">
          <v-list-item-content>
            <v-list-item-title>{{ task.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-alert v-else type="info">No tasks yet</v-alert>
    </v-list>
  </v-container>
</template>

  <script>
  //import TaskItem from './TaskItem.vue';
  
  export default {
    components: {
      //TaskItem
    },
    computed: {
      tasks() {
        return this.$store.state.tasks;
      }
    }
  }
  </script>
  