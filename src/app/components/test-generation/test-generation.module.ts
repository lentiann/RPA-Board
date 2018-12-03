import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestGenerationRoutingModule } from './test-generation-routing.module';
import { TestGenerationComponent } from './test-generation.component';

@NgModule({
  imports: [
    CommonModule,
    TestGenerationRoutingModule
  ],
  declarations: [ TestGenerationComponent ],
  exports: [ TestGenerationComponent ]
})
export class TestGenerationModule { }
