function main()
{	
	let rand_float = Math.random();
	
	let rand_int = Math.floor(rand_float * 15);
	
	let result = 0;
	
	switch (rand_int) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
			result = 0;
			break;
		case 0:
			result = 3;
			break;
		case 9:
		case 10:
			result = 2;
			break;
		case 11:
		case 12:
		case 13:
		case 14:
			result = 1;
			break;
	}
	
	document.getElementById('result').innerHTML = '' + result;
}

main();