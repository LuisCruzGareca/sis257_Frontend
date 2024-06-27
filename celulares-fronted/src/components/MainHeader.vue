<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/index'
const authStore = useAuthStore()
const location = useRoute()
</script>

<template>
  <header class="site-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-12 d-flex flex-wrap">
          <p class="d-flex me-4 mb-0">
            <i class="bi-person custom-icon me-2"></i>
            <strong class="text-dark">Bienvenido a Celulares Apple</strong>
          </p>
        </div>
      </div>
    </div>
  </header>

  <nav
    class="navbar navbar-expand-lg"
    :style="'background-color: ' + (location.path != '/' ? 'rgba(25, 46, 61, 0.9)' : '')"
  >
    <div class="container">
      <RouterLink to="/" class="navbar-brand">Celulares Apple</RouterLink>

      <RouterLink v-if="!authStore.token" to="/login" class="btn custom-btn d-lg-none ms-auto me-4"
        >Iniciar Sesión</RouterLink
      >
      <a v-else @click="authStore.logout()" class="btn custom-btn d-lg-none ms-auto me-4">Salir</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav align-items-lg-center ms-auto me-lg-5">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link click-scroll">Inicio</RouterLink>
          </li>

          <slot v-if="authStore.token">
            <li class="nav-item">
              <RouterLink to="/usuarios" class="nav-link click-scroll">Usuario</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/Celulares" class="nav-link click-scroll">Celulares</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/colores" class="nav-link click-scroll">Colores</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/categorias" class="nav-link click-scroll">categoria</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/Compras" class="nav-link click-scroll">Compras</RouterLink>
            </li>
            <li class="nav-item">
              <a class="nav-link click-scroll"> {{ authStore.user }}</a>
            </li>
          </slot>
        </ul>

        <RouterLink v-if="!authStore.token" to="/login" class="btn custom-btn d-lg-block d-none"
          >Iniciar Sesión</RouterLink
        >
        <a v-else @click="authStore.logout()" class="btn custom-btn d-lg-block d-none">SALIR</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand {
  font-size: 1.5rem;
}
.custom-btn {
  background-color: #007bff;
  color: white;
}
</style>
