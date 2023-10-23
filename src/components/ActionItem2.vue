<script lang="ts" setup>
import { ref } from "vue";

import Card from 'primevue/card';
import Panel from 'primevue/card'

const props = defineProps({
  index: String, // this is the "key value were going to pass"
  itemId: Number,
  title: String,
  description: String,
});
const emit = defineEmits(['delete', 'update'])

const isEditing = ref(false);
const editableTitle = ref(props.title);
const editableDescription = ref(props.description);

function onDelete(data: any) {
  console.log('-----props------')
  console.log(props.index)
  console.log(data)
  emit('delete', props.itemId, props.index);
}

function onActionItemUpdate() {
  emit('update', props.itemId, editableTitle.value, editableDescription.value);
  isEditing.value = false;
}
</script>

<template>
  <li>


    <div class="flex flex-wrap p-2 align-items-center gap-3">
            <!-- <img class="w-4rem shadow-2 flex-shrink-0 border-round" :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.item.image" :alt="slotProps.item.name" /> -->
            <div class="flex-1 flex flex-column gap-2">
                <span class="font-bold">{{ title }}</span>
                <div class="flex align-items-center gap-2">
                    <i class="pi pi-tag text-sm"></i>
                    <span>{{ description }}</span>
                </div>
            </div>
            <span class="font-bold text-900">
                <button type="button" class="btn btn-outline-danger" @click="onDelete(index)">Delete</button>
                <input type="submit" class="btn btn-primary" value="Update" />
            </span>
        </div>

</li>
</template>

<style scoped>
li {
  border-bottom: 1px dotted rgb(0, 0, 0);
}

</style>
