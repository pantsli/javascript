var arr = [1, 2, 4, 21, 3, 4, 3, 2, 18, 32, 21];
var unique = function(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (obj.hasOwnProperty(item)) {
      // 优化性能
      arr[i] = arr[arr.length - 1];
      arr.pop();
      //   解决数组塌陷
      i--;
      continue;
    }
    obj[item] = item;
  }
  //   释放内存
  obj = null;
};
unique(arr);
console.log(arr);
