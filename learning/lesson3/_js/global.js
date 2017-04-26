function sortGemsByCarat( var gems ) {
	gems.sort(
		function (aGem, bGem) {
			return aGem.carats -  bGem.carats;
		});
}

