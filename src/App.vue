<template>
  <router-view />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { RulesUtils } from './utils/rules';

const { t } = useI18n();

RulesUtils.getInstance({ translateFunc: t });
</script>
