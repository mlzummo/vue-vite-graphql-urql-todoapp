<script lang=ts>
import { gql, useMutation, useQuery, type OperationContext } from '@urql/vue';
import { ref } from 'vue';

import type { VueElement } from 'vue';
export default {


 data() {
    return {
      title: '',
    };
  },
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
    const newData = ref('');

    // const updateTodoResult = useMutation(gql`
    //   mutation($id: ID!, $title: String!) {
    //     updateTodo(id: $id, title: $title) {
    //       id
    //       title
    //     }
    //   }
    // `);

    // const updateTodo = gql`
    //   mutation($id: String!, $title: String!) {
    //     update_todos(id: $id, title: $title) {
    //       id
    //       title
    //     }
    //   }
    // `;

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

    // const updateTodo = gql`
    //   mutation($id: String!, $title: String!) {
    //     update_todos(id: $id, title: $title) {
    //       returning {
    //         id
    //         created_at
    //       }
    //   }
    //   }
    // `;

    // const AddTodo = gql`
    //   mutation UpdateTodo($id: Int!, $title: String!) {
    //     update_todos(where: {id: { _eq: $id } }, _set: {title: $title }) {
    //       returning {
    //         id
    //         created_at
    //       }
    //     }
    //   }
    // `;


    /// new




  // Execute

    const InsertTodo = useMutation(AddTodo);
    // const UpdateTodo = useMutation(updateTodo);
    // const UpdateTodo2 = useMutation(newUpdate);
    // const UpdateTod2 = useMutation(updateTodo);
    // const newUpdate2 = useMutation(newUpdate)


  
    return {
      // updateTodo(id : any, title: any) {
      //   const variables = { id: 4 , title: title };
      //   updateTodo.executeMutation(variables).then(result => {
      //     // The result is almost identical to `updateTodoResult` with the exception
      //     // of `result.fetching` not being set and its properties not being reactive.
      //     // It is an OperationResult.
      //   });
      // },
      addToDo(e: Event) {
        e.preventDefault();
        console.log(title)
        console.log(title.value)



        const variables = { title: title.value };
      
        InsertTodo.executeMutation(variables,context).then(result => {
          console.log('Inserted Value')
          console.log(result);
        });

        
        // const update = { id: 1, title: "this is line 85 we def updated this" };

        // newUpdate2.executeMutation(update, context).then(result => {
        //   console.log('Updating: Delete 0')
        //   console.log(result)
        // });





      //   UpdateTodo2.executeMutation(newUpdateVariables ,context).then(result => {
      //     console.log("here");
      //     console.log(result);
      //   })
      // },
     
    },
    title, 
  }
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