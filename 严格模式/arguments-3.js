!(function() {
    "use strict";
    // 不允许对arguments赋值
    function fn(n) {
        console.log(arguments)
        arguments = 1
        console.log(arguments)
    }
    fn(1); // 1
  })();