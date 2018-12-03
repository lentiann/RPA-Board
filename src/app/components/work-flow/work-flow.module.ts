import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkFlowRoutingModule } from './work-flow-routing.module';
import { WorkFlowComponent } from './work-flow.component';

@NgModule({
  imports: [
    CommonModule,
    WorkFlowRoutingModule
  ],
  declarations: [ WorkFlowComponent ],
  exports: [ WorkFlowComponent ]
})
export class WorkFlowModule { }
