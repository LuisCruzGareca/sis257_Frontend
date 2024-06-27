<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import http from '@/plugins/axios'
import image9 from '@/assets/images/9.jpg'

import { useRouter } from 'vue-router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
let nombre = ''
let descripcion = ''
let marca = ''
let modelo = ''
let precioCelu = ''
let color = ''
let categoria = ''
let imageUrl = '' // Variable para almacenar la URL de la imagen del celular

const direccionEnvio = ref('')
const cantidad = ref(1)
const total = ref('')
const metodoPago = ref('')
const router = useRouter()
const idCelular = router.currentRoute.value.params['idCelu']
let precio = 0

async function getCelular() {
  await http.get(`celulares/${idCelular}`).then((response) => {
    precio = response.data.precio
    nombre = response.data.nombre
    descripcion = response.data.descripcion
    marca = response.data.marca
    modelo = response.data.modelo
    precioCelu = response.data.precio + ' bs'
    color = response.data.nombreColor
    categoria = response.data.nombreCategoria
    imageUrl = response.data.imageUrl // Asigna la URL de la imagen

    total.value = 'TOTAL: ' + precio + ' bs'
  })
}

async function comprar() {
  const response = await http.post(ENDPOINT, {
    direccionEnvio: direccionEnvio.value,
    idCelular: idCelular,
    cantidad: cantidad.value,
    metodoPago: metodoPago.value
  })
  if (response.data.message) {
    alert(response.data.message)
  } else {
    router.push('/compras')
  }
}

function calcularTotal() {
  total.value = 'TOTAL: ' + precio * cantidad.value + ' bs'
}

watch(cantidad, calcularTotal)

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getCelular()
})
</script>

<template>
  <div class="container mt-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item"><RouterLink to="/colores">Compras</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Comprar</li>
      </ol>
    </nav>

    <div class="row mb-4">
      <div class="col">
        <h2>Detalles de la Compra</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <img
          :src="image9"
          alt="Imagen del celular"
          class="custom-image img-fluid"
          id="imagen_celu"
        />
      </div>
      <div class="col-md-6">
        <tbody>
          <tr>
            <td class="tdh">{{ nombre }}</td>
          </tr>
          <tr>
            <td>{{ descripcion }}</td>
          </tr>

          <tr>
            <td>{{ precioCelu }}</td>
          </tr>
          <tr>
            <td>{{ color }}</td>
          </tr>
          <tr>
            <td>{{ categoria }}</td>
          </tr>
        </tbody>

        <form @submit.prevent="comprar">
          <div class="form-floating mb-3">
            <textarea
              class="form-control"
              v-model="direccionEnvio"
              placeholder="Dirección de envio"
              required
            ></textarea>
            <label for="direccionEnvio">Dirección de envio</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="number"
              step="1"
              v-model="cantidad"
              min="1"
              class="form-control"
              required
            />
            <label for="cantidad">Cantidad</label>
          </div>

          <div class="form-floating mb-3">
            <select class="form-control" v-model="metodoPago" required>
              <option value="" disabled selected>Selecciona un metodo de pago</option>
              <option value="tarjeta de credito">Tarjeta de credito</option>
              <option value="paypal">Paypal</option>
              <option value="qr">QR</option>
            </select>
            <label for="metodoPago">Metodo de pago</label>
          </div>

          <div class="text-center mt-3 mb-3">
            <span class="d-block mb-2" style="font-size: 20px; font-weight: bold">{{ total }}</span>
            <button type="submit" class="btn btn-primary btn-lg">
              <font-awesome-icon icon="fa-solid fa-save" /> Comprar
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="text-left mt-3">
      <button class="btn btn-link" style="background-color: rgba(25, 46, 61, 0.9)" @click="goBack">
        Volver
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Estilo para la imagen */
.img-fluid {
  max-width: 100%;
  height: auto;
  width: 70%;
}
.img-fluid {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border-radius: 50px;
}
tbody,
td,
tfoot,
th,
thead,
tr {
  border-color: inherit;
  color: white;
  border-style: solid;
  border-width: 0;
  text-align: center;
  font-size: 30px;
}

.tdh {
  font-size: 50px;
  text-align: center;
}
</style>
