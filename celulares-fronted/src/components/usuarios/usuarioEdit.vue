<script setup lang="ts">
import http from '@/plugins/axios'
import { router } from '@/router/router'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const email = ref('')
const password = ref('')
const id = router.currentRoute.value.params['id']

async function editarUsuarios() {
  await http
    .patch(`${ENDPOINT}/${id}`, { email: email.value, password: password.value })
    .then(() => router.push('/usuarios'))
}

async function getUsuarios() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    ;(email.value = response.data.email), (password.value = response.data.password)
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getUsuarios()
})
</script>

<template>
  <div class="container">
    <div class="container mt-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
          <li class="breadcrumb-item">
            <RouterLink to="/usuarios">Usuarios</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Editar</li>
        </ol>
      </nav>

      <div class="row">
        <h2>Editar Usuarios</h2>
      </div>

      <div class="row">
        <form @submit.prevent="editarUsuarios">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" v-model="email" placeholder="Email" required />
            <label for="email">Email</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              v-model="password"
              placeholder="Password"
              required
            />
            <label for="password">Password</label>
          </div>
          <div class="text-center mt-3">
            <button type="submit" class="btn btn-primary btn-lg">
              <font-awesome-icon icon="fa-solid fa-save" /> Guardar
            </button>
          </div>
        </form>
      </div>
      <div class="text-left">
        <button class="btn btn-link" @click="goBack">Volver</button>
      </div>
    </div>
  </div>
</template>

<style></style>
