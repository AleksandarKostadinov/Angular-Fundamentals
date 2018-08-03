import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { AuthService } from '../auth.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterModel;
  errorMessage: string;

  constructor(private auth: AuthService, private router: Router) { 
    this.model = new RegisterModel('', '', '', '', '', 22)
  }

  ngOnInit() {
  }

  register() {
    delete this.model["confirmPassword"];
    
    this.auth
      .register(this.model)
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
