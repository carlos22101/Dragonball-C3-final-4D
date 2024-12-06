import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Planet } from '../../models/character';


@Component({
  selector: 'app-planet-modal',
  templateUrl: './planet-modal.component.html',
  styleUrl: './planet-modal.component.css'
})
export class PlanetModalComponent {
  @Input() planet: Planet | null = null;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  onClose(): void {
    this.closeModal.emit(); // Emitir evento al cerrar el modal
  }
}
