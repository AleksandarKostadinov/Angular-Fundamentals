import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FurnitureModel } from '../models/funiture.model';
import { FurnitureService } from '../furniture.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {
  bindingModel: FurnitureModel;

  constructor(private serv: FurnitureService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let inSubs: Subscription = this.serv
      .getDetails(this.route.snapshot.params.id)
      .subscribe(data => {
        this.bindingModel = data;
        inSubs.unsubscribe();
      });
  }

  edit(id) {
    let subs: Subscription = this.serv
      .edit(id, this.bindingModel)
      .subscribe(() => {
        subs.unsubscribe();
        this.router.navigate(["furniture/all"])
      })
  }
}
