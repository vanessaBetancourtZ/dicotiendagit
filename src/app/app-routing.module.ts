import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearDiscoComponent } from './components/crear-disco/crear-disco.component';


//componentes disco 
import { ListarDiscoComponent } from './components/listar-disco/listar-disco.component';
import { VerDiscoComponent } from './components/ver-disco/ver-disco.component';


//ruta
const routes: Routes = [
{path: '', component: ListarDiscoComponent},
{path: 'crear-disco', component: CrearDiscoComponent},
{path: 'editar-disco/:id', component: CrearDiscoComponent},
{path: 'ver-disco', component: VerDiscoComponent},
{path: '**', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
