import { Usuario } from './Usuario'

export class SenacCoin {
  id: number
  saldo: number
  status: number
  usuarioId: Usuario['id']
  usuario: Usuario
}
