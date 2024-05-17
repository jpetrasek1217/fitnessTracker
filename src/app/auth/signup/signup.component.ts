import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  maxDate = new Date();

  constructor(private authService: AuthService) {}

  ngOnInit(){

    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm){
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    })
  }
}
