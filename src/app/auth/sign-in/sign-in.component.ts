import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  signin() {
    // Corrected to use authService instead of autoService
    if (this.username === 'bava' && this.password === 'password123') {
      this.authService.login();
      this.router.navigate(['/home/header']);
    } else {
      alert('Invalid credentials');
    }
  }
}
