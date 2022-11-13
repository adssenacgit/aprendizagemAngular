import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TimelineModule } from 'primeng/timeline'
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'

@NgModule({
  declarations: [],
  imports: [CommonModule, TimelineModule, CardModule, ButtonModule],
  exports: [TimelineModule, CardModule, ButtonModule],
})
export class PrimengModule {}
