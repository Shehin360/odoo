import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  onLogin() {
    if (this.loginForm.valid) {
      // Handle login logic here
      console.log('Login attempt:', this.loginForm.value);
      // For now, just navigate to home after successful login
      this.router.navigate(['/home']);
    }
  }
}
