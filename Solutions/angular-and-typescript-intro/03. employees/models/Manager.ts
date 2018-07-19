import { Employee } from './Employee'

export class Manager extends Employee {
  bonus: number;

  constructor(name: string, age: number) {
    super(name, age)

    this.bonus
    this.tasks.push('scheduled for meeting.')
    this.tasks.push('is preparing quarterly meeting.')
  }

  getSalary = () => {
    return this.salary + this.bonus
  }
}