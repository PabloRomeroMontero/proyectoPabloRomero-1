import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  signUpForm: FormGroup;
  isSubmitted = false;

  constructor(private route: Router, private formBuilder: FormBuilder, private firebase: FirebaseService) {
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email: ['hi@hi.com', Validators.required],
      password: ['hihihi', Validators.required]
    });
  }

  get formControls() {
    return this.signUpForm.controls;
  }


  validarFormulario() {

  }


  signUp() {
    console.log(this.signUpForm.value);
    this.isSubmitted = true;
    // if (this.signUpForm.invalid) {
    //   return;
    // }
    this.firebase.nuevoUsuario({
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
      returnSecureToken: true
    }).subscribe((response) => {
      console.log(response);
    }, (err) => {
      console.log(err);
    });
    this.route.navigate(['/home']);
  }
}
