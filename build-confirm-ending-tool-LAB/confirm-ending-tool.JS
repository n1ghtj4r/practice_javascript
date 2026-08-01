function confirmEnding(str, target) {  
  var strLen = target.length;

  if(str.substr(-strLen) === target){
    return true;
  } else {
    return false;
  }
}
console.log(confirmEnding('Bastian', 'n'));