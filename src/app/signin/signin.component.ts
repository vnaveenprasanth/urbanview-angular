import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from '../mockusers';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  signInForm: FormGroup;

  private users = users;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.signInForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const { username, password } = this.signInForm.value;

      const user = this.users.find((u) => u.username === username && u.password === password);

      if (user) {
        this.router.navigate(['/posts']);
      } else {
        console.error('Authentication failed');
      }
    }
  }
}

