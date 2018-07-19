import { Junior, Senior, Manager } from './models'

let junior = new Junior('Ivan', 39)
let senior = new Senior('Pesho', 20)
let manager = new Manager('Gosho', 30)

for (let i = 0; i < 5; i++) {
  junior.work()
  senior.work()
  manager.work()
}
junior.salary = 2
junior.collectSalary()

senior.salary = 3
senior.collectSalary()

manager.salary =14
manager.bonus = 10
manager.collectSalary()