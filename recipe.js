$(document).ready(function() {
	$(".convert").click(function() {
		if ($(this).text() === 'Imperial') {
        	$(this).text('Metric');
    	}
    	else {
        	$(this).text('Imperial');
     
    	}
	});
	
	$(".vegetarian").click(function() {
		if ($(this).text() === 'Vegetarian') {
        	$(this).text('Add Meat');
        	$(".nveg").toggle();
    	}
    	else {
        	$(this).text('Vegetarian');
        	$(".nveg").toggle();
    	}
	});
	
	$(".lactose").click(function() {
		if ($(this).text() === 'Lactose Intolerant') {
        	$(this).text('Add Dairy');
        	$(".nlac").toggle();
    	}
    	else {
        	$(this).text('Lactose Intolerant');
        	$(".nlac").toggle();
    	}
	});

	$("#photooff").click(function() {
		if ($(this).text() === 'Hide Photos') {
        	$(this).text('Show Photos');
        	$("img").toggle();
        	$(".imgtext").toggle();
    	}
    	else {
        	$(this).text('Hide Photos');
        	$("img").toggle();
        	$(".imgtext").toggle();
    	}
	});
});