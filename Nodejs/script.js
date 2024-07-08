// let n = 5;
// for (let i = 0; i < n; i++) {
//     console.log('hello, ', i);
// }
// console.log(process.argv);//No argument is passing here
// and by default it have 2 values.
// if we pass argument like 'hello Piyush' then it will shows something like this
// output -> [
//     'C:\\Program Files\\nodejs\\node.exe',//executable path
//     'E:\\desktop\\NODEJS\\script.js',// cwd
//     'hello', // this is argument
//     'Piyush'
//   ]<-
import { PI, sum } from '/E:/Desktop/NodeJs/math.js';
let args = process.argv;//It is array
for (let i = 2; i < args.length; i++) {
    console.log('Hello to ', args[i]);
}
// const math = require('./math');
console.log(sum(2, 3), PI);

// const Fruits = require('./Fruits');
// console.log(Fruits);

