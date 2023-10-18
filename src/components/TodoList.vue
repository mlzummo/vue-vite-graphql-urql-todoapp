<script setup> // js here?
// import "bootstrap/dist/css/bootstrap.min.css";


import { ref } from "vue";

import Form from "./Form.vue";
import ActionItem from "./ActionItem.vue";

const actionItems = ref({});
const growingId = ref(0);

function onActionItemCreate(title, description) { //create
  let newId = growingId.value++;
  actionItems.value[newId] = {
    title: title,
    description: description,
  };
}

function onActionItemDelete(itemId) { //delete
  delete actionItems.value[itemId]
}

function onActionItemUpdate(itemId, title, description) { //update
  actionItems.value[itemId] = {
    title: title,
    description: description,
  };
}
</script>

<template>
  <div class="container overflow-hidden">
    <div class="row">
      <div class="col-12">
        <h1>TO-DO LIST</h1>
      </div>
    </div>
    <div class="row gy-5">
      <div class="col-6">
        <div class="p-3 border bg-light">
          <Form @create="onActionItemCreate" />
        </div>
      </div>
      <div class="col-6">
        <div class="p-3 border bg-light">
          <div class="row g-2">
            <div v-if="Object.keys(actionItems).length == 0">
              <h4 class="text-center" style="color: rgb(150, 150, 150)">Empty</h4>
            </div>
            <div
              v-else
              class="col-12"
              v-for="(actionItem, key) in actionItems"
              :key="key"
            >
              <ActionItem
                :itemId="key"
                :title="actionItem.title"
                :description="actionItem.description"
                @delete="onActionItemDelete"
                @update="onActionItemUpdate"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
