var foo = 1
function fn() {
	// 形参赋值：无
	// 变量提升：var foo;不管条件是否成立，都要进行变量提升，新浏览器中对判断体中的函数只是提前声明
	if(!foo) {  // ！undefined => true
		var foo = 10
	}
	console.log(foo)
}
fn()
/*


10
 */