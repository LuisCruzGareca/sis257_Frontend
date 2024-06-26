<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import type { Usuario } from '@/models/Usuario'
import { router } from '@/router/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const usuarios = ref<Usuario[]>([])

async function getUsuarios() {
  usuarios.value = await http.get('/usuarios').then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/usuarios/editar/${id}`)
}

async function toDelete(id: number) {
  const r = confirm('¿Está seguro que se desea eliminar el usuario?')
  if (r) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getUsuarios())
  }
}

onMounted(() => {
  getUsuarios()
})
</script>

<template>
  <div class="container mt-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Usuarios</li>
      </ol>
    </nav>

    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>Lista de Usuarios</h2>
      <RouterLink to="/usuarios/crear" class="btn btn-primary">
        <i class="fas fa-plus"></i> Crear Nuevo
      </RouterLink>
    </div>

    <div class="table-container">
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <caption>
            Lista de Usuarios
          </caption>
          <thead class="thead-light">
            <tr>
              <th scope="col">N°</th>
              <th scope="col">Email</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(usuario, index) in usuarios" :key="usuario.id">
              <td>{{ index + 1 }}</td>
              <td>{{ usuario.email }}</td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-sm btn-primary me-2" @click="toEdit(usuario.id)">
                    <i class="fas fa-edit"></i> Editar
                  </button>
                  <button class="btn btn-sm btn-danger" @click="toDelete(usuario.id)">
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
</style>
