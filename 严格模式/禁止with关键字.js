!(function() {
  "use strict";
  // With:可能会出现内存泄露的情况，所以严格模式下禁止使用
  var obj = {};
  obj.a = 1;
  obj.b = 2;
  withFn(obj);
  function withFn(obj) {
    'use strict'
    with (obj) {
      alert(a + b);
    }
  }
})();

