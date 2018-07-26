function oncheck()
{	
	let year = document.getElementById('year').value;

	let leap = (year % 4 == 0) ? ((year % 100 == 0) ? (year % 400 == 0) : true) : false; 
	
	let output = 'Year ' + year + ' is ' + (leap ? 'a leap year' : 'NOT a leap year');  
	
	document.getElementById('result').innerHTML = output;
}