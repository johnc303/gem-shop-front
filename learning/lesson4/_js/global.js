function renderTable() {
	var source   = $( "#entry-template" ).html();
	var template = Handlebars.compile(source);
	var context  = { CATALOGUE_DATA };
	var output   = template(context);
	document.getElementById( "gems-table-body" ).innerHTML = output;
}

function renderCarousel() {
	var source   = $("#carousel-template").html();
	var template = Handlebars.compile(source);
	var context  = { CATALOGUE_DATA };
	var output   = template(context);
	document.getElementById( "gems-carousel" ).innerHTML = output;
}

function gemPage() {
	var search = window.location.search;
	var offset = search.lastIndexOf('=');
	var id = search.substr(offset);
	return id;
}	