<script setup lang="ts">
if (!localStorage.getItem('token')) {
  router.push('/')
}
</script>

<template>
  <RouterView ENDPOINT_API="celulares"></RouterView>
</template>
