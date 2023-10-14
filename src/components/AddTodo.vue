<script lang="ts">
import { gql, useMutation } from '@urql/vue';
import { ref } from 'vue';

import type { VueElement } from 'vue';

export default {
  setup() {

    const title = ref(0);
    const id = 1;

    const updateTodoResult = useMutation(gql`
      mutation($id: ID!, $title: String!) {
        updateTodo(id: $id, title: $title) {
          id
          title
        }
      }
    `);


    return {
      // updateTodo(id : any, title: any) {
      //   const variables = { id, title: title || '' };
      //   updateTodoResult.executeMutation(variables).then(result => {
      //     // The result is almost identical to `updateTodoResult` with the exception
      //     // of `result.fetching` not being set and its properties not being reactive.
      //     // It is an OperationResult.
      //   });
      // },
      addToDo(event : Event) {
        console.log(event)
      }
    }
  }
}
</script>

<template>
    <div>
      test 123xxxxx
      <form @submit="addToDo">
        <input type="text" name="title"> <!-- -->
        <button type="submit">Submit</button>
      </form>
    </div>
</template>