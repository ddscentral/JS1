var g_low_age  = 10;
var g_high_age = 20;
var g_standard_bonus = 50;
var g_low_age_extra = 50;
var g_high_age_extra = 100;

function oncheck()
{	
	let years = document.getElementById('years').value;
	let result = g_standard_bonus;
	
	if (years >= g_high_age) {
		result += g_high_age_extra;
	} else {
		if (years >= g_low_age) {
			result += g_low_age_extra;
		}		
	}
	
	document.getElementById('result').innerHTML = 'You will receive a Christmas bonus of ' + result + ' pounds';
}