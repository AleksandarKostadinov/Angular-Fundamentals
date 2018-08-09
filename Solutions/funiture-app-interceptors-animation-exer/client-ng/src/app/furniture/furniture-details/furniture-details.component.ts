import { Component, OnInit } from '@angular/core';
import { FurnitureModel } from '../models/funiture.model';
import { Observable } from 'rxjs';
import { FurnitureService } from '../furniture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  private furniture: Observable<FurnitureModel>; 
  private id: string;

  constructor(
    private serv: FurnitureService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id = data.id;
      console.log(data)

      this.furniture = this.serv.getDetails(this.id);
    });
  }
}
