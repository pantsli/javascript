/**
 * 全局作用与下：
 * 变量提升： 
 * 	var a;
 *  fn = aaafff000
 *  var f
 * 代码自上而下执行：
 * 	a = 9 => 0(1) => 0(1)=>2
 * 	f = fn() => bbbfff000
 * 	f(5) => 5
 * 	fn()(5) => bbbfff111(5) => 5
 * 	f(5) => 6
 * 	a =>
 */

var a = 9

function fn() {
	/**
	 * fn执行
	 * 变量提升：
	 *  无
	 * 形参赋值：
	 *  a = 0
	 * 代码自上而下执行：
	 *  return bbbfff000
	 */
	/**
	 * fn()执行
	 * 变量提升：
	 *  无
	 * 形参赋值：
	 *  a = 0
	 * 代码自上而下执行：
	 *  return bbbfff111
	 */
	a = 0
	return function(b) {
		/**
		 * f(5)执行
		 * 变量提升：
		 *  无
		 * 形参赋值：
		 *  b = 5
		 * 代码自上而下执行：
		 *  return 5+0 => 5
		 */
		/**
		 * bbbfff111(5)执行
		 * 变量提升：
		 *  无
		 * 形参赋值：
		 *  b = 5
		 * 代码自上而下执行：
		 *  return 5+0 => 5
		 */
		/**
		 * bbbfff000(5)执行
		 * 变量提升：
		 *  无
		 * 形参赋值：
		 *  b = 5
		 * 代码自上而下执行：
		 *  return 5+1 => 6
		 */
		return b + a++
	}
}
var f = fn()
f(5)
fn()(5)
f(5)
console.log(a)


/**
* 全局作用域
 * 变量提升：
 *  var num;
 *  var obj;
 *  var fn;
 * 代码执行：
 *  num = 10 (60) (65)
 *  obj = afff111 => { num: 20} => obj.num=25
 *  obj.fn = cccxxx111
 *  fn = obj.fn => cccxxx111
 *  fn(5) => 21
 *  obj.fn(10) => 22
 *  console.log(num,obj.num)
 */
var num = 10
var obj = {
	num: 20
}
obj.fn = (function(num) {
	/**
	 * 私有作用域：
	 * 变量提升：
	 *  无
	 * 形参赋值：
	 *  num=20 (21) (22)
	 * 代码自上而下执行：
	 *  this.num = 20* 3=> 60 => window.num = 60
	 *  num++ => 自执行函数作用与内的num+1
	 *  return cccxxx111
	 */
	this.num = num * 3
	num++
	return function(n) {
		/**
		 * fn(5) cccxxx111私有作用域
		 * 变量提升：
		 *  无
		 * 形参赋值：
		 *  n=5
		 * 代码自上而下执行：
		 *  this.num += 5 => 60+5 => window.num = 65
		 *  num++ => 21
		 */
		/**
		 * obj.fn(10)<= cccxxx111私有作用域
		 * 变量提升：
		 *  无
		 * 形参赋值：
		 *  n=10
		 * 代码自上而下执行：
		 *  this.num += 5 => 20+5 => obj.num = 25
		 *  num++ => 22
		 */
		this.num += n
		num++
		console.log(num)
	}
})(obj.num) // => cccxxx111
var fn = obj.fn // => cccxxx111
fn(5)
obj.fn(10)
console.log(num, obj.num)