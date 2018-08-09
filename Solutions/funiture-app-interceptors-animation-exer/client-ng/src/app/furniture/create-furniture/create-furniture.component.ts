import { Component, OnInit } from '@angular/core';
import { FurnitureModel } from '../models/funiture.model';
import { FurnitureService } from '../furniture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  bindingModel: FurnitureModel;

  constructor(
    private furnitureService: FurnitureService,
    private router: Router
  ) { }

  ngOnInit() {
    this.bindingModel = new FurnitureModel("", "", "", 0, 0, "");
  }

  create() {
    this.furnitureService
      .create(this.bindingModel)
      .subscribe()
  }
}
