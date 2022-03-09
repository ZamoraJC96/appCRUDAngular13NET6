import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoComponent } from './auto/auto.component';
import { MostrarAutoComponent } from './auto/mostrar-auto/mostrar-auto.component';
import { AgregarEditarAutoComponent } from './auto/agregar-editar-auto/agregar-editar-auto.component';
import { AutosApiService } from './autos-api.service';

@NgModule({
  declarations: [
    AppComponent,
    AutoComponent,
    MostrarAutoComponent,
    AgregarEditarAutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AutosApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
