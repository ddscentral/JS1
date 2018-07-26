var g_low_age  = 18;
var g_high_age = 30;

function oncheck()
{	
	// get age
	let age = document.getElementById('age').value;
	
	// get the form element
	let form = document.getElementById('entry');
	
	// get the result element
	let result_element = document.getElementById('result');
	
	// get value from a radio group.
	// Note the use of form and group name to extract the selected value without checking each radio individual radio group element.
	// There are other ways, such as a simple for-loop or a selector like: input[name="group1"]:checked
	let crime = form.elements['group1'].value;
	
	// check if age is between low and high
	if ((age >= g_low_age) && (age <= g_high_age)) {
		// check if there's a criminal record
		if (crime == 0) {
			result_element.innerHTML = 'You are fit for army service';
		} else {
			result_element.innerHTML = 'You will not go to the army';
		}
	} else {
		result_element.innerHTML = 'You will not go to the army';
	}
}