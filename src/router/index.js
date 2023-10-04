//import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '@/components/TaskList.vue';
//import AddTask from '@/components/AddTask.vue';
//import EditTask from '@/components/EditTask.vue';

//Vue.use(VueRouter);

// const routes = [
//     {
//       path: '/tasks',
//       name: 'TaskList',
//       component: TaskList
//     },
//     {
//         path: '/addtask',
//         name: 'Add Task',
//         component: AddTask
//     }
//     // ... other routes
//   ];
  
//   const router = new VueRouter({
//     mode: 'history',  // 这是可选的，但推荐用于友好的 URL
//     base: process.env.BASE_URL,
//     routes
//   });
  
//   export default router;

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
      {
        path: '/tasks',
        name: 'TaskList',
        component: TaskList
      },
      // ... other routes
    ],
  });
  
  export default router;
  
// export default new Router({
//   routes: [
//     { path: '/', component: TaskList },
//     { path: '/add', component: AddTask },
//     { path: '/edit/:id', component: EditTask, props: true }
//   ]
// });
