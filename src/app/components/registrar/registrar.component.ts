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
      email: ['', Validators.required],
      password: ['', Validators.required]
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
    if (this.signUpForm.invalid) {
      return;
    }
    this.firebase.nuevoUsuario(this.signUpForm.value);
    this.route.navigate(['/home']);
  }
}
