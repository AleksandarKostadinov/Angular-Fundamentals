import { Component, OnInit } from '@angular/core';
import { FurnitureModel } from '../models/funiture.model';
import { Observable } from '../../../../node_modules/rxjs';
import { FurnitureService } from '../furniture.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-furniture-mine',
  templateUrl: './furniture-mine.component.html',
  styleUrls: ['./furniture-mine.component.css']
})
export class FurnitureMineComponent implements OnInit {
  private furniture: Observable<FurnitureModel[]>; 

  constructor(
    private serv: FurnitureService
  ) { }

  ngOnInit() {
    this.furniture = this.serv.getMine();
  }

  deleteItem(id: string) {
    this.serv.deleteItem(id).subscribe()
  }
}
