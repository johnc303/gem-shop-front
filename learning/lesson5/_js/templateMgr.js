var TEMPLATE_MANAGER = {
	//John's conventional properties
	id: "Template manager",
	description: "handles loading and presentation of templates",

	_templateData: {},
	_templatePath: "templates/",

	renderTemplate: function( _targetId, _templateName, _data ) {
		if( this._templateData[_templateName] ) {
			this._renderTemplate( _targetId, _templateName, _data );
		} else {
			this._loadTemplate( _targetId, _templateName, _data );
		}

	},

	addTemplateData: function( _templateName, _templateContent ) {
		this._templateData[_templateName] = _templateContent;
	},


	_renderTemplate: function( _targetId, _templateName, _data ) {

		// alert( "renderTemplate: " + _templateName );
		var _handlebarsTemplate = Handlebars.compile(this._templateData[_templateName]);
		var _templateHTML = _handlebarsTemplate(_data);
		$("#" + _targetId).html( _templateHTML );
	},


	_loadTemplate: function( _targetId, _templateName, _contentData ) {
		
		var jqxhr = $.ajax( this._templatePath + _templateName )
		  .done(function(_templateData) {

			TEMPLATE_MANAGER.addTemplateData( _templateName, _templateData )
			TEMPLATE_MANAGER.renderTemplate( _targetId, _templateName, _contentData );

		  })
		  .fail(function() {
		    console.log( "template error: " + _templateName  );
		  });
		/*  .always(function() {
		    alert( "complete: " + _templateName );
		  });

		  */
	},


	terminal:true
}