<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

      <q-toolbar-title>
        <!-- <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
      </q-avatar> -->
        Family Budget Control
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// PROPS DEFINITIONS AND SETS
export interface HedaerComponenetProps {
  isLeftDrawerOpen: boolean;
}
export interface HedaerComponenetEmits {
  (e: 'update:isLeftDrawerOpen', state: boolean): void;
}

// Props and Emits
const props = withDefaults(defineProps<HedaerComponenetProps>(), {
  isLeftDrawerOpen: false,
});
const emits = defineEmits<HedaerComponenetEmits>();

// Local States
const isLeftDrawerOpen = ref(props.isLeftDrawerOpen);

/**
 * change the state of the left drawer (either if it's open of not)
 */
function toggleLeftDrawer() {
  isLeftDrawerOpen.value = !isLeftDrawerOpen.value;
  emits('update:isLeftDrawerOpen', isLeftDrawerOpen.value);
}
</script>
