
function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function loadLegend() {
	$.each( vectorTypes, function( key, rgbColor ) {
		$("#vectorsLegend ul").append('<li><span class="legend-square"></span><span style="background-color:'+ rgbColor +';">'+ key +'</span></li>');
	}); 



	$.each( actorTypes, function( key, rgbColor ) {
		$("#actorsLegend ul").append('<li><span class="legend-square"/><span style="background-color:'+ rgbColor +';">'+ key +'</span></li>');
	});

}
