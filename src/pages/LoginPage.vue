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
          (val) => !!val || $t('REQUIRED'),
          (val, rules) => rules.email(val) || $t('INVALID'),
        ]"
        lazy-rules
      />

      <q-input
        filled
        type="password"
        color="teal"
        :label="lodash.capitalize($t('PASSWORD'))"
        v-model="uPassword"
        :rules="[(val) => ruleValdiator($t(passwordRule(val)))]"
        lazy-rules
      />

      <q-btn color="primary" :label="$t('LOGIN')" type="submit" />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import lodash from 'lodash';

import { isPasswordValid } from 'src/core/LoginCore';
import { PasswordErrroEnum } from 'src/models/core/PasswordErrorEnum';

// Local States
const uEmail = ref('');
const uPassword = ref('');

function logUser() {
  console.log('logUser', uEmail, uPassword);
}

/**
 * A filter to be applyed always a custom rule is used with translation
 */
function ruleValdiator(val: string) {
  return val || true;
}

/**
 * Check if the password matches the business rules
 * @param val the password to check
 * @returns '' for success, error Label for translation otherwise
 */
function passwordRule(val: string): string {
  let msg = '';

  const passError = isPasswordValid(val);
  switch (passError) {
    case PasswordErrroEnum.EMPTY:
      msg = 'REQUIRED';
      break;

    case PasswordErrroEnum.TOOSHORT:
      msg = 'INVALID';
      break;
  }

  return msg;
}

// const capt = lodash.captalize;
</script>

<style lang="sass" scoped>
@import '../css/app'
p
  margin-top: 2rem
  background-color: white
</style>
