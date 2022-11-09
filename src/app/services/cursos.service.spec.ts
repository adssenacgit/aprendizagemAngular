import { CursosService } from 'src/app/services/cursos.service'
import { TestBed } from '@angular/core/testing'

describe('CursosService', () => {
  let service: CursosService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CursosService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
