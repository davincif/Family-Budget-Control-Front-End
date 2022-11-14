<template>
  <q-page class="row items-center justify-evenly">
    <q-form @submit="regUser">
      <q-input
        id="register-ipt-uname"
        class="upper"
        filled
        type="text"
        :label="lodash.capitalize($t('NAME'))"
        v-model="uName"
        :rules="[(val) => !!val || $t('REQUIRED')]"
        lazy-rules
        autocomplete="username"
      />
      <q-input
        id="register-ipt-uname"
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
        id="register-ipt-upassword"
        class="upper"
        filled
        :type="uPasswordShow ? 'text' : 'password'"
        bottom-slots
        :label="lodash.capitalize($t('PASSWORD'))"
        v-model="uPassword"
        lazy-rules
        :rules="[passwordRule]"
        autocomplete="current-password"
      >
        <template v-slot:append>
          <q-btn dense flat @click="toglePasswordShow">
            <q-icon>
              <img v-if="uPasswordShow" src="src/assets/eye.svg" />
              <img v-else src="src/assets/eye-slash.svg" />
            </q-icon>
          </q-btn>
        </template>
      </q-input>
      <q-input
        id="register-ipt-birthdate"
        filled
        type="text"
        v-model="uBirth"
        :label="lodash.capitalize($t('BIRTHDATE'))"
        hint="yyyy/mm/dd"
        lazy-rules
        autocomplete="bday"
      >
        <template v-slot:append>
          <q-btn dense flat>A</q-btn>
        </template>
      </q-input>

      <DateBtnComponent />

      <q-btn
        id="register-btn-register"
        color="primary"
        :label="$t('REGISTER')"
        type="submit"
      />
      <q-btn
        id="register-btn-login"
        to="/auth"
        color="secondary"
        :label="$t('LOGIN')"
      />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import lodash from 'lodash';

import { passwordRule } from 'src/utils/rules';
import DateBtnComponent from 'src/components/DateBtnComponent.vue';

// Local States
const uName = ref('');
const uEmail = ref('');
const uBirth = ref('----/--/--');
const uPassword = ref('');
const uPasswordShow = ref(false);

function toglePasswordShow() {
  uPasswordShow.value = !uPasswordShow.value;
}

function regUser() {
  console.log('regUser');
  console.log('uName', uName.value);
  console.log('uEmail', uEmail.value);
  console.log('uBirth', uBirth.value);
  console.log('uPassword', uPassword.value);
}
</script>
