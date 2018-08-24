!function(){
    'use strict'
    // strict mode 为了代码安全，禁止删除变量
    var obj = {a:1}
    console.log(obj.a)
    delete obj.a
    console.log(obj.a)

    var a = 1
    console.log(a)
    delete a
}()