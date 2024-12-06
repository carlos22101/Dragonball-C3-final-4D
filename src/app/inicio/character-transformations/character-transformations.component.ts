import { Component } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-transformations',
  templateUrl: './character-transformations.component.html',
  styleUrls: ['./character-transformations.component.css']
})
export class CharacterTransformationsComponent {
  transformations: any[] = [];
  characterName: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    // Obtener el ID del personaje desde la URL
    const characterId = this.route.snapshot.paramMap.get('id');
    if (characterId) {
      this.apiService.getCharacterById(characterId).subscribe({
        next: (data) => {
          this.transformations = data?.transformations?.map((transformation: any) => {
            const savedKi = localStorage.getItem(`ki-${transformation.id}`);
            return {
              ...transformation,
              ki: savedKi ? parseInt(savedKi, 10) : transformation.ki,
              editing: false
            };
          }) || []; // Si transformations es undefined, inicializar como un array vacío
          this.characterName = data.name || 'Desconocido';
        },
        error: (error) => console.error('Error loading transformations:', error)
      });
    }
  }

  // Navegar al Dashboard
  Regresar(): void {
    this.router.navigate(['/Dashboard']);
  }

  // Activar el modo edición para una transformación
  enableEdit(transformation: any): void {
    transformation.editing = true;
  }

  // Guardar el nuevo valor de Ki
  saveKi(transformation: any, newKi: string): void {
    if (newKi.trim() !== '') {
      transformation.ki = newKi; // Guarda el valor como texto
      localStorage.setItem(`ki-${transformation.id}`, newKi);
    }
    transformation.editing = false; // Salir del modo edición
  }

}
