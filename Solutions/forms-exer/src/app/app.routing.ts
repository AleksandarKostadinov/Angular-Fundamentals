import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "../../node_modules/@angular/core";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./authentication/login/login.component";
import { RegisterComponent } from "./authentication/register/register.component";
import { AuthGuardService } from "./authentication/auth-guard.service";


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  { path: '',pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }