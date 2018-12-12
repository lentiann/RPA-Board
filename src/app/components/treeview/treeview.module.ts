import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { TreeviewRoutingModule } from './treeview-routing.module';
import { TreeviewComponent } from './treeview.component';

@NgModule({
  imports: [
    CommonModule,
    TreeviewRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    TreeViewModule
  ],
  declarations: [TreeviewComponent],
  exports: [TreeviewComponent]
})
export class TreeviewModule { }
