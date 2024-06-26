<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import { router } from '@/router/router'
import type { Celulares } from '@/models/Celulares'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const celular = ref<Celulares[]>([])

async function getCelulares() {
  celular.value = await http.get('/celulares').then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/celulares/editar/${id}`)
}

async function toDelete(id: number) {
  const r = confirm('¿Está seguro que desea eliminar el celular?')
  if (r) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getCelulares())
  }
}

function toComprar(idCelu: number) {
  router.push(`/compras/crear/${idCelu}`)
}

onMounted(() => {
  getCelulares()
})
</script>

<template>
  <div class="container mt-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Celulares</li>
      </ol>
    </nav>

    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>Lista de Celulares</h2>
      <RouterLink to="/celulares/crear" class="btn btn-primary">
        <i class="fas fa-plus"></i> Crear Nuevo
      </RouterLink>
    </div>

    <div class="table-container">
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <caption>
            Lista de Celulares
          </caption>
          <thead class="thead-light">
            <tr>
              <th scope="col">N°</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Marca</th>
              <th scope="col">Modelo</th>
              <th scope="col">Stock</th>
              <th scope="col">Precio</th>
              <th scope="col">Color</th>
              <th scope="col">Categoría</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(celular, index) in celular" :key="celular.id">
              <td>{{ index + 1 }}</td>
              <td>{{ celular.nombre }}</td>
              <td>{{ celular.descripcion }}</td>
              <td>{{ celular.marca }}</td>
              <td>{{ celular.modelo }}</td>
              <td>{{ celular.stock }}</td>
              <td>{{ celular.precio }}</td>
              <td>{{ celular.color }}</td>
              <td>{{ celular.categoria }}</td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-sm btn-primary me-2" @click="toEdit(celular.id)">
                    <i class="fas fa-edit"></i> Editar
                  </button>
                  <button class="btn btn-sm btn-danger me-2" @click="toDelete(celular.id)">
                    <i class="fas fa-trash"></i> Eliminar
                  </button>
                  <button class="btn btn-sm btn-success" @click="toComprar(celular.id)">
                    <i class="fas fa-shopping-cart"></i> Comprar
                  </button>
                </div>
              </td>
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

.btn-group .btn {
  display: flex;
  align-items: center;
}

.btn .fas {
  margin-right: 5px;
}

.h2 {
  color: white;
  background-color: black;
}
</style>
