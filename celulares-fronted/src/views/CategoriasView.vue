<script setup lang="ts">
import { router } from '@/router/router'
if (!localStorage.getItem('token')) {
  router.push('/')
}
</script>

<template>
  <RouterView ENDPOINT_API="categorias"></RouterView>
</template>
