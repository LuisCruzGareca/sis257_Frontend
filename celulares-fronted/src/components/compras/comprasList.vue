<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import { router } from '@/router/router'
import type { Compras } from '@/models/Compras'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var compra = ref<Compras[]>([])

async function getCompras() {
  compra.value = await http.get(ENDPOINT).then((response) => response.data)
}

onMounted(() => {
  getCompras()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Compras</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Compras</h2>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Usuario</th>
            <th scope="col">Celular</th>
            <th scope="col">Direccion Envio</th>
            <th scope="col">total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(compras, index) in compra.values()" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ compras.usuario }}</td>
            <td>{{ compras.celular }}</td>
            <td>{{ compras.direccionEnvio }}</td>
            <td>{{ compras.total }} bs</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
