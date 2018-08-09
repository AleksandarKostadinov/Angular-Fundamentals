import { NgModule } from "@angular/core";
import { furnitureComponents } from ".";
import { FurnitureRoutingModule } from "./furniture-routing.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "../../../node_modules/@angular/common";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FurnitureRoutingModule,
    NgxPaginationModule
  ],
  declarations: [
    ...furnitureComponents
  ]
})
export class FurnitureModule { }