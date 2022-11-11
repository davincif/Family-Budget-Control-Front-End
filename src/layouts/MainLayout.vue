<template>
  <q-layout view="hHh lpR fFf">
    <HeaderComponent v-model:isLeftDrawerOpen="isLeftDrawerOpen" />

    <q-drawer v-model="isLeftDrawerOpen" side="left" overlay elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import HeaderComponent from 'components/HeaderComponent.vue';

const isLeftDrawerOpen = ref(false);
</script>
