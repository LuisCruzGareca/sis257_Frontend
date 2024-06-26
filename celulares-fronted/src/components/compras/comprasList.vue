<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import { router } from '@/router/router'
import type { Compras } from '@/models/Compras'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const compra = ref<Compras[]>([])

async function getCompras() {
  compra.value = await http.get(ENDPOINT).then((response) => response.data)
}

onMounted(() => {
  getCompras()
})
</script>

<template>
  <div class="container mt-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Compras</li>
      </ol>
    </nav>

    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>Lista de Compras</h2>
    </div>

    <div class="table-container">
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead class="thead-light">
            <tr>
              <th scope="col">N°</th>
              <th scope="col">Usuario</th>
              <th scope="col">Celular</th>
              <th scope="col">Dirección Envío</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Metodo de pago</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(compras, index) in compra" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ compras.usuario }}</td>
              <td>{{ compras.celular }}</td>
              <td>{{ compras.direccionEnvio }}</td>
              <td>{{ compras.cantidad }}</td>
              <td>{{ compras.metodoPago }}</td>
              <td>{{ compras.total }} bs</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table {
  margin-bottom: 0;
}

.table-hover tbody tr:hover {
  background-color: rgba(240, 243, 243, 0.2);
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(125, 188, 201, 0.1);
}

.caption {
  color: white;
}
</style>
