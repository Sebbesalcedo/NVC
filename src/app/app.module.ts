import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { NgprimeModule } from "./ngprime.module";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './components/listado-peliculas/listado-peliculas.component';
import { NavegadorComponent } from './components/navegador/navegador.component';



import {MovieService} from'./client.service';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
     ListadoPeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgprimeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule  
  ],
  providers: [MovieService],
  exports: [MaterialModule, NgprimeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
