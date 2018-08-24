let obj = {a:1,b:3}
let obj1 = obj,obj2 = obj
console.log(obj1 === obj2)

obj1.a = 2
console.log(obj2)