import { Airmelon, Firemelon, Watermelon, Earthmelon, Melolemonmelon } from './models'

let air = new Airmelon(3, 'sort')
let fire = new Firemelon(4, 'bg')
let water = new Watermelon(5, 'hard')
let earth = new Earthmelon(6, 'us')
let melou = new Melolemonmelon(10, 'pipon')

melou.swap()
melou.swap()
melou.swap()
melou.swap()
melou.swap()
melou.swap()
melou.swap()
melou.swap()
melou.swap()

console.log(air + '')
console.log(fire + '')
console.log(water + '')
console.log(earth + '')
console.log(melou + '')