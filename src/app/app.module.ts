import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkFlowModule } from './components/work-flow/work-flow.module';
import { DataManagementModule } from './components/data-management/data-management.module';
import { TestGenerationModule } from './components/test-generation/test-generation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WorkFlowModule,
    DataManagementModule,
    TestGenerationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
