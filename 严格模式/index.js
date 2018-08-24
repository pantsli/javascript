/**
 * 1. arguments不允许使用arguments.callee,arguments.callee.caller,我们无法在匿名函数中调用自身了
 * 2. 严格模式下arguments和形参没有映射关系;不允许对arguments赋值
 * 3. 必须声明通过var,let,const声明变量
 * 4. 严格模式下创设了eval作用域，只能再eval内部有使用
 * 5. 为了代码安全，禁止this指向全局对象，构造函数只要不通过new实例化，那么就会直接报错，因为undefined无法设置属性
 * 6. 为了代码安全，禁止在函数内部遍历调用栈
 * 7. 为了代码安全，禁止删除变量
 * 8. 严格模式下，对禁止扩展的对象添加新属性报错
 * 9. 如果函数有多个重名的参数，则报语法错误；普通模式下可以用arguments[i]来读取
 * 10. 禁止八禁止表示法：普通模式第一位是0，表示八进制（0100=>64),严格模式禁止这种表示法，否则报错
 * 11. 禁止with关键字
 */
/*
~function () {
    // console.log(arguments.callee)

    // function fn1(n1) {
    //     arguments[0] = 23
    //     console.log(n1)
    // }
    // fn1(1)

    // a = 1
    // console.log(a,this)

    // eval('var y = 20;alert(y);')
    // alert(y)
    // eval('alert(y);')

    // var x = 123
    // delete x

    // var fn = function(x,x,y){
    //     alert(arguments[0]+arguments[1])
    //     alert(x+y)
    // }
    // fn(1,2,3,5)
    
    // var obj = {}
    // obj.x = 100
    // Object.preventExtensions(obj)
    // obj.y=200
    // console.log(obj)

    // function fn2(x,y){
    //     // arguments[0] = 3
    //     arguments = [2,3,5]
    //     arguments[0] = 6
    //     console.log(x,y)
    // }
    // fn2(1,1)

    let x = 0x100
    console.log(x)
}()
~function () {
    'use strict';

    // console.log(arguments.callee)

    // function fn1(n1) {
    //     arguments[0] = 23
    //     console.log(n1)
    // }
    // fn1(1)

    // x = 1
    // console.log(x,this)

    // eval('var y = 20;alert(y);')
    // alert(y)
    // eval('alert(y);')

    // var fn = function(){
    //     console.log(this)
    // }
    // fn()
    // function Cat(name){
    //     this.name = name
    // }
    // Cat('miaomiao')

    // var fn = (function(){
    //     alert(fn.arguments.length)
    // })

    // fn(1,2,3)


    // var x = 123
    // delete x

    // var fn = function (x, x, y) {
    //     alert(x + y)
    // }
    // fn(1, 2,3)

    // var obj = {}
    // obj.x = 100
    // Object.preventExtensions(obj)
    // obj.y=200
    // console.log(obj)

    // function fn2(x,y){
    //     // arguments[0] = 3
    //     // arguments = [2,3,5]
    //     // arguments[0] = 6
    //     console.log(arguments)
    //     console.log(x,y)
    // }
    // fn2(1,1)

    // let x = 0100
    // console.log(x)


}()*/
