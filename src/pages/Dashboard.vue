<template>
  <div class="dash-card">
    <p>
      <strong> {{ time }} </strong>
    </p>
    <p v-if="!nameStored">Hello, {{ nameStore.name }}</p>
    <p v-if="nameStored">Hello, {{ nameStored }}</p>
  </div>
</template>

<script setup>
import { useNameStore } from "../stores/EnteredName";

const time = new Date().toLocaleTimeString();
const nameStore = useNameStore();
const getName = () => {
  return nameStore.name;
};

const nameStored = localStorage.getItem("name");
</script>

<style scoped>
.dash-card{
  padding-top: 50px;
  font-size: 25px;
  animation: bounce 5s ease infinite;
}
@media screen and (max-width: 576px) {
  .dash-card{
  padding-top: 30px;
  font-size: 12px;
}
}
</style>