function init() {
};


/*
  linksList()
  Takes an array of strings (in form {link:x, dest:y} and outputs them as an unordered list.
*/

function linksList(  ) {
	var links = [ 
		{ link:"./index.htm", 	 dest:"Home"},
		{ link:"./catalogue.htm",dest:"Gem Catalogue"},
		{ link:"./links.htm",  	 dest:"Links"},
		{ link:"./about.htm",	 dest:"About" },
		{ link:"./contact.htm",	 dest:"Contact Us"} ];

	var result = "<ul>\n";
    for(i=0;i<links.length; i++) {
		result += '<li> <a href="' + links[i].link + '"> '+ links[i].dest + "</a> </li>\n"; 
    }
    result += "</ul>\n";
    var element = document.getElementById("linkslist");
    element.innerHTML = result;
};

function gemTable() {
	
}