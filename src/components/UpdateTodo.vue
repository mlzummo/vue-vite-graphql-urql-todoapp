
<script lang="ts">

import { gql, useMutation, useQuery, type OperationContext } from '@urql/vue';

import { ref } from 'vue';



export default {
  data() {
    return {
      title: '',
    };
  },
  setup() {


    // const updateTodo = gql`
    //   mutation($id: String!, $title: String!) {
    //     update_todos(id: $id, title: $title) {
    //       id
    //       title
    //     }
    //   }
    // `;

    // const updateTodo = gql`
    //   mutation($id: ID!, $newData: String!) {
    //     update_todos(
    //       where: id: { _eq: $id }
    //       _set: { title: $newData}
    //     ) {
    //       affected_rows
    //     }
    //   }
    // `;


    const updateTodo = gql`
  mutation UpdateTodo($id: Int!, $newData: String!) {
    update_todos(
      where: { id: { _eq: $id } }
      _set: { title: $newData }
    ) {
      affected_rows
    }
  }
`;
  const updateTodoMutation = useMutation(updateTodo)

  // const newUpdateVariables = {
  //   id: 1, // ID of the record to update
  //   title: "we made an update"
  // }


  // const newUpdate = gql`
  //   mutation($id: ID!, $title: String!) {
  //     update_todos(where: { id: { _eq: $id } }, _set: {title = $title}) {
  //       affected_rows
  //     }
  //   }
  // `;

  // const NewUpdate = useMutation(newUpdate);



      const context: Partial<OperationContext> = { // todo: abstract
            fetchOptions: () => {
              return { headers: { 'x-hasura-admin-secret' : 'ViR8RukbTpJAIfgMUFgUXfOUAJt0EA4mymD8hYWzUTNByJ6LGhu5N12XXFr3sQIv' } } //todo dynamic
            }
      }
      

        const variables = { id: 86, newData: "Win!, EDM, dream" };

        updateTodoMutation.executeMutation(variables, context).then(result => {
            console.log('Updating: Delete 0')
            console.log(result)
          });

        return {
          variables
        }
  }
};
</script>

<template>
  <div>Update Todo</div>
</template>



