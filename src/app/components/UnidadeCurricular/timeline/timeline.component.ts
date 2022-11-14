import { Component, OnInit } from '@angular/core'
import { PrimeIcons } from 'primeng/api'
import { catchError, delay, Observable, of } from 'rxjs'

import { UnidadeCurricular } from '../../../models/UnidadeCurricular'
import { UnidadeCurricularService } from '../../../services/unidade-curricular.service'
import { AlertService } from '../../../shared/alerts/alert.service'

@Component({
  selector: 'app-timeline-curso',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineCursoComponent implements OnInit {
  events: {}[] = []
  unidadeCurricular$: Observable<UnidadeCurricular[]> | null = null
  icon: any = PrimeIcons.SHOPPING_CART
  color: '#9C27B0'
  PrimeIcons: PrimeIcons

  constructor(private unidadeCurricularService: UnidadeCurricularService, private _alert: AlertService) {
    this.onRefresh()
  }

  ngOnInit(): void {
    this.events = [
      {
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: PrimeIcons.SHOPPING_CART,
        color: '#9C27B0',
        image: 'game-controller.jpg',
      },
      { status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B' },
    ]
  }

  onRefresh = () => {
    this.unidadeCurricular$ = this.unidadeCurricularService.ObterTodas().pipe(
      delay(1000),
      catchError((error) => {
        // this._alert.onError(JSON.stringify(error));
        this._alert.onError();
        return of([])
      }),
    )
  };

  onDetail = () => {

  };
}