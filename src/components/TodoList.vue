<script setup> // js here?
// import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'primevue/card';

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
  <!-- <div class="container overflow-hidden">
    <div class="row">
      <div class="col-12">
        <h1>TO-DO LIST</h1>
      </div>
    </div> -->




    
<div class="card flex align-items-center justify-content-center">
  <div class="grid grid-cols-2 gap-4">
  <Card style="width: 25em"  class="p-sm">
      <template #header>
          <img width="100" alt="user header" src="https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png" />
      </template>
      <template #title>Insert Card</template>
      <template #subtitle>v. 0.0.86</template>
      <template #content>
          <p>
            <Form @create="onActionItemCreate" />
          </p>
      </template>
      <template #footer>
          <Button icon="pi pi-check" label="Create" />
          <!-- <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" /> -->
      </template>
  </Card>

  <Card style="width: 25em" class="p-sm">
      <template #header>
          <img alt="user header" width="100" src="https://cdn2.iconfinder.com/data/icons/task-board/100/taskboard_task_board_plan_schedule_list_-10-1024.png" />
      </template>
      <!-- <template #title>Insert Card</template>
      <template #subtitle>v. 0.0.86</template> -->
      <template #content>
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
      </template>
      <template #footer>
          <Button icon="pi pi-check" label="Create" />
          <!-- <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" /> -->
      </template>
  </Card>
  </div>
</div>
    
<!-- <div class="surface-card p-4 shadow-2 border-round">
  <div class="text-3xl font-medium text-900 mb-3">Add Todo</div>
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
  </div> -->
</template>

<style>
</style>
