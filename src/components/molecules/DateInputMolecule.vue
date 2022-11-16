<template>
  <q-input
    id="register-ipt-birthdate"
    filled
    type="text"
    v-model="selectedDate"
    :label="lodash.capitalize($t('BIRTHDATE'))"
    hint="yyyy/mm/dd"
    mask="####/##/##"
    :rules="rules"
    lazy-rules
    autocomplete="bday"
  >
    <template v-slot:append>
      <DateBtnAtom
        :selected-date="selectedDate"
        @update:selected-date="emitSelectedDate"
      />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ValidationRule } from 'quasar';
import lodash from 'lodash';

import DateBtnAtom from 'src/components/atoms/DateBtnAtom.vue';

// PROPS DEFINITIONS AND SETS
export interface DateInputMoleculeProps {
  selectedDate: string;
  rules?: ValidationRule<any>[];
}
export interface DateInputMoleculeEmits {
  (e: 'update:selectedDate', state: string): void;
}

// Props and Emits
const props = withDefaults(defineProps<DateInputMoleculeProps>(), {
  selectedDate: '',
});
const emits = defineEmits<DateInputMoleculeEmits>();

// Local States
const selectedDate = ref(props.selectedDate);

function emitSelectedDate(newState: string) {
  selectedDate.value = newState;
  emits('update:selectedDate', newState);
}
</script>
