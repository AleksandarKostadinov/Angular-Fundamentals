import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { FurnitureModel } from './models/funiture.model';

const serverUrl = "http://localhost:5000/furniture"
const allUrl = serverUrl + "/all";
const detailsUrl = serverUrl + "/details/";
const createUrl = serverUrl + "/create";
const myFurnitureUrl = serverUrl + "/mine";
const deleteFunitureUrl = serverUrl + "/delete/";


@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http
      .get<FurnitureModel[]>(allUrl);
  }

  create(body: FurnitureModel) {
    return this.http
      .post<FurnitureModel>(createUrl, body);
  }

  getDetails(id: string) {
    return this.http
      .get<FurnitureModel>(detailsUrl + id);
  }

  getMine() {
    return this.http
      .get<FurnitureModel[]>(myFurnitureUrl);
  }

  deleteItem(id: string) {
    return this.http.delete(deleteFunitureUrl + id);
  }
}
