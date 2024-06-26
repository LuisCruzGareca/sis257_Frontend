<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import { router } from '@/router/router'
import type { Categorias } from '@/models/Categorias'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const categoria = ref<Categorias[]>([])

async function getCategorias() {
  categoria.value = await http.get('/categorias').then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/categorias/editar/${id}`)
}

async function toDelete(id: number) {
  const r = confirm('¿Está seguro que se desea eliminar la categoría?')
  if (r) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getCategorias())
  }
}

onMounted(() => {
  getCategorias()
})
</script>

<template>
  <div class="container mt-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Categorías</li>
      </ol>
    </nav>

    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>Lista de Categorías</h2>
      <RouterLink to="/categorias/crear" class="btn btn-primary">
        <i class="fas fa-plus"></i> Crear Nuevo
      </RouterLink>
    </div>

    <div class="table-container">
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <caption>
            Lista de Categorías
          </caption>
          <thead class="thead-light">
            <tr>
              <th scope="col">N°</th>
              <th scope="col">Descripción</th>
              <th scope="col">Nombre</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(categoria, index) in categoria" :key="categoria.id">
              <td>{{ index + 1 }}</td>
              <td>{{ categoria.descripcion }}</td>
              <td>{{ categoria.nombre }}</td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-sm btn-primary me-2" @click="toEdit(categoria.id)">
                    <i class="fas fa-edit"></i> Editar
                  </button>
                  <button class="btn btn-sm btn-danger" @click="toDelete(categoria.id)">
                    <i class="fas fa-trash"></i> Eliminar
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
