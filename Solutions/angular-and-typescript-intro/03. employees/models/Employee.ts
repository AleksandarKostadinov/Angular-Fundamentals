export abstract class Employee {
  name: string;
  age: number;
  salary: number;
  tasks: string[];

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.salary = 0
    this.tasks = []
  }

  work = () => {
    let currentTask = this.tasks.shift()
    console.log(`${this.name} ${currentTask}`)
    this.tasks.push(currentTask)
  }

  getSalary = () => this.salary

  collectSalary = () => {
    console.log(`${this.name} received ${this.getSalary()} this month.`)
  }
}