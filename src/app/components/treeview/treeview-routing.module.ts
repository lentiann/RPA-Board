import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeviewComponent } from './treeview.component';

const routes: Routes = [
  { path: 'Treeview', component: TreeviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeviewRoutingModule { }
