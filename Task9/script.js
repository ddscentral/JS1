function oncheck()
{	
	let lines = parseInt(document.getElementById('lines').value);
	let result_elem = document.getElementById('result');
	
	let out_line = '*';
	let result = '';
	
	for (let i = 1; i <= lines; i++) {
		result += '<div>' + out_line + '</div>';
		out_line += '*';
	}
	
	result_elem.innerHTML = result;
}