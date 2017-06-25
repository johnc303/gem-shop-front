module.exports = {
	build: {
		
		options: {
			prettify: true,
			type: ['jpg'],
			ext: { 
				level: 1
			}
		},

		files: [
			{
				src: ['dist/img/gem'],
				dest: 'tmp/img/images-raw.json'
			}
		]
	}
};