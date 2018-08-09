import { NgModule} from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { AllFurnitureComponent } from "./all-furniture/all-furniture.component";
import { CreateFurnitureComponent } from "./create-furniture/create-furniture.component";
import { FurnitureMineComponent } from "./furniture-mine/furniture-mine.component";
import { FurnitureDetailsComponent } from "./furniture-details/furniture-details.component";
import { AdminGuard } from "../authentication/guards/admin.guard";
import { EditFurnitureComponent } from "./edit-furniture/edit-furniture.component";

const routes: Routes = [
  { path: "all", component: AllFurnitureComponent },
  { path: "create", component: CreateFurnitureComponent },
  { path: "mine", component: FurnitureMineComponent },
  { path: "details/:id", component: FurnitureDetailsComponent },
  { path: "edit/:id", canActivate:[ AdminGuard ], component: EditFurnitureComponent },
  { path: '**', redirectTo: 'all', pathMatch: "full" }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class FurnitureRoutingModule { }