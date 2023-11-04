<template>
  <a-card title="Profile" :bordered="false" class="profile-card">
    <div class="profile">
      <p><strong>Name:</strong></p>
      <p v-if="!editing" >
        {{ name }}
      </p>
      <a-input v-model:value="name" v-else @blur="saveName" style="min-width:60px"/>
      <a-button v-if="!editing" @click="toggleEdit">
        <edit-outlined> </edit-outlined>
      </a-button>
      <a-button v-else @click="toggleEdit">
        <CheckOutlined />
      </a-button>
    </div>

    <div class="profile">
      <p><strong>Language: </strong></p>
      <a-select
        v-model="selectedLanguage"
        @change="changeLanguage($event)"
        class="language-select"
      >
        <a-select-option value="en">English</a-select-option>
        <a-select-option value="fa">Persian</a-select-option>
      </a-select>
    </div>
  </a-card>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { EditOutlined, CheckOutlined } from "@ant-design/icons-vue";

const editing = ref(false);
const name = ref("");

onMounted(() => {
  name.value = localStorage.getItem("name") || name.value;
});

function saveName() {
  localStorage.setItem("name", name.value);
}

function toggleEdit() {
  editing.value = !editing.value;
}

const selectedLanguage = ref(localStorage.getItem("language") || "en");

function changeLanguage(event: any) {
  localStorage.setItem("language", event);
  // window.location.reload();
}
</script>

<style scoped>
p{
  padding-top: 1rem;
  padding-right: 0.5rem;
}
.profile-card {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
}

.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: auto;
}

.language-select {
  width: 120px;
  margin-top: 16px;
  min-width: 60px;
}
@media screen and (max-width: 768px) {
  .profile-card {
  width: 200px;
  color: var(--color-primary);
}
}
</style>