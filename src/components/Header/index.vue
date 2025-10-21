<template>
  <header class="header">
    <div class="logo flex-row space-between center">
      <img :src="logo" class="logo" alt="My Static App Logo" />
      <div class="search-field">
        <v-text-field
          v-model="search"
          label="Search"
          variant="outlined"
          density="compact"
          prepend-inner-icon="mdi-magnify"
          hide-details
          class="search-input"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VTextField } from 'vuetify/components';
import logo from '../../assets/logo.png';

const search = ref('');
</script>

<style scoped>
.header {
  padding: 10px 20px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
  min-height: 50px;
}
.logo.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.logo img.logo {
  height: 100px;
}
.search-field {
  width: 200px;
}
</style>