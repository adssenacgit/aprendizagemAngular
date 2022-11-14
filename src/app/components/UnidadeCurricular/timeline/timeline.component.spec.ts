import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TimelineCursoComponent } from './timeline.component'

describe('TimelineCursoComponent', () => {
  let component: TimelineCursoComponent
  let fixture: ComponentFixture<TimelineCursoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineCursoComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TimelineCursoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
