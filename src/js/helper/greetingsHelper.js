export function getGreetingByTime() {
	let greeting;
	let date = new Date();
	let hour = date.getHours();

	if(hour < 12){
		greeting = 'morning';
	} else if(hourus > 12 && hour < 17) {
		greeting = 'afternoon';
	} else {
		greeting = 'evening';
	}

	return greeting;
}