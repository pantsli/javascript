
console.log(a)
var a = 12
function fn() {
	console.log(a)
	var a = 13
}
fn()
console.log(a)

/*
undefined undefined 12
 */



console.log(a)
var a = 12
function fn() {
	console.log(a)
	a = 13
}
fn()
console.log(a)

/**
 * undefined 12 13
 */


console.log(a)
a=12
function fn(){
	console.log(a)
	a=13
}
fn()
console.log(a)

/**
 * 报错 Uncaught ReferenceError: a is not defined
 */

