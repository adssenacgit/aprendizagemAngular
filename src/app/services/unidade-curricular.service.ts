import { Periodo } from './../models/Periodo'
import { Oferta } from './../models/Oferta'
import { Modulo } from './../models/Modulo'
import { UnidadeCurricular } from './../models/UnidadeCurricular'
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Curso } from '../models/Curso'
import { Usuario } from '../models/Usuario'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('TokenUsuarioLogado')}`,
  }),
}

@Injectable({
  providedIn: 'root',
})
export class UnidadeCurricularService {
  url: string = environment.apiServer + 'api/UnidadeCurricular'

  constructor(private https: HttpClient) {}

  ObterTodas(): Observable<UnidadeCurricular[]> {
    return this.https.get<UnidadeCurricular[]>(this.url)
  }

  ObterUnidadeCurricularById(unidadeCurricularId: UnidadeCurricular['id']): Observable<UnidadeCurricular> {
    const apiUrl = `${this.url}/${unidadeCurricularId}`
    return this.https.get<UnidadeCurricular>(apiUrl)
  }

  NovaUnidadeCurricular(unidadeCurricular: UnidadeCurricular): Observable<any> {
    return this.https.post<UnidadeCurricular>(this.url, unidadeCurricular, httpOptions)
  }

  AtualizarUnidadeCurricular(
    unidadeCurricularId: UnidadeCurricular['id'],
    unidadeCurricular: UnidadeCurricular,
  ): Observable<any> {
    const apiUrl = `${this.url}/${unidadeCurricularId}`
    return this.https.put<UnidadeCurricular>(apiUrl, unidadeCurricular, httpOptions)
  }

  ExcluirUnidadeCurricular(unidadeCurricularId: UnidadeCurricular['id']): Observable<any> {
    const apiUrl = `${this.url}/${unidadeCurricularId}`
    debugger
    return this.https.delete<UnidadeCurricular>(apiUrl, httpOptions)
  }

  FiltrarUnidadeCurricularByOferta(ofertaId: Oferta['id']): Observable<UnidadeCurricular[]> {
    const apiUrl = `${this.url}/filterByOferta/${ofertaId}`
    return this.https.get<UnidadeCurricular[]>(apiUrl)
  }

  FiltrarUnidadeCurricularByModulo(moduloId: Modulo['id']): Observable<UnidadeCurricular[]> {
    const apiUrl = `${this.url}/filterByModulo/${moduloId}`
    return this.https.get<UnidadeCurricular[]>(apiUrl)
  }

  FiltrarUnidadeCurricularByUsuario(
    usuarioCpf: Usuario['cpf'],
    periodoId: Periodo['id'],
  ): Observable<UnidadeCurricular[]> {
    const apiUrl = `${this.url}/filterByUsuario/${usuarioCpf}/${periodoId}`
    return this.https.get<UnidadeCurricular[]>(apiUrl)
  }

  FiltrarUnidadeCurricular(
    unidadeCurricularId: UnidadeCurricular['id'],
    nomeUnidadeCurricular: UnidadeCurricular['nome'],
  ): Observable<UnidadeCurricular[]> {
    const apiUrl = `${this.url}/FiltrarUnidadesCurriculares/${unidadeCurricularId}/${nomeUnidadeCurricular}`
    return this.https.get<UnidadeCurricular[]>(apiUrl)
  }
}
