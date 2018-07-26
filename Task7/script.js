function oncheck()
{	
	let guess = document.getElementById('guess').value;
	
	let old_num_elem = document.getElementById('number');
	let result_elem  = document.getElementById('guessprompt');
	
	let old_num = old_num_elem.innerHTML.length > 0 ? parseInt(old_num_elem.innerHTML) : 0;
	
	let random_num;
	
	if (old_num > 0) {
		random_num = old_num;
	} else {
		random_num = Math.floor((Math.random() * 4) + 0.5) + 1;
		old_num_elem.innerHTML = random_num;
	}
	
	if (guess == random_num) {
		result_elem.innerHTML = 'Correct - well done !';
		old_num_elem.innerHTML = '';
	} else {
		result_elem.innerHTML = 'No, guess again : ';
	}
}