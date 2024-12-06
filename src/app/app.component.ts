import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      cursor.style.transform = 'translate(-50%, -50%)'; 
    }
  }
}
