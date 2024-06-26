import { defineStore } from 'pinia'

import http from '@/plugins/axios'
import { router } from '@/router/router'
import { getTokenFromLocalStorage } from '@/helpers/index'

const useAuthStore = defineStore('auth', {
  state: () => ({
    user: localStorage.getItem('user') || '',
    token: getTokenFromLocalStorage(),
    returnUrl: null || ''
  }),
  getters: {},
  actions: {
    async login(usuario: string, clave: string) {
      await http
        .post('auth/login', {
          email: usuario,
          password: clave
        })
        .then((response) => {
          this.user = response.data.usuario
          this.token = response.data.access_token

          localStorage.setItem('user', this.user || '')
          localStorage.setItem('token', this.token || '') //el token lo devuelve el jwt del nest y lo guardamos en el localstorage para meterselo a cada peticion al nest y que asi sepa que nos hemos logeado

          router.push('/celulares')
        })
    },
    logout() {
      localStorage.clear()
      this.$reset()
      router.push('login')
    }
  }
})

export { useAuthStore }
