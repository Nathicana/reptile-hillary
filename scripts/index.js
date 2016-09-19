
$(document).ready(function(){
		// jQuery will listen to the button's click action. and inside that, perform something 
		$("#submit").click(function(){ 

			// this syntax is assigning the value of "whoareyou" ID textbox into the "whoAreYou" variable
			var whoAreYouValue = $("#whoareyou").val();

			// this syntax is assigning the value of "blog" ID textbox into the "blogValue" variable
			var blogValue = $("#blog").val();

			// this is "concatenating" whoareyou and blog values in the blogspotValue variable
			var blogspotValue =  "<div class='border rounded luminosity blog'>" +  whoAreYouValue + "<br>" + moment().format('MMMM Do YYYY, h:mm:ss a') + "<p>" + blogValue + "</div>";

	
			// this is the blog posted in the blogspot div box
			$("#blogbox").append(blogspotValue);

			// this will "clear" the values of our whoareyou and blog textbox (technically replacing them with empty values)
			$("#blog").val("");
			$("#whoareyou").val("");

		
			// this will set our cursor focus to the "whoareyou" input
			$("#whoareyou").focus();

			// this can also be done by just doing this
			// $("#blogspot").append("<p>" + $("#whoareyou").val() + " " + $("#blog").val());

		});
});