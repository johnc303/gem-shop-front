/*
Carousel for gems for about page.
*/
var GEMS_CAROUSEL = {
	//John's conventional properties
	id: "GEMS_CAROUSEL handler",
	description: "handles loading and presentation of data, and interactions within.",

	_wrappedCatalogueData: [],

	init: function () {
		this._parseData();
		this._renderCarousel();
	},


	_parseData: function (){

		console.log("parsing GEMS_CATALOGUE");

		var _currData;
		for (i = 0; i < CATALOGUE_DATA.length; i++) {
			_currData = new _GemData(CATALOGUE_DATA[i]);
			this._wrappedCatalogueData.push( _currData ) ;
		}
		
	},


	_renderCarousel: function(){

		console.log("rendering GEMS_CAROUSEL");

	 	var _currData;
	 	var _output = "";
	 	var _carouselSize = 5;
		 	
	 	_output += '<ol class="carousel-indicators">';

	  	for (i=0; i < _carouselSize; i++){
	  		_currData = this._wrappedCatalogueData[i];
	  		_output += _currData.renderCarouselList(i);
	  	}

	  	_output += '</ol>';

	  	_output += '<div class="carousel-inner" role="listbox">';

	  	for (i=0; i < _carouselSize; i++){
	  		_currData = this._wrappedCatalogueData[i];
	  		_output += _currData.renderCarouselItem(i);
	  	}

	  	_output += "</div>";

	  _output += '<a class="left carousel-control" href="#gem-carousel" role="button" data-slide="prev">';
	  _output += '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>';
	  _output += '<span class="sr-only">Previous</span></a>';
	  _output += '<a class="right carousel-control" href="#gem-carousel" role="button" data-slide="next">';
	  _output += '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>';
	  _output += '<span class="sr-only">Next</span></a>';

		document.getElementById("gems-carousel").innerHTML = _output;
	},
	terminal:true
};


function _GemData ( gemInstance ) {
	this.gemId = gemInstance.gemId;
	this.gemType = gemInstance.gemType;
	this.carats = gemInstance.carats;
	this.cut = gemInstance.cut;
	this.color = gemInstance.color;
};

_GemData.prototype.renderCarouselList = function( index ) {
	
	var result = "";
	
	result += '<li data-target="#gems-carousel" data-slide-to="' + index + '"';
	if (index === 0) {
		result += 'class="active"';
	}
	result += "></li>";

	return result;
};

_GemData.prototype.renderCarouselItem = function(index) {
	
	var result = '<div class="item';

	if (index === 0) {
		result += " active";
	}

	result += '">';

	result +='<img src="./_img/Gem' + this.gemId + "/gem" + this.gemId + '_1.jpg" alt="' + this.gemType + '">';

	result += '<div class="carousel-caption">';

	result += "<h3>" + this.color + " " + this.gemType + "</h3>";

	result += "<p>" + this.carats + "ct " + this.cut + " cut</p>";

	result += "</div> </div>";

	return result;
};


/*

old static carousel html


<!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#gem-carousel" data-slide-to="0" class="active"></li>
    <li data-target="#gem-carousel" data-slide-to="1"></li>
    <li data-target="#gem-carousel" data-slide-to="2"></li>
    <li data-target="#gem-carousel" data-slide-to="3"></li>
    <li data-target="#gem-carousel" data-slide-to="4"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">

    <div class="item active">
      <img src="./_img/GemA/gemA_1.jpg" alt="Tourmaline">
      <div class="carousel-caption">
      <h3>Blue/Green Tourmaline</h3>
      <p>0.7ct Baguette cut</p>
      </div>
    </div>

    <div class="item">
      <img src="./_img/GemJ/20170419_125329.jpg" alt="Tourmaline">
    </div>

    <div class="item">
      <img src="./_img/Gemp/20170419_124821.jpg" alt="Tourmaline">
    </div>

    <div class="item">
      <img src="./_img/GemV/20170419_125123.jpg" alt="Tourmaline">
    </div>

    <div class="item">
      <img src="./_img/GemZ/20170419_124426.jpg" alt="Tourmaline">
    </div>

</div> 

*/

  