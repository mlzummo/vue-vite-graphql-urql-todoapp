<script lang="ts">
import { gql, useQuery } from '@urql/vue';
// import { useToast } from "primevue/usetoast";
import CreateTodo from "./AddTodo.vue";

  const todosQuery = gql`
          query {
              todos {
              id
              title
              }
          }
  `;
  
export default {
  components: {
    CreateTodo // gotta make sure of this
  },
  setup() {
    // https://github.com/urql-graphql/urql/discussions/1950
    // https://formidable.com/open-source/urql/docs/basics/vue/#context-options

    const result = useQuery({
      query: todosQuery,
      context: {
        fetchOptions: () => {
          return { headers: { 'x-hasura-admin-secret' : 'ViR8RukbTpJAIfgMUFgUXfOUAJt0EA4mymD8hYWzUTNByJ6LGhu5N12XXFr3sQIv' } } //todo dynamic
        }
      }
    });


    return {
      fetching: result.fetching,
      data: result.data,
      error: result.error,
    };
  }
};
</script>

<template>
  <div>
    <CreateTodo />
  </div>
 <!-- i wann add toast here??-->
    <div v-if="fetching">
      Loading...
    </div>
    <div v-else-if="error">
      Oh no... {{error}}
    </div>
    <div v-else>
      <ul v-if="data">
        <li v-for="todo in data.todos" :key="todo.id">{{ todo.title }}</li>
      </ul>
    </div>
  </template>
  
