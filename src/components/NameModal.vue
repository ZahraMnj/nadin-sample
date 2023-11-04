<template>
  <div>
    <a-modal
      v-if="!nameSaved"
      v-model:open="open"
      title="Enter Your Name"
      :confirm-loading="loading"
      @ok="handleOk"
    >
      <template #footer>
        <a-button
          key="submit"
          type="primary"
          :loading="loading"
          @click="handleOk"
          class="btn"
          >Submit</a-button
        >
      </template>
      <a-input v-model:value="name" placeholder="Enter your name" />
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useNameStore } from "../stores/EnteredName";

const name = ref<string>("");
const loading = ref<boolean>(false);
const open = ref<boolean>(false);
const nameStore = useNameStore();
const nameSaved = ref(false);

const showModal = () => {
  open.value = true;
};

function saveName() {
  localStorage.setItem("name", name.value);
   localStorage.setItem('language',"en");
}
onMounted(() => {
  if (localStorage.getItem("name")) {
    nameSaved.value = true;
  }
});
const handleOk = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    open.value = false;
  }, 2000);
  nameStore.updateName(name.value);
  saveName();
};

const handleCancel = () => {
  open.value = false;
};

onMounted(() => {
  open.value = true;
});
</script>


