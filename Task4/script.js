function main()
{	
	let rand_float = Math.random();
	
	let rand_int = Math.floor(rand_float * 15);
	
	let result = 0;
	
	if ((rand_int >= 1) && (rand_int <= 8)) {
		result = 0;
	} else {
		if (rand_int == 0) {
			result = 3;
		} else {
			if ((rand_int >= 9) && (rand_int <= 10)) {
				result = 2;
			} else {
				if ((rand_int >= 11) && (rand_int <= 14)) {
					result = 1;
				}	
			}
		}
	}
	
	document.getElementById('result').innerHTML = '' + result;
}

main();