<template>
 <Home />
<NameModal />

</template>

<script lang="ts" setup>
import Home from './components/Home.vue';
import NameModal from './components/NameModal.vue'


</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-primary);
  margin-top: 0px;
}
:root {
  --color-primary: #0d0284;
  --color-primary-light: #a59ce7;
  --color-grey-1: #102a42;
  --color-grey-5: #617d98;
  --color-grey-10: #f1f5f8;
  --transition: all 0.3s linear;
}
@keyframes bounce {
  0% {
    transform: scale(1.4);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1.4);
  }
}

 h2 {
    font-size: 1.5rem;
    color: var(--color-primary);
  }
.btn {
  background: var(--color-primary);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: #fff;
  transition: var(--transition);
  display: inline-block;
  font-family: "vazir", sans-serif;
  border: none;
}
.btn:hover {
  background: var(--color-primary-light);
  color: var(--color-primary);
}
.section-center {
  padding: 4rem 0;
  width: 85vw;
  margin: 0 auto;
  max-width: 1170px;
}


</style>
