import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  animations: [
    trigger('flyInOut', [
      state('in', style({
        transform: 'translateX(0) scale(1) rotate(0deg)'
      })),
      transition(':enter', [
        style({ transform: 'translateX(-100%) scale(0.5) rotate(0deg)' }),
        animate('2s ease-out', style({
          transform: 'translateX(100%) scale(1.5) rotate(360deg)'
        }))
      ]),
      transition(':leave', [
        animate('2s ease-in', style({
          transform: 'translateX(-100%) scale(0.5) rotate(-360deg)'
        }))
      ])
    ])
  ]
})

export class SignInComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  signin() {
    // Corrected to use authService instead of autoService
    if (this.username === 'Travel' && this.password === 'Happiness') {
      this.authService.login();
      this.router.navigate(['/home/header']);
    } else {
      alert('Invalid credentials');
    }
  }
}
