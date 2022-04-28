function ucFirst(str) {
  if(0===str.length){
	  return str;
  } else {
	let val = str[0].toUpperCase();
    return (val + str.slice(1,str.length));
  }
}
