<!-- aqui es donde se cargan las vistas de router y router linck -->
<script setup lang="ts">
import { router } from '@/router/router'
if (!localStorage.getItem('token')) {
  router.push('/')
}
</script>

<template>
  <RouterView ENDPOINT_API="usuarios"></RouterView>
</template>
