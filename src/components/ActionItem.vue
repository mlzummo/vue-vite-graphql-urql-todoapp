<script lang="ts" setup>
import { ref } from "vue";

import Card from 'primevue/card';
import Panel from 'primevue/card'

const props = defineProps({
  itemId: String,
  title: String,
  description: String,
});
const emit = defineEmits(['delete', 'update'])

const isEditing = ref(false);
const editableTitle = ref(props.title);
const editableDescription = ref(props.description);

function onDelete() {
  emit('delete', props.itemId);
}

function onActionItemUpdate() {
  emit('update', props.itemId, editableTitle.value, editableDescription.value);
  isEditing.value = false;
}
</script>

<template>
  <!-- <Panel> -->
  <div class="card" id="actionItemCard" style="width: 100%">
    <div class="card-body">
      <!-- Edit Mode -->
      <div v-if="isEditing">
        <form @submit.prevent="onActionItemUpdate">
          <h5>
            <input
              type="text"
              class="form-control"
              id="title"
              aria-describedby="actionItemTitle"
              v-model="editableTitle"
            />
          </h5>
          <p class="card-text">
            <textarea
              class="form-control"
              id="description"
              v-model="editableDescription"
            />
          </p>
          <div class="row justify-content-end">
            <div class="col-2 text-center">
              <button type="button" class="btn btn-link" @click="isEditing = false">Cancel</button>
            </div>
            <div class="col-2 text-center">
              <input type="submit" class="btn btn-primary" value="Update" />
            </div>
          </div>
        </form>
      </div>

      <!-- Display Mode -->
      <div v-else>
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ description }}
        </p>
        <div class="row justify-content-end">
          <div class="col-2 text-center">
            <button type="button" class="btn btn-outline-danger" @click="onDelete">Delete</button>
          </div>
          <div class="col-2 text-center">
            <button type="button" class="btn btn-link" @click="isEditing = true">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- </Panel> -->
</template>

<style>
</style>
