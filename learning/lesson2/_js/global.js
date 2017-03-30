function init() {
	/*
	var listItems = document.getElementsByClassName('listItem');
	var count = 0;
	while(count < listItems.length){
		var currItem = listItems[count];
		currItem.style.color = "red";
		count++;
	}
	*/
	var matchedElements = $("ul .listItem p.greenListItem");
	matchedElements.addClass("pinkListItem");
	matchedElements.hide(1000);
}

