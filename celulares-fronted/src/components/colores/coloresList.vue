<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import type { Colores } from '@/models/Colores'
import { router } from '@/router/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const colors = ref<Colores[]>([])

async function getColors() {
  colors.value = await http.get(`/colores`).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/colores/editar/${id}`)
}

async function toDelete(id: number) {
  const r = confirm('¿Está seguro que se desea eliminar el color?')
  if (r) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getColors())
  }
}

onMounted(() => {
  getColors()
})
</script>

<template>
  <div class="container mt-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Colores</li>
      </ol>
    </nav>

    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>Lista de Colores</h2>
      <RouterLink to="/colores/crear" class="btn btn-primary">
        <i class="fas fa-plus"></i> Crear Nuevo
      </RouterLink>
    </div>

    <div class="table-container">
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <caption>
            Lista de Colores
          </caption>
          <thead class="thead-light">
            <tr>
              <th scope="col">N°</th>
              <th scope="col">Nombre</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(color, index) in colors" :key="color.id">
              <td>{{ index + 1 }}</td>
              <td>{{ color.nombre }}</td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-sm btn-primary me-2" @click="toEdit(color.id)">
                    <i class="fas fa-edit"></i> Editar
                  </button>
                  <button class="btn btn-sm btn-danger" @click="toDelete(color.id)">
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
