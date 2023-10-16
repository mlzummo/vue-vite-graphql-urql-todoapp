<script lang=ts>
import { gql, useMutation, useQuery, type OperationContext } from '@urql/vue';
import { ref } from 'vue';

import type { VueElement } from 'vue';
export default {


//  data() {
//     return {
//       title: '',
//     };
//   },
  setup() {

    const context: Partial<OperationContext> = { // todo: abstract
          // Use Partial<OperationContext> here
          // headers: {
          //   // Authorization: 'Bearer yourToken',
          //   'x-hasura-admin-secret' : 'ViR8RukbTpJAIfgMUFgUXfOUAJt0EA4mymD8hYWzUTNByJ6LGhu5N12XXFr3sQIv' 
          // },
          fetchOptions: () => {
            return { headers: { 'x-hasura-admin-secret' : 'ViR8RukbTpJAIfgMUFgUXfOUAJt0EA4mymD8hYWzUTNByJ6LGhu5N12XXFr3sQIv' } } //todo dynamic
          }
        }

    const title = ref('');

    const updateTodoResult = useMutation(gql`
      mutation($id: ID!, $title: String!) {
        updateTodo(id: $id, title: $title) {
          id
          title
        }
      }
    `);

    const updateTodo = gql`
      mutation($id: ID!, $title: String!) {
        update_todos(id: $id, title: $title) {
          id
          title
        }
      }
    `;

    // figure out what this means:
    const AddTodo = gql`
      mutation($title: String!) {
        insert_todos(objects: [{ title: $title }]) {
          returning {
            id
            created_at
          }
        }
      }
    `;

    const InsertTodo = useMutation(AddTodo);
    const UpdateTodo = useMutation(updateTodo);

    return {
      updateTodo(id : any, title: any) {
        const variables = { id: 4 , title: title };
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



        const variables = { title: title.value };
      
        InsertTodo.executeMutation(variables,context).then(result => {
          console.log('hjere atleastrr')
          console.log(result);
        });

        const update = { id: "1", title: "this is line 85 we def updated this" };


        UpdateTodo.executeMutation(update, context).then(result => {
          console.log('Updating: Record 0')
          console.log(result)
        })
      },
      title, 
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