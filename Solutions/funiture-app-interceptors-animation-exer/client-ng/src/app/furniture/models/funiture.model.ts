export class FurnitureModel {
  constructor (
    public model: string,
    public make: string,
    public description: string,
    public year: number,
    public price: number,
    public image: string,
    public material?: string,
    public id?: number,
    public createdBy?: string
  ) { }
}