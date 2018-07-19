export abstract class Melon {
  private name: string;

  constructor(public weight: number, public melonSort: string) {
    this.name = this.constructor.name
  }

  elmentIndex = () => this.weight * this.melonSort.length

  getElement = () => this.name.substr(0, this.name.lastIndexOf('melon'))

  toString = () => {
    return `Element: ${this.getElement()}
Sort: ${this.melonSort}
Element Index: ${this.elmentIndex()}`
  }
}