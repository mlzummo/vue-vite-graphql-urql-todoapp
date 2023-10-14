<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "DefaultLayout",
});
</script>

<template>
<!-- <div>test</div> -->
                <header>
                    <router-view />
                </header>

</template>

<style scoped>
body #app header {
  margin: 0;
  padding: 0;
}
header{
  height: 100vh;
  width: 100vw;
  display:flex;
  align-items:center;
  justify-content:center;
}
.wrapper{
  padding-left: 30px;
}
</style>