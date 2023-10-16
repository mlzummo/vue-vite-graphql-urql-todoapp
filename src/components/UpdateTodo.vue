
<script lang="ts" setup>

import { gql, useMutation, useQuery, type OperationContext } from '@urql/vue';

import { ref } from 'vue';

const updateTodo = gql`
      mutation($id: String!, $title: String!) {
        update_todos(id: $id, title: $title) {
          id
          title
        }
      }
    `;

    const updateTodoMutation = useMutation(updateTodo)

    const newUpdateVariables = {
      id: 1, // ID of the record to update
      title: "we made an update"
    }


export default {
  setup() {


      // const context: Partial<OperationContext> = { // todo: abstract
      //       // Use Partial<OperationContext> here
      //       // headers: {
      //       //   // Authorization: 'Bearer yourToken',
      //       //   'x-hasura-admin-secret' : 'ViR8RukbTpJAIfgMUFgUXfOUAJt0EA4mymD8hYWzUTNByJ6LGhu5N12XXFr3sQIv' 
      //       // },
      //       fetchOptions: () => {
      //         return { headers: { 'x-hasura-admin-secret' : 'ViR8RukbTpJAIfgMUFgUXfOUAJt0EA4mymD8hYWzUTNByJ6LGhu5N12XXFr3sQIv' } } //todo dynamic
      //       }
      // }
      

      //   const result = updateTodoMutation.executeMutation(newUpdateVariables, context).then(result => {
      //       console.log('Updating: Delete 0')
      //       console.log(result)
      //     });

  return {
    result
  }
}
</script>

<template>
  
</template>



