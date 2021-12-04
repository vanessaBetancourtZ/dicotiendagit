import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearDiscoComponent } from './components/crear-disco/crear-disco.component';
import { ListarDiscoComponent } from './components/listar-disco/listar-disco.component';
import { VerDiscoComponent } from './components/ver-disco/ver-disco.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearDiscoComponent,
    ListarDiscoComponent,
    VerDiscoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
