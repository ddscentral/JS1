var g_low_age  = 16;
var g_high_age = 60;
var g_def_price = 6.00;
var g_low_age_discount  = 0.50;
var g_high_age_discount = 0.33;

function oncheck()
{	
	let age = parseInt(document.getElementById('age').value);
	let result = g_def_price;
	
	if (age < g_low_age) {
		result = result - (result * g_low_age_discount);
	} else {
		if (age > g_high_age) {
			result = result - (result * g_high_age_discount);
		}
	}

	let output = result.toFixed(2) + ' EUR';
	
	document.getElementById('result').innerHTML = output;
}