import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service'; 
import { UtilsService } from 'src/app/services/utils.service';
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

  constructor(
    private apiService: ApiService,
    private utilsSvc: UtilsService
    ) { }


  ngOnInit() {}

  submit() {
    if (this.form.valid) {
      this.apiService.createUser(this.form.value as User)
      .subscribe(
        response => {
          console.log('User created successfully:', response);
          this.utilsSvc.saveInLocalStorage('user', response);
          this.utilsSvc.routerLink('/main/home');
        },
        error => {
          console.error('Error creating user:', error);
          // Acciones en caso de error
        }
      );
    } else {
      console.error('Form is invalid');
      // Acciones en caso de formulario inválido
    }
  }
}
