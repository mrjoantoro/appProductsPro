import { ApiService } from '../../../services/api.service';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  apiService = inject(ApiService);

  constructor() { }

  ngOnInit() {
  } 

  submit() {
    console.log(this.form.value);
    this.apiService.createUser(this.form.value as User).subscribe(
      response => {
        console.log('User created successfully:', response);
        // Realiza las acciones necesarias después de almacenar el usuario
      },
      error => {
        console.error('Error creating user:', error);
        // Realiza las acciones necesarias en caso de error
      }
    );
  }
}
