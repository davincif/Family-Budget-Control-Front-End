<template>
  <router-view />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { initRules } from './utils/rules';

const { t } = useI18n();

initRules(t);
</script>
