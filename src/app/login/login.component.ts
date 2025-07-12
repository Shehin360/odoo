import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']);
  }

  onLogin() {
    // TODO: Implement actual login logic
    console.log('Login attempt:', { email: this.email, password: this.password });
    
    // For now, just log the attempt and potentially navigate
    if (this.email && this.password) {
      // Navigate to a dashboard or home page after successful login
      alert('Login functionality would be implemented here');
    } else {
      alert('Please enter both email and password');
    }
  }

  onForgotPassword() {
    // TODO: Implement forgot password logic
    alert('Forgot password functionality would be implemented here');
  }
}
