$(document).ready(function() {
	$(".convert").click(function() {
		if ($(this).text() === 'Imperial') {
        	$(this).text('Metric');
        	// add functionality here
    	}
    	else {
        	$(this).text('Imperial');
        	// add funcionality here

    	}
	});
	
	$(".vegetarian").click(function() { 
		if ($(this).text() === 'Vegetarian') {
        	$(this).text('Add Meat'); //changes text to say Add Meat
        	$(".nveg").toggle(); //hides or shows the items on the list that match the class nveg
    	}
    	else {
        	$(this).text('Vegetarian'); //changes back the text to Vegetarian
        	$(".nveg").toggle();
    	}
	});
	
	$(".lactose").click(function() {
		if ($(this).text() === 'Lactose Intolerant') { 
        	$(this).text('Add Dairy'); //changes the text to say Add Dairy
        	$(".nlac").toggle(); //hides or shows the items on the list that match the class nlac
    	}
    	else {
        	$(this).text('Lactose Intolerant'); //changes back the text to Lactose Intolerant
        	$(".nlac").toggle();
    	}
	});

	$("#photooff").click(function() { //hides photos on click of the text
		if ($(this).text() === 'Hide Photos') {
        	$(this).text('Show Photos');
        	$("img").toggle(); //toggles the images off
        	$(".imgtext").toggle(); //toggles the text overlay of the images off
    	}
    	else {
        	$(this).text('Hide Photos'); //same as above but switches the function and text
        	$("img").toggle();
        	$(".imgtext").toggle();
    	}
	});
});