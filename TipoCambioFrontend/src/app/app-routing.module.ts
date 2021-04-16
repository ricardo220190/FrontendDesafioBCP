import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiosComponent } from './components/cambios/cambios.component';

const routes: Routes = [
  {path: '', pathMatch: 'full',redirectTo: 'cambios'},
  {path: 'cambios',component: CambiosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
