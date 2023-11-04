<template>

  <a-list :data-source="todos" >
     <template #renderItem="{ item }">
       <a-list-item>
         <span :class="{ completed: item.completed }">{{ item.text }}</span>
         <div style="display:flex; justify-content:space-between">
         <a-checkbox class="checkbox" :checked="item.completed" @change="toggle(item)" />
        <a-button @click="remove(item)" class="remove">Remove</a-button>
        </div>
       </a-list-item>
     </template>
  </a-list>

  <a-input v-model:value="newTodo.text" @keyup.enter="addTodo" style="margin-bottom: 10px !important"/>
  <a-button class="btn" @click="addTodo">Add</a-button>

</template>

<script setup>
import { reactive } from 'vue'

const newTodo = reactive({ text: '' })

const todos = reactive([
  { text: 'Waking up!', completed: true },
  { text: 'Brush teeth', completed: false },
])

function addTodo() {
   console.log('clicked')
  if (!newTodo.text) return

  todos.push({
    text: newTodo.text,
    completed: false
  })

  newTodo.text = ''
}

function toggle(todo) {
  todo.completed = !todo.completed 
}
function remove(todo) {

  const index = todos.findIndex(t => t === todo)
  
  if (index > -1) {
    todos.splice(index, 1)
  }

}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
 .checkbox{
   padding-right: 2rem 
  }
@media screen and (max-width: 576px) {
  span{
    font-size: 12px;
  }
  .checkbox{
   padding-right: 0.5rem 
  }
  .remove{
    font-size: 12px;
    padding: 2px;
  }
}
</style>