import { Component, OnInit } from '@angular/core';
import { FurnitureModel } from '../models/funiture.model';
import { FurnitureService } from '../furniture.service';
import { Subscription, Observable } from 'rxjs';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  current: number = 1;
  pageSize: number = 3;

  private furniture: Observable<FurnitureModel[]>;

  constructor(private serv: FurnitureService, private auth: AuthService) { }

  ngOnInit() {
    this.furniture = this.serv.getAll();
  }

  pageChanged(c) {
    this.current = c;
  }

  deleteItem(id) {
    if (this.auth.isAdmin()) {
    
    let subs: Subscription = this.serv
      .deleteItem(id)
      .subscribe(() => {
        subs.unsubscribe();
        this.furniture = this.serv.getAll();
      });
    }
  }
}
