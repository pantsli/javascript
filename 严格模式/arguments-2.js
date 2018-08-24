!(function() {
    "use strict";
    // 严格模式下arguments和形参没有映射关系;不允许对arguments赋值
    function fn(n) {
      console.log(n, arguments);
      arguments[0] = 12;
      console.log(n, arguments);
      console.log(n);
    }
    fn(1); // 1
  })();

