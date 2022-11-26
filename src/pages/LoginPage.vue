<template>
  <q-page class="row items-center justify-evenly">
    <q-form @submit="logUser">
      <q-input
        id="login-ipt-uname"
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
        autocomplete="email"
      />
      <q-input
        id="login-ipt-upassword"
        filled
        type="password"
        color="teal"
        :label="lodash.capitalize($t('PASSWORD'))"
        v-model="uPassword"
        :rules="[passwordRule]"
        lazy-rules
        autocomplete="current-password"
      />

      <q-btn color="primary" :label="$t('LOGIN')" type="submit" />
      <q-btn to="/auth/register" color="secondary" :label="$t('REGISTER')" />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ValidationRule } from 'quasar';
import { ref } from 'vue';
import lodash from 'lodash';

import { RulesUtils } from 'src/utils/rules';
import { LoginCore } from 'src/core/LoginCore';

// Local States
const uEmail = ref('');
const uPassword = ref('');

// initializaitons
const loginCore = LoginCore.getInstance();
const rulesUtils = RulesUtils.getInstance({});

// Validation Funcitons
const passwordRule: ValidationRule = (val) => {
  return rulesUtils.passwordRule(val, loginCore);
};

// Btn action Functions
function logUser() {
  console.log('logUser', uEmail, uPassword);
}
</script>

<style lang="sass" scoped>
@import '../css/app'

p
  margin-top: 2rem
  background-color: white
</style>
