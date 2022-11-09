import { CursoTiposService } from 'src/app/services/curso-tipos.service'
import { TestBed } from '@angular/core/testing'

describe('CursoTiposService', () => {
  let service: CursoTiposService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CursoTiposService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
