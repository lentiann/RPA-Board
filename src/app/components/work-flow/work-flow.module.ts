import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { WorkFlowRoutingModule } from './work-flow-routing.module';
import { WorkFlowComponent } from './work-flow.component';
import { TreeviewtestComponent } from './treeviewtest/treeviewtest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ToolbarwfComponent } from './toolbarwf/toolbarwf.component';

@NgModule({
  imports: [
    CommonModule,
    WorkFlowRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    TreeViewModule
  ],
  declarations: [WorkFlowComponent, TreeviewtestComponent, ToolbarwfComponent],
  exports: [WorkFlowComponent]
})
export class WorkFlowModule { }
