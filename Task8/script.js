function oncheck()
{	
	let min = parseInt(document.getElementById('min').value);
	let max = parseInt(document.getElementById('max').value);
	
	let result_elem = document.getElementById('result');
	
	if (min > max) {
		result_elem.innerHTML = 'Invalid range !';
		
		return;
	}

	let result = '';
	
	for (let i = min; i <= max; i++) {
		let f = (i * 1.8) + 32;

		result += '<div>' + i + ' &deg;C = ' + f.toFixed(2) + ' &deg;F</div>';	
	}
	
	result_elem.innerHTML = result;
}