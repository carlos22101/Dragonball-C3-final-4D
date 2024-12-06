import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NombreInputComponent } from './login/nombre-input/nombre-input.component';
import { DashboardComponent } from './inicio/dashboard/dashboard.component';
import { CharacterTransformationsComponent } from './inicio/character-transformations/character-transformations.component';

const routes: Routes = [
  { path: '', redirectTo: '/nombre', pathMatch: 'full' },
   { path: 'nombre', component: NombreInputComponent },
   {path : "Dashboard" , component : DashboardComponent},
   { path: 'transformations/:id', component: CharacterTransformationsComponent }, 


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
