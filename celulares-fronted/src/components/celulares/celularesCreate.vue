<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import { router } from '@/router/router'
import type { Colores } from '@/models/Colores'
import type { Categorias } from '@/models/Categorias'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const nombre = ref('')
const descripcion = ref('')
const marca = ref('')
const modelo = ref('')
const precio = ref('')
const stock = ref('')
const categoria = ref('')
const color = ref('')

var colores = ref<Colores[]>([])

async function getColores() {
  colores.value = await http.get(`/colores`).then((response) => response.data)
}

var categorias = ref<Categorias[]>([])

async function getCategorias() {
  categorias.value = await http.get(`/categorias`).then((response) => response.data)
}

async function crearCelular() {
  try {
    const response = await http
      .post(ENDPOINT, {
        nombre: nombre.value,
        descripcion: descripcion.value,
        marca: marca.value,
        modelo: modelo.value,
        precio: parseFloat(precio.value),
        stock: parseInt(stock.value),
        categoria: parseInt(categoria.value),
        color: parseInt(color.value)
      })
      .then(() => router.push('/celulares'))
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      const validationErrors = error.response.data.message
      alert(validationErrors.join('\n'))
    }
  }
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getColores()
  getCategorias()
})
</script>

<template>
  <div class="container mt-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/celulares">Celulares</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2 style="color: white">Crear Nuevo Celular</h2>
    </div>

    <div class="table-container">
      <form @submit.prevent="crearCelular">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="nombre" placeholder="Nombre" required />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <textarea
            type="text"
            class="form-control"
            v-model="descripcion"
            placeholder="Descripción"
            required
          ></textarea>
          <label for="descripcion">Descripción</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="marca" placeholder="Marca" required />
          <label for="marca">Marca</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="modelo" placeholder="Modelo" required />
          <label for="modelo">Modelo</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            v-model="precio"
            placeholder="Precio"
            required
          />
          <label for="precio">Precio</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" v-model="stock" placeholder="Stock" required />
          <label for="stock">Stock</label>
        </div>
        <div class="form-floating mb-3">
          <select class="form-control" v-model="categoria" required>
            <option value="" disabled selected>Selecciona una categoría</option>
            <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">
              {{ categoria.nombre }}
            </option>
          </select>
          <label for="categoria">Categoría</label>
        </div>
        <div class="form-floating mb-3">
          <select class="form-control" v-model="color" required>
            <option value="" disabled selected>Selecciona un color</option>
            <option v-for="color in colores" :key="color.id" :value="color.id">
              {{ color.nombre }}
            </option>
          </select>
          <label for="color">Color</label>
        </div>

        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <i class="fas fa-save"></i> Crear
          </button>
        </div>
      </form>
      <div class="text-left mt-3">
        <button class="btn btn-link" @click="goBack">Volver</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-floating label {
  color: #7dbcc9;
}

.btn-primary {
  background-color: #7dbcc9;
  border-color: #7dbcc9;
}

.btn-primary .fas {
  margin-right: 5px;
}

.btn-link {
  color: #7dbcc9;
}

.breadcrumb-item.active {
  color: #7dbcc9;
}
</style>
