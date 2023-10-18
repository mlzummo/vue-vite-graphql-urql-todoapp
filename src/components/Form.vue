<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits(["create"]);

const newTitle = ref("");
const newDescription = ref("");

function onCreate() {
  emit("create", newTitle.value, newDescription.value);
  newTitle.value = "";
  newDescription.value = "";
}

</script>

<template>
  <form @submit.prevent="onCreate">
    <div class="form-group">
      <label for="title" class="form-label">Title</label>
      <input type="text" class="form-control" id="title" v-model="newTitle" />
    
      <label for="description" class="form-label">Description</label>
      <textarea class="form-control" id="description" v-model="newDescription" />
  </div>
    <button type="submit" class="btn btn-primary">Create</button>
  </form>
</template>


<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
</style>
