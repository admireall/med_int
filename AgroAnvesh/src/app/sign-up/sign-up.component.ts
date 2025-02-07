import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenService } from '../services/token.service';

interface DecodedToken {
  exp: number;
  iat: number;
  jti: string;
  user_id: number;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private tokenService: TokenService
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Sending signup request with:', this.signupForm.value);
      
      this.http.post('http://127.0.0.1:8000/api/create_user/', this.signupForm.value)
        .subscribe({
          next: (response: any) => {
            console.log('Registration successful:', response);
            this.snackBar.open('Registration successful! Please login.', 'Close', {
              duration: 3000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: ['success-snackbar']
            });
            if (response.token) {
              localStorage.setItem('token', response.token);
              const decoded = this.tokenService.decodeToken(response.token);
              
              if (decoded) {
                localStorage.setItem('user_id', decoded.user_id.toString());
                console.log('Token decoded successfully:', decoded);
                this.router.navigate(['/dashboard']);
              }
            }
          },
          error: (error) => {
            console.log('Registration request payload:', this.signupForm.value);
            console.error('Registration failed:', error);
            
            let errorMessage = 'Registration failed';
            if (error.status === 400) {
              errorMessage = error.error?.message || 'Please check your input';
            } else {
              errorMessage = 'An error occurred. Please try again later';
            }

            this.snackBar.open(errorMessage, 'Close', {
              duration: 5000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: ['error-snackbar']
            });
          }
        });
    }
  }
}
