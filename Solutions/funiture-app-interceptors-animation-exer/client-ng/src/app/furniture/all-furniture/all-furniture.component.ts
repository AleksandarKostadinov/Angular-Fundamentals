import { Component, OnInit } from '@angular/core';
import { FurnitureModel } from '../models/funiture.model';
import { FurnitureService } from '../furniture.service';
import { Subscription, Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  private furniture: Observable<FurnitureModel[]>;

  constructor(private serv: FurnitureService) { }

  ngOnInit() {
    this.furniture = this.serv.getAll();
  }

}
