<script setup> // js here?
// import "bootstrap/dist/css/bootstrap.min.css";
import { gql, useMutation, useQuery } from '@urql/vue';
import Card from 'primevue/card';
import ScrollPanel from 'primevue/scrollpanel';
import Listbox from 'primevue/listbox';


import { ref } from "vue";

import Form from "./Form.vue";
import ActionItem from "./ActionItem.vue";

const actionItems = ref({});
const growingId = ref(0);


function onActionItemCreate(title, description) { //create
  let newId = growingId.value++; 
  actionItems.value[newId] = {
    title: title,
    description: description,
  };
}

const DeleteTodoQuery = gql`
  mutation($id: Int!) {
    delete_todos(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
const DeleteTodo = useMutation(DeleteTodoQuery);

const onActionItemDelete = (itemId, index) => {

  console.log('-----data------')
  console.log('itemId: '+ itemId + ' key:' + index)
  console.log(actionItems)
  console.log(actionItems.value)
 
  

    let variables = { id: itemId };
    let context =  { 
        fetchOptions: () => {
          return { headers: { 'x-hasura-admin-secret' : 'ViR8RukbTpJAIfgMUFgUXfOUAJt0EA4mymD8hYWzUTNByJ6LGhu5N12XXFr3sQIv' } } //todo dynamic
        }
    };
    console.log('variables')
    console.log(variables)
    DeleteTodo.executeMutation(
      variables,
      context,
    ).then(result => {
        delete actionItems.value[index];
        console.log('delete result::')
        console.log(result)
        // let raw = result.data._rawValue.todos; // TODO: find a better way of accessing this
        // console.log(raw)
        // actionItems.value = raw
        console.log('index: ' + index)
        console.log(actionItems);
        //delete actionItems.value[index];
        console.log(actionItems);
    });
};

// function onActionItemDelete(itemId, index) { //delete
// }

function onActionItemUpdate(itemId, title, description) { //update
  actionItems.value[itemId] = {
    title: title,
    description: description,
  };
}



// new


    // https://github.com/urql-graphql/urql/discussions/1950
    // https://formidable.com/open-source/urql/docs/basics/vue/#context-options


    const todosQuery = gql`
          query {
              todos {
              id
              title
              description
              }
          }
  `;

    const result = useQuery({
      query: todosQuery,
      context: {
        fetchOptions: () => {
          return { headers: { 'x-hasura-admin-secret' : 'ViR8RukbTpJAIfgMUFgUXfOUAJt0EA4mymD8hYWzUTNByJ6LGhu5N12XXFr3sQIv' } } //todo dynamic
        }
      }
    });

    result.then(result => {
      // console.log(result)
      let raw = result.data._rawValue.todos // TODO: find a better way of accessing this
      // console.log(raw)
      // actionItems = raw
      // console.log(typeof(raw))
      for (let i = 0; i < raw.length; i++) {
              let item = raw[i]
              actionItems.value[i] = {
                id: item.id,
                title: item.title,
                description: item.description,
              };
      }
      // actionItems.value[newId] = {
      //   title: title,
      //   description: description,
      // };

    });


    // onActionItemCreate
    let blah = {
      fetching: result.fetching,
      data: result.data,
      error: result.error,
    };

    // result.todos.foreach((todo) => {
    // console.log(todo)
    // })

    // data.forEach((row) => {
    //   onActionItemCreate(row.title, 'test desc')
    // })
    // console.log(result.data.todos)
    // console.log('data')
    // console.log(blah)

    
    //  actionItems = result.data.todos;
</script>

<template>

  <pre style="display:none"> <!-- keep hidding when not debugging-->
    {{  blah.data }}
  </pre>
  <!-- <div class="container overflow-hidden">
    <div class="row">
      <div class="col-12">
        <h1>TO-DO LIST</h1>
      </div>
    </div> -->


  

    
<div class="card flex align-items-center justify-content-center">
  <div class="grid grid-cols-2 gap-4">
  <Card style="width: 25em"  class="p-sm">
      <template #header>
          <img width="100" alt="user header" src="https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png" />
      </template>
      <template #title>Insert Todo</template>
      <template #subtitle>v. 0.0.86</template>
      <template #content>
          <p>
            <Form @create="onActionItemCreate" />
          </p>
      </template>
      <template #footer>
          <Button icon="pi pi-check" label="Create" />
          <!-- <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" /> -->
      </template>
  </Card>

  <Card style="width: 25em" class="p-sm todos-card">
      <template #header>
          <img alt="user header" width="100" src="https://cdn2.iconfinder.com/data/icons/task-board/100/taskboard_task_board_plan_schedule_list_-10-1024.png" />
      </template>
      <!-- <template #title>Insert Card</template>
      <template #subtitle>v. 0.0.86</template> -->
      <!-- <ScrollPanel style="width: 300px; height: 200px;"> -->
      <template #content>
        <ScrollPanel style="width: 100%; height: 200px" class="custombar1">

          <!--  -->
            <div class="content">
             <ul>
                <div v-if="Object.keys(actionItems).length == 0">
                  <h4 class="text-center" style="color: rgb(150, 150, 150)">Empty</h4>
                </div>
                <div
                  v-else
                  class="col-12"
                  v-for="(item, key) in actionItems"
                  :key="key"
                >
                
                  <ActionItem
                    :index="key"
                    :itemId="item.id"
                    :title="item.title"
                    :description="item.description"
                    @delete="onActionItemDelete"
                    @update="onActionItemUpdate"
                  />
                
                </div>
            </ul>
         
            </div>
          </ScrollPanel>
        
      </template>
      <!--  -->
      <template #footer>
          <Button icon="pi pi-check" label="Create" />
          <!-- <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" /> -->
      </template>
  </Card>
  </div>
</div>
    
<!-- <div class="surface-card p-4 shadow-2 border-round">
  <div class="text-3xl font-medium text-900 mb-3">Add Todo</div>
    <div class="row gy-5">
      <div class="col-6">
        <div class="p-3 border bg-light">
          <Form @create="onActionItemCreate" />
        </div>
      </div>
      <div class="col-6">
        <div class="p-3 border bg-light">
          <div class="row g-2">
            <div v-if="Object.keys(actionItems).length == 0">
              <h4 class="text-center" style="color: rgb(150, 150, 150)">Empty</h4>
            </div>
            <div
              v-else
              class="col-12"
              v-for="(actionItem, key) in actionItems"
              :key="key"
            >
              <ActionItem
                :itemId="key"
                :title="actionItem.title"
                :description="actionItem.description"
                @delete="onActionItemDelete"
                @update="onActionItemUpdate"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<style>

/* .todos-card, .content {
  overflow-y: scroll;
}  */
.content {
  overflow-y: scroll;
} 

.p-scrollpanel .p-scrollpanel-bar  {
  background:#4f83b7 !important;

}

.p-scrollpanel-bar {
  opacity: 1
}



</style>
