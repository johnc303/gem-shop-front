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
    var container = document.getElementById("linkslist");
    container.innerHTML = result;
}
/*
function linksList(  ) {
    var index = new linkObject( "./index.htm", "Home" );
    var catalogue = new linkObject("./catalogue.htm","Gem Catalogue");
    var links = new linkObject("./links.htm",  "Links");
    var about = new linkObject("./about.htm","About");
    var contact = new linkObject("./contact.htm","Contact Us");
    var navbarLinks =

	[ index, catalogue, links, about, contact ];

    console.log(navbarLinks.toString());
    var result = "<ul>\n";
    for(i=0;i<navbarLinks.length; i++) {
		result += '<li> <a href="' + navbarLinks.link + '"> '+ navbarLinks.text + "</a> </li>\n"; 
    }
    result += "</ul>\n";
    console.log("linksList: " + result);
    var container = document.getElementById("linkslist");
    container.innerHTML = result;
};
*/