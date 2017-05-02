var GEMS_TABLE = {
	//John's conventional properties
	id: "GEMS_TABLE handler",
	description: "handles loading and presentation of data, and interactions within.",

	_wrappedCatalogueData: [],

	init: function () {
		this._parseData();
		this._renderTable();
	},

	// Private
	
	_parseData: function (){

		console.log("parsing GEMS_CATALOGUE");

		var _currData;
		for (i = 0; i < CATALOGUE_DATA.length; i++) {
			_currData = new _GemData(CATALOGUE_DATA[i]);
			this._wrappedCatalogueData.push( _currData ) ;
		}
		
	},


	_renderTable: function(){

		console.log("rendering GEMS_TABLE");

	 	var _currData;
	 	var _output = "";
	  	for (i=0; i<this._wrappedCatalogueData.length; i++){
	  		_currData = this._wrappedCatalogueData[i];
	  		_output += _currData.render();
	  	}
		document.getElementById("gems-table-body").innerHTML = _output;
	},
	terminal: true
};

_GemData.prototype.render = function() {
	
	var result = "";
	
    result +=
       "<tr><td>" + this.gemId 
    + "</td><td>" + this.gemType
    + "</td><td>" + this.carats
    + "</td><td>" + this.cut
    + "</td><td>" + this.color
    + "</td><td>" + '<a href="./_img/Gem' + this.gemId + '/"> Images </a>' 
    + "</td></tr>";
	return result;
};
/* 

Copy-pasted from index.htm to retain atm.

<script type="text/javascript">
        function sortGemsByCarat( gems ) {
          gems.sort(
            function (aGem, bGem) {
             return aGem.carats -  bGem.carats;
        });
};
        function sortGemsByCut( gems ) {
                  gems.sort(
                    function (aGem, bGem) {
                     return aGem.cut >  bGem.cut;
                });
        };



          var gems = 
            [
            {gemId:"A",gemType:"Tourmaline",carats:0.7,cut:"Baguette",color:"Blue/Green"},
            {gemId:"B",gemType:"Tourmaline",carats:0.65,cut:"Baguette",color:"Olive Green"},
            {gemId:"C",gemType:"Tourmaline",carats:1.5,cut:"Baguette",color:"Light Blue/Green"},
            {gemId:"D",gemType:"Tourmaline",carats:0.75,cut:"Baguette",color:"Light Blue"},
            {gemId:"E",gemType:"Tourmaline",carats:1.45,cut:"Baguette",color:"Blue/Green"},
            {gemId:"F",gemType:"Tourmaline",carats:0.9,cut:"Oval",color:"Light Green"},
            {gemId:"G",gemType:"Tourmaline",carats:1,cut:"Oval",color:"Green"},
            {gemId:"H",gemType:"Tourmaline",carats:0.65,cut:"Baguette",color:"Light Green"},
            {gemId:"I",gemType:"Tourmaline",carats:0.7,cut:"Baguette",color:"Dark Green"},
            {gemId:"J",gemType:"Tourmaline",carats:0.75,cut:"Baguette",color:"Dark Green"},
            {gemId:"K",gemType:"Tourmaline",carats:1,cut:"Oval",color:"Light Green"},
            {gemId:"L",gemType:"Tourmaline",carats:1.95,cut:"Baguette",color:"Dichroic Green"},
            {gemId:"M",gemType:"Tourmaline",carats:1.95,cut:"Baguette",color:"Dichroic Gold"},
            {gemId:"N",gemType:"Tourmaline",carats:2,cut:"Baguette",color:"Green/Blue"},
            {gemId:"O",gemType:"Tourmaline",carats:2.25,cut:"Square",color:"Dark Yellow"},
            {gemId:"P",gemType:"Tourmaline",carats:2.45,cut:"Baguette",color:"Gold"},
            {gemId:"Q",gemType:"Tourmaline",carats:3.4,cut:"Baguette",color:"Gold Bicolour"},
            {gemId:"R",gemType:"Tourmaline",carats:4.3,cut:"Baguette",color:"Dark gold"},
            {gemId:"S",gemType:"Tourmaline",carats:0.8,cut:"Baguette",color:"Light Pink"},
            {gemId:"T",gemType:"Tourmaline",carats:1.1,cut:"Hexagon",color:"Gold"},
            {gemId:"U",gemType:"Tourmaline",carats:0.7,cut:"Round",color:"Pink"},
            {gemId:"V",gemType:"Tourmaline",carats:1.4,cut:"Square",color:"Pink"},
            {gemId:"W",gemType:"Tourmaline",carats:2.1,cut:"Square",color:"Purple"},
            {gemId:"X",gemType:"Tourmaline",carats:2.55,cut:"Square",color:"Purple/Red"},
            {gemId:"Y",gemType:"Tourmaline",carats:1,cut:"Square",color:"Light Pink"},
            {gemId:"Z",gemType:"Tourmaline",carats:1.95,cut:"Hexagon",color:"Gold/Orange"}
            ]; 
          
	         
          sortGemsByCut( gems );

          var result = "";
          for(var i = 0;i < gems.length; i++) {
          result += "<tr><td>" + gems[i].gemId + "</td><td>"
                            + gems[i].gemType + "</td><td>"
                            + gems[i].carats  + "</td><td>" 
                            + gems[i].cut  + "</td><td>"
                            + gems[i].color  + "</td><td>"
                            + '<a href="./_img/Gem' + gems[i].gemId + '/"> Images </a>' 
                            + "</td></tr>";  
          };
          
          document.getElementById("gems-table-body").innerHTML = result;
        </script>
          */

        
