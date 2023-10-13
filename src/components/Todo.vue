<script lang="ts">
import { gql, useQuery } from '@urql/vue';

  const todosQuery = gql`
          query {
              todos {
              id
              title
              }
          }
  `;
  
export default {
  setup() {
    const result = useQuery({
      query: todosQuery,

  
    },
    );

    return {
      fetching: result.fetching,
      data: result.data,
      error: result.error,
    };
  }
};
</script>

<template>
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
  
