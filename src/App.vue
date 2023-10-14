<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import type { PropType } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import Todo from './components/Todo.vue';
// import DefaultLayout from "./layouts/DefaultLayout.vue";

export default {
    name: 'App',
    props: {
    $route: {
      type: Object as PropType<RouteRecordRaw>,
      required: true
    },
    computed: {
        layout(): any {
            return (route.meta.layout || 'div') // to solve a linting error here in type script we use routerecordraw in route 
        }
    }
}
</script>

<template>
    <component :is="layout">
        <router-view  /> 
    </component>
</template>

