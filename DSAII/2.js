function a(){
  var x = 5;
  return function b(){
    x = 2;
    return 0;
  }
}
a()
console.log(x);