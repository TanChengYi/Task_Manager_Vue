<template>
    <div>
      {{ task.name }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      task: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  