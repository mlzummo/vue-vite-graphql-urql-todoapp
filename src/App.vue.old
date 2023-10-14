<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Todo from './components/Todo.vue'
// import Login from './components/Login.vue'
import AuthLayout from "./layouts/Center.vue";
// import DashboardLayout from "./layouts/DashboardLayout.vue";

export default {
  components: {
    AuthLayout,
    // DashboardLayout,
  },
  data() {
    return {
      layout: '',
    };
  },
  watch: {
    $route(to) {
      // set layout by route meta
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout
      } else {
        this.layout = "AuthLayout" // this is default layout if route meta is not set
      }
    },
  },
};
</script>

<template>
  <!-- <header>
    <imgS alt="Vue logo" class="logo" src="./assets/logo.svg" width="150" height="150" />

    <div class="wrapper">
      <HelloWorld />
      <Todo />
    </div>
  </header> -->

  <component :is="layout" />
  </template>

  <!-- <header>

</header> -->


