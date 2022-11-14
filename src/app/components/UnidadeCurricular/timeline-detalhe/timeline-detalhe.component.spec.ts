import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineDetalheComponent } from './timeline-detalhe.component';

describe('TimelineDetalheComponent', () => {
  let component: TimelineDetalheComponent;
  let fixture: ComponentFixture<TimelineDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
