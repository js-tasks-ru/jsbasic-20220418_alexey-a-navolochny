function factorial(n) {
  let result = 1;
  while(n){
	  //result = result * (n-1)
	  result *=(n--)
  }
  return result;
}
