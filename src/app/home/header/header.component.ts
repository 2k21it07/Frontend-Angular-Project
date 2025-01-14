import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  // Handle hover animations
  onHover(event: any) {
    event.target.style.transform = 'scale(1.1)';
  }

  onLeave(event: any) {
    event.target.style.transform = 'scale(1)';
  }

  // Navigate to 360-degree view
  goTo360View() {
    this.router.navigate(['/360-view']);
  }


}
