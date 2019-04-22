import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password: ['', Validators.required]
    })
  }
  login() {
    this.submitted = true;
    if(this.loginForm.invalid) return;
    this.success = true;
    this.loginService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    ).subscribe(
      (res =>{
        localStorage.setItem('token', res.token);
        this.loginService.updateAuth();
        this.router.navigate(['']);
        location.href ='/';
    }),
    (err =>{
      alert(err.error.error);
    }),
    () => console.log('Observer got a complete notification')
  )}
  ngOnInit() {
  }

}
