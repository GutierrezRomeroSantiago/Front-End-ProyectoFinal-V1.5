import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPedidoComponent } from './components/crear-pedido/crear-pedido.component';
import { ListarPedidoComponent } from './components/listar-pedido/listar-pedido.component';
import { ListarPrendaComponent } from './components/listar-prenda/listar-prenda.component';

const routes: Routes = [
  { path: '', component: ListarPedidoComponent},
  { path: 'crearped', component: CrearPedidoComponent},
  {path: 'listarprend/:id', component: ListarPrendaComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
