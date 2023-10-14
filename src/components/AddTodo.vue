<script lang=ts>
import { gql, useMutation } from '@urql/vue';
import { ref } from 'vue';

import type { VueElement } from 'vue';
export default {


//  data() {
//     return {
//       title: '',
//     };
//   },
  setup() {

    const title = ref('');

    const updateTodoResult = useMutation(gql`
      mutation($id: ID!, $title: String!) {
        updateTodo(id: $id, title: $title) {
          id
          title
        }
      }
    `);


    return {
      updateTodo(id : any, title: any) {
        const variables = { id, title: title || '' };
        updateTodoResult.executeMutation(variables).then(result => {
          // The result is almost identical to `updateTodoResult` with the exception
          // of `result.fetching` not being set and its properties not being reactive.
          // It is an OperationResult.
        });
      },
      addToDo(e: Event) {
        e.preventDefault();
        console.log(title)
        console.log(title.value)
        
      },
      title
    };
  }


};
</script>

<template>
    <div>
      <form @submit="addToDo">
        <input type="text" name="title" v-model="title"> <!-- v-model="title"-->
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>