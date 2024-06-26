<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import http from '@/plugins/axios'
import { router } from '@/router/router'

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

const direccionEnvio = ref('')
const cantidad = ref(1)
const total = ref('')
const metodoPago = ref('')
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
  <div class="container" style="margin-top: 50px">
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
      <table>
        <tr>
          <td>Nombre:</td>
          <td>{{ nombre }}</td>
        </tr>
        <tr>
          <td>Descripción:</td>
          <td>{{ descripcion }}</td>
        </tr>
        <tr>
          <td>Marca:</td>
          <td>{{ marca }}</td>
        </tr>
        <tr>
          <td>Modelo:</td>
          <td>{{ modelo }}</td>
        </tr>
        <tr>
          <td>Precio:</td>
          <td>{{ precioCelu }}</td>
        </tr>
        <tr>
          <td>Color:</td>
          <td>{{ color }}</td>
        </tr>
        <tr>
          <td>Categoria:</td>
          <td>{{ categoria }}</td>
        </tr>
      </table>
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
          <label for="direccionEnvio"
            >Cantidad
            <input type="number" step="1" v-model="cantidad" min="1" />
          </label>
        </div>

        <div class="form-floating mb-3">
          <select class="form-control" v-model="metodoPago" required>
            <option value="" disabled selected>Selecciona un metodo de pago</option>
            <option value="targeta de credito">Targeta de credito</option>
            <option value="paypal">Paypal</option>
            <option value="qr">QR</option>
          </select>
          <label for="color">Metodo de pago</label>
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
            <font-awesome-icon icon="fa-solid fa-save" /> Comprar
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
