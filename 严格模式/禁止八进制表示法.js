!(function() {
  "use strict";
  // 禁止八禁止表示法：普通模式第一位是0，表示八进制（0100=>64),严格模式禁止这种表示法，否则报错
  let x = 0x100;
  console.log(x);
  x = 01;
  console.log(x)
})();
