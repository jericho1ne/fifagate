
function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function loadLegend() {


	$.each( actorTypes, function( key, val ) {
		$("#actorsLegend").append(
			'<li>'+
				'<i class="fa ' + val.icon + ' faIcon"></i>' + 
				'<span class="legend-text">' + key + '</span>' +
			'</li>');
	});



	$.each( vectorTypes, function( key, val ) {
		$("#vectorsLegend").append(
			'<li>'+
				'<div class="legend-square" style="background-color:'+ val.color +';">&nbsp;&nbsp;&nbsp;&nbsp;</div> '+
				'<i class="fa ' + val.icon + ' faIcon"></i>' + 
				'<span class="legend-text">' + key + '</span>'+
			'</li>'
		);
	}); 

}
