function init() {
};
var navbarLinks =

    [ "./index.htm",
      "./catalogue.htm",
      "./links.htm",
      "./about.htm",
      "./contact.htm" ];

/*
  tableHeaderAnchors( headers )
  Takes an array of strings and outputs them as a table header row  

*/
function tableHeaderAnchors( headers ) {

    var result = "<tr> ";
    for(i=0;i<headers.length; i++) {
	result += '<th><a href="' + headers[i] + ">" + headers[i].slice(-4).  + "</a></th>";
    }
    result += "</tr>";
    return result;
}
