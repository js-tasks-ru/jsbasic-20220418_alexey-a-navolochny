function getMinMax(str) {
  let row = str.split(' ');
  
	let result  = row.map(function(item, index, arr) {
  		let number = parseInt(item);
  		let val = isNaN(number)? item : number;
		return val;
    });
    
    let arr_mas = [];
    for(let i = 0; i<result.length; i++){
    	if(typeof(result[i]) == 'number'){
    		arr_mas.push(result[i]);
     	}
    }
    
    let minVal = Math.min(...arr_mas);
    let maxVal = Math.max(...arr_mas);
	
	return {min: minVal, max:maxVal}
}
