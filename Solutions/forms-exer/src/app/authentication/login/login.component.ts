import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginModel } from '../models/login.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel;
  errorMessage: string;

  constructor(private auth: AuthService, private router: Router) { 
    this.model = new LoginModel('', '')
  }

  ngOnInit() {
  }

  login() {
    this.auth
      .login(this.model)
      .subscribe(this.handleSuccess, this.handleError)
  }

  private handleSuccess = (data: Object): void => {
    this.auth.authtoken = data['_kmd']['authtoken'];
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
    this.router.navigate(['/home'])
  }

  private handleError = (e): void => {
    this.errorMessage = e.error.description;
  }
}
