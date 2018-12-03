import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataManagementRoutingModule } from './data-management-routing.module';
import { DataManagementComponent } from './data-management.component';

@NgModule({
  imports: [
    CommonModule,
    DataManagementRoutingModule
  ],
  declarations: [ DataManagementComponent ],
  exports: [ DataManagementComponent ],
})
export class DataManagementModule { }
