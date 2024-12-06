import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Character, Planet } from '../../models/character';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  characters: Character[] = []; // Debe ser un array
  selectedTransformations: any[] = [];
  selectedPlanet: Planet | null = null; // Planeta seleccionado

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data; // Ahora `data` ya es un array
        console.log('Characters loaded:', this.characters); // Verifica que sea un array
      },
      error: (error) => console.error('There was an error!', error)
    });
  }

  showTransformations(characterId: number): void {
    console.log('Button clicked, characterId:', characterId); // Verifica que el ID sea correcto
    this.apiService.getCharacterById(characterId.toString()).subscribe({
      next: (data) => {
        console.log('Character Data:', data); // Verifica que los datos se reciban
        this.selectedTransformations = data.transformations || [];
        console.log('Transformations:', this.selectedTransformations); // Verifica las transformaciones
      },
      error: (error) => console.error('Error loading transformations:', error)
    });
  }

  viewPlanet(characterId: number): void {
    // Obtener los detalles del personaje por su ID
    this.apiService.getCharacterById(characterId.toString()).subscribe({
      next: (character) => {
        if (character.originPlanet) {
          this.selectedPlanet = character.originPlanet; // Asignar el planeta
        } else {
          console.error('Este personaje no tiene un planeta asignado.');
        }
      },
      error: (error) => {
        console.error('Error al cargar los detalles del personaje:', error);
      }
    });
  }

  closePlanetModal(): void {
    this.selectedPlanet = null; // Limpia el modal al cerrar
  }

}
