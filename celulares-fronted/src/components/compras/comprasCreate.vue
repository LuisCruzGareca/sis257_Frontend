<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import { router } from '@/router/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const direccionEnvio = ref('')
const total = ref('')
const idCelular = router.currentRoute.value.params['idCelu']

async function getCelular() {
  await http.get(`celulares/${idCelular}`).then((response) => {
    total.value = 'TOTAL: ' + response.data.precio + ' bs'
  })
}

async function comprar() {
  const response = await http.post(ENDPOINT, {
    direccionEnvio: direccionEnvio.value,
    idCelular: idCelular
  })
  if (response.data.message) {
    alert(response.data.message)
  } else {
    router.push('/compras')
  }
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getCelular()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/colores">Compras</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Comprar</h2>
    </div>

    <div class="row">
      <form @submit.prevent="comprar">
        <div class="form-floating mb-3">
          <textarea
            class="form-control"
            v-model="direccionEnvio"
            placeholder="Dirección de envio"
            required
          ></textarea>
          <label for="direccionEnvio">Direccion de envio</label>
        </div>
        <div class="text-center mt-3">
          <label
            style="
              float: left;
              font-size: 20px;
              color: white;
              text-decoration: underline;
              font-weight: bold;
            "
            >{{ total }}</label
          >
          <button type="submit" class="btn btn-primary btn-lg" style="float: right">
            <font-awesome-icon icon="fa-solid fa-save" /> Crear
          </button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>
