import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharacterTransformationsComponent } from './character-transformations/character-transformations.component';
import { FormsModule } from '@angular/forms';
import { PlanetModalComponent } from './planet-modal/planet-modal.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CharacterTransformationsComponent,
    PlanetModalComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    FormsModule
  ]
})
export class InicioModule { }
