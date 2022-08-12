/*  This is JavaScript File */
let image = document.getElementsByClassName('pics');

$(document).ready(function(){
  $(".pics").cycle({
    fx: 'fade',
  });
});

let butt = document.getElementsByClassName("widget");
$( function() {
  $( ".widget button[type=submit], .widget button" ).button;
  $( "button").on( "click", function( event ) {
    event.preventDefault();
  } );
} );

// Code for json
$(document).ready(function(){
	$.getJSON("me.json", function(data) {
		$.each(data, function() {
			$.each(this, function(key, value) {
				$(".author").append(
					"<img src=" + value.image +">"+ "<br>" +
					"<p>" + value.full_name + "</p><br>" +
					"<p>" + value.education + "</p><br>" +
					"<p>" + value.institution + "</p><br>" +
          "<p>" + value.graduation_date + "</p><br><br>"
				);
			});
		});
	});
});
