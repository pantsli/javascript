/**
 * 变量提升
 * var a;不管条件是否成立，再全局作用域下声明的变量，也相当于给window设置了一个对应的属性（windown.a=undefined），而且两者之间建立了映射机制
 * in:检测某个属性是否隶属与这个对象（不管是私有属性还是共有属性，只要有这个属性结果就是true)
 * hasOwnProperty:检测某个属性是否为对象的私有属性（只有这个属性是私有的才可以）
 */

if (!('a' in window)) {
	var a = 10
}
console.log(a)