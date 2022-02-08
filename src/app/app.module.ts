import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPedidoComponent } from './components/listar-pedido/listar-pedido.component';
import { CrearPedidoComponent } from './components/crear-pedido/crear-pedido.component';
import { ListarPrendaComponent } from './components/listar-prenda/listar-prenda.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarPedidoComponent,
    CrearPedidoComponent,
    ListarPrendaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
