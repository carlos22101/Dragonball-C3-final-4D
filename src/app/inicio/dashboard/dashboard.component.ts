import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  characters: Character[] = []; // Debe ser un array
  selectedTransformations: any[] = [];

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

}
