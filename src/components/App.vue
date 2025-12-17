<template>
    <div class="app">
        <Header/>
        <router-view/>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './Header.vue'
</script>
