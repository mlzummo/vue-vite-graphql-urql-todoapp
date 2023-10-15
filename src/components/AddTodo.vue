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

    const title = ref('');

    const updateTodoResult = useMutation(gql`
      mutation($id: ID!, $title: String!) {
        updateTodo(id: $id, title: $title) {
          id
          title
        }
      }
    `);

    const AddTodo = gql`
      mutation {
        insert_todos(objects: [{ title: "Learn GraphQL" }]) {
          returning {
            id
            created_at
          }
        }
      }
    `;

  const result = useQuery({
      query: AddTodo,
      context: {
        fetchOptions: () => {
          return { headers: { 'x-hasura-admin-secret' : 'ViR8RukbTpJAIfgMUFgUXfOUAJt0EA4mymD8hYWzUTNByJ6LGhu5N12XXFr3sQIv' } } //todo dynamic
        }
      }
    });

    const updateTodo = (id: number | null, title: string) => {
      // Your updateTodo logic here
      const variables = { id, title: title || '' };
      // context: {
      //   fetchOptions: () => {
      //     return { headers: { 'x-hasura-admin-secret' : 'ViR8RukbTpJAIfgMUFgUXfOUAJt0EA4mymD8hYWzUTNByJ6LGhu5N12XXFr3sQIv' } } //todo dynamic
      //   }
      const context: Partial<OperationContext> = {
        // Use Partial<OperationContext> here
        // headers: {
        //   // Authorization: 'Bearer yourToken',
        //   'x-hasura-admin-secret' : 'ViR8RukbTpJAIfgMUFgUXfOUAJt0EA4mymD8hYWzUTNByJ6LGhu5N12XXFr3sQIv' 
        // },
        fetchOptions: () => {
          return { headers: { 'x-hasura-admin-secret' : 'ViR8RukbTpJAIfgMUFgUXfOUAJt0EA4mymD8hYWzUTNByJ6LGhu5N12XXFr3sQIv' } } //todo dynamic
        }
      }
      updateTodoResult.executeMutation(variables, context).then(result => {
        // The result is almost identical to `updateTodoResult` with the exception
        // of `result.fetching` not being set and its properties not being reactive.
        // It is an OperationResult.
      });
    };

    const addToDo = (e: Event) => {
      e.preventDefault();
      console.log(title.value); // Assuming 'title' is a ref
      updateTodo(1, 'test'); // Calling the updateTodo function
      // AddTodoResult()
    };




    // new break line  11:18 10/14/23

  //   const insertTodoMutation = async (variables) => {
  //       const { data } = await useMutation(gql`
  //           mutation {
  //             insert_todos(objects: [{ title: "${variables.title}" }]) {
  //               returning {
  //                 id
  //                 created_at
  //               }
  //             }
  //           }
  //       `, variables);

  // retu


    return {
      // updateTodo,
      addToDo,
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