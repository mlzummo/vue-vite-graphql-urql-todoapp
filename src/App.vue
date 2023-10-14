<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import DefaultLayout from "./layouts/DefaultLayout.vue";

export default {
    name: 'App',
    computed: {
        layout(): any {
            return (this.$route.meta.layer || DefaultLayout) + '-layout'
        }
    }
}
</script>

<template>
    <component :is="layout">
        <router-view  /> 
    </component>
        <!-- <component :is="$route.meta.layout || 'div'"> </component> -->
</template>

