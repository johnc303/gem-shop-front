module.exports = {
	build: {
		options: {
			overwrite: false,
			sizes: [
				{ name: 'thumb', width: 120 },
				{ name: 'medium', width: 640 },
				{ name: 'large', width: 1024 }
			],
			customOut: [
				// draw a copywrite notice in the bottom-right corner 
				'-gravity', 'SouthEast', '-font', 'Arial', '-pointsize', '12',
				'-fill', '#445', '-draw', 'text 5,2 \'\u00A9\'',
				'-fill', '#ffe', '-draw', 'text 6,3 \'\u00A9\''
			]
		},
		files: [
			{
				expand: true,
				cwd: 'tmp/',
				src: ['img/**/*.jpg'],
				dest: 'dist/'
			}
		]
	}
};