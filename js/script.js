// NOTES
// var timer = duration, minutes, seconds;
// is equivalent to
// var timer = duration;
// var minutes;
// var seconds;
//
// minutes and seconds are both just being declared in the same line in the former example

// parseInt() parses a string argument and returns an integer of the specified radix AKA base (use 10 for the decimal numeral system)

// --foo is the pre-decrement operator
// first, it decrements, then it evaluates

$(document).ready(function() {
	var rest = false;
	// This function starts the timer with a parameter of duration in seconds
	function startTimer(duration) {
    	var timer = duration, minutes, seconds;

    	var countdown = setInterval(function () {
        	minutes = parseInt(timer / 60, 10)
        	seconds = parseInt(timer % 60, 10);

        	minutes = minutes < 10 ? "0" + minutes : minutes;
        	seconds = seconds < 10 ? "0" + seconds : seconds;

        	display = document.querySelector('.time');
        	display.textContent = minutes + ":" + seconds;

        	if (--timer < 0) {
            	clearInterval(countdown);
            	rest = !rest;
            	rest ? startTimer(300) : startTimer(1500);
        	}

        	$('.fa-repeat').on('click', function() {
        		clearInterval(countdown);
        		rest = false;
        		startTimer(1500);
        	});

        	$('.fa-pause').on('click', function() {
        		clearInterval(countdown);
        	});

        	$('.fa-play').on('click', function() {
        		startTimer(timer);
        	});
    	}, 1000);
	}

	// This handles the buttons lighting up when you hover over them
	$('.fa').on('mouseenter', function() {
		$(this).css("color", "#4c4c4c");
	});

	$('.fa').on('mouseleave', function() {
		$(this).css("color", "black");
	});

	// This section handles the button functionality
	$('.fa-play').on('click', function() {
		startTimer(1500);
	});


})