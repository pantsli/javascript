!function(){
    'use strict'
    // 严格模式下创设了eval作用域，只能再eval内部有使用
    eval('var a=1;var obj={x:0};console.log(a,obj);')
    console.log(a,obj)
    eval('a=2;obj.a=12;')
    console.log(a,obj)
}()