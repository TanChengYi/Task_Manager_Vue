import Vue from 'vue';
import Router from 'vue-router';
import TaskList from '@/components/TaskList.vue';
import AddTask from '@/components/AddTask.vue';
import EditTask from '@/components/EditTask.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: TaskList },
    { path: '/add', component: AddTask },
    { path: '/edit/:id', component: EditTask, props: true }
  ]
});
