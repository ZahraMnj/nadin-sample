import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNameStore = defineStore('name', () => {
  const name = ref('')
  
  const updateName = (newName) => {
    name.value = newName 
  }
  return { name, updateName }
})