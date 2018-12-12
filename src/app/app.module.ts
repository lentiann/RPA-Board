import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkFlowModule } from './components/work-flow/work-flow.module';
import { DataManagementModule } from './components/data-management/data-management.module';
import { TestGenerationModule } from './components/test-generation/test-generation.module';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeviewModule } from './components/treeview/treeview.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WorkFlowModule,
    DataManagementModule,
    TestGenerationModule,
    TreeViewModule,
    BrowserAnimationsModule,
    TreeviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
