import { UnidadeCurricularService } from './../../../services/unidade-curricular.service'
import { Observable } from 'rxjs'
import { UnidadeCurricular } from './../../../models/UnidadeCurricular'
import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { PrimeIcons } from 'primeng/api'

@Component({
  selector: 'app-timeline-detalhe',
  templateUrl: './timeline-detalhe.component.html',
  styleUrls: ['./timeline-detalhe.component.css'],
})
export class TimelineDetalheComponent implements OnInit {
  unidadeCurricular: UnidadeCurricular | undefined;
  unidadesCurriculares: UnidadeCurricular[] = []
  // unidadesCurriculares$: Observable<UnidadeCurricular[]>
  events: {}[]= [];

  constructor(private _route: ActivatedRoute, private unidadeCurricularService: UnidadeCurricularService) {
  }

  ngOnInit(): void {
    this.unidadeCurricularService.ObterTodas().subscribe((data) => {
      this.unidadesCurriculares = data
      // First get the product id from the current route.
      const routeParams = this._route.snapshot.paramMap
      const unidadeCuricularIdFromRoute = Number(routeParams.get('id'))
      
      // Find the product that correspond with the id provided in route.
      this.unidadeCurricular = this.unidadesCurriculares.find((data) => data.id === unidadeCuricularIdFromRoute)
    }); 
  }
}
