import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { UsadosComponent } from './usados/usados.component';
import { ImportadosComponent } from './importados/importados.component';
import { LonuevoComponent } from './lonuevo/lonuevo.component';

const routes: Routes = [
 
  { path: 'body', component: BodyComponent },
  { path: 'usado', component: UsadosComponent },
  { path: 'importado', component: ImportadosComponent },
  { path: 'lonuevo', component: LonuevoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'body'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
