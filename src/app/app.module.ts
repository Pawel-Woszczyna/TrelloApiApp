import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { httpInterceptorProviders } from './interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialExampleModule} from '../material_module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialExampleModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
    DragDropModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule {}
