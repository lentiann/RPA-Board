import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestGenerationComponent } from './test-generation.component';

const routes: Routes = [
  { path: 'TestGeneration', component: TestGenerationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestGenerationRoutingModule { }
