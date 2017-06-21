/* var lightBoxOptions = {}; var lightBox = $( '.gallery a' ).simpleLightbox( lightBoxOptions ); */

$( function() {
	var $gallery = $( '.gallery a' ).simpleLightbox();

	$gallery.on( 'show.simplelightbox', function() {
		console.log( 'Request for showing' );
	} )
	.on( 'shown.simplelightbox', function() {
		console.log( 'Shown' );
	} )
	.on( 'close.simplelightbox', function() {
		console.log( 'Request for close' );
	} )
	.on( 'closed.simplelightbox', function() {
		console.log( 'Closed' );
	} )
	.on( 'change.simplelightbox', function() {
		console.log( 'Request for change' );
	} )
	.on( 'next.simplelightbox', function() {
		console.log( 'Request for next' );
	} )
	.on( 'prev.simplelightbox', function() {
		console.log( 'Request for prev' );
	} )
	.on( 'nextImageLoaded.simplelightbox', function() {
		console.log( 'Next image loaded' );
	} )
	.on( 'prevImageLoaded.simplelightbox', function() {
		console.log( 'Prev image loaded' );
	} )
	.on( 'changed.simplelightbox', function() {
		console.log( 'Image changed' );
	} )
	.on( 'nextDone.simplelightbox', function() {
		console.log( 'Image changed to next' );
	} )
	.on( 'prevDone.simplelightbox', function() {
		console.log( 'Image changed to prev' );
	} )
	.on( 'error.simplelightbox', function( error ) {
		console.log( 'No image found, go to the next/prev' );
		console.log( error );
	} );
} );