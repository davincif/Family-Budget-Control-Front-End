<template>
  <q-page class="row items-center justify-evenly">
    <q-form @submit="logUser">
      <q-input
        class="upper"
        filled
        type="email"
        :label="lodash.capitalize($t('EMAIL'))"
        v-model="uEmail"
        :rules="[
          (val) => !!val || '* ' + $t('REQUIRED'),
          (val, rules) => rules.email(val) || '* ' + $t('INVALID'),
        ]"
        lazy-rules
      />

      <q-input
        filled
        type="password"
        color="teal"
        :label="lodash.capitalize($t('PASSWORD'))"
        v-model="uPassword"
        :rules="[
          (val) => !!val || '* ' + $t('REQUIRED'),
          (val) => val.length >= 6 || '* ' + $t('INVALID'),
        ]"
        lazy-rules
      />

      <q-btn color="primary" :label="$t('LOGIN')" type="submit" />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import lodash from 'lodash';

// Local States
const uEmail = ref('');
const uPassword = ref('');

function logUser() {
  console.log('logUser', uEmail, uPassword);
}

// const capt = lodash.captalize;
</script>

<style lang="sass" scoped>
@import '../css/app'
</style>
