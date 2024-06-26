import type { Usuario } from './Usuario'
export interface Compras {
  direccionEnvio: string
  total: number
  usuario: string
  celular: string
  cantidad: number
  metodoPago: string
}
