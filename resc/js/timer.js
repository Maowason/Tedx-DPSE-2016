var clock;
$(document).ready(function() {
	var currentDate = new Date();
	var futureDate  = new Date('January 07 2017 13:00:00 GMT+0530');
	var diff = currentDate.getTime() / 1000 - futureDate.getTime() / 1000;
	clock = $('.clock').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: false,
		showSeconds: true
	});
});
