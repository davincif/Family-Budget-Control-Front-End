<template>
  <q-btn class="piker-btn" icon="event" round color="primary">
    <q-popup-proxy
      @before-show="updateProxy"
      cover
      transition-show="scale"
      transition-hide="scale"
    >
      <q-date v-model="proxyDate">
        <div class="row items-center justify-end q-gutter-sm">
          <q-btn label="Cancel" color="primary" flat v-close-popup />
          <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
        </div>
      </q-date>
    </q-popup-proxy>
  </q-btn>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// PROPS DEFINITIONS AND SETS
export interface DateBtnAtomProps {
  selectedDate: string;
}
export interface DateBtnAtomEmits {
  (e: 'update:selectedDate', state: string): void;
}

// Props and Emits
const props = withDefaults(defineProps<DateBtnAtomProps>(), {
  selectedDate: '',
});
const emits = defineEmits<DateBtnAtomEmits>();

// Local States
const date = ref(props.selectedDate);
const proxyDate = ref(date.value);

function updateProxy() {
  proxyDate.value = date.value;
}

function save() {
  date.value = proxyDate.value;
  emits('update:selectedDate', date.value);
}
</script>

<style lang="sass" scoped>
@import 'src/css/app'
.q-btn.piker-btn
 width: auto
 margin: 0
</style>
