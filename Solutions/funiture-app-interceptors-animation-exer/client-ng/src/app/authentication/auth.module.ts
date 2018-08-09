import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AuthService } from "./auth.service";
import { authComponents } from ".";

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [...authComponents],
  providers: [AuthService],
  exports: [ CommonModule, FormsModule]
})
export class AuthModule { }