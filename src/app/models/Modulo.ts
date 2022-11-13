import { Oferta } from './Oferta'

export class Modulo {
  id: number
  descricao: string
  cargaHoraria: number
  ofertaId: Oferta['id']
  oferta: Oferta
}
