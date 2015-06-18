
//**********************************************************************
//	Name:  		parseURL()
// 	Purpose: 	Redirect browser to appropriate website section
//**********************************************************************
function parseURL() {
	var page_title = location.href; // location.pathname; //.match(/\/page\/(.*)/)[1];
	var chunks = page_title.split("#");
	
	// Parse # from URL
	if (chunks.length > 1) {
		var schemeLetter = chunks[1];
		return schemeLetter;
	}// End if hashtag exists in URL
	// Load A by default
	else {
		return "A";	
	}
}


//**********************************************************************
//	Name:  		parseURL()
// 	Purpose: 	Redirect browser to appropriate website section
//**********************************************************************
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
				'<div class="legend-square" style="background-color:'+ val.color +';">----</div> '+
				//'<i class="fa ' + val.icon + ' faIcon"></i>' + 
				'<span class="legend-text">' + key + '</span>'+
			'</li>'
		);
	}); 

}

//**********************************************************************
//	Name:  		loadScheme()
// 	Purpose: 	
//**********************************************************************
function loadScheme(letter) {
	// Graph init
	var graph = new Springy.Graph();

	$("#schemeTitle").text("Scheme " + letter);

	// clear anything that may be left in the notepad
	$("#notepad").html("");

	if (schemes[letter] != '') {
		$("#notepad").html(schemes[letter]);
		$('#notepad').show();
	}
	else {
		$('#notepad').hide();
	}
	switch(letter) {
	    case "A":
	    	graph.loadJSON(schemeA);
	        break;
	    case "B":
	        graph.loadJSON(schemeB);
	        break;
	    case "C":
	        graph.loadJSON(schemeC);
	        break;
	    case "D":
	        graph.loadJSON(schemeD);
	        break;
	    case "E":
	        graph.loadJSON(schemeE);
	        break; 
	    case "F":
	        graph.loadJSON(schemeF);
	        break;
	    case "G":
	        graph.loadJSON(schemeG);
	        break;
	    case "H":
	        graph.loadJSON(schemeH);
	        break;
	    case "I":
	        graph.loadJSON(schemeI);
	        break;
	    case "J":
	        graph.loadJSON(schemeJ);
	        break;  
	    case "K":
	        graph.loadJSON(schemeK);
	        break; 
		case "L":
	        graph.loadJSON(schemeL);
	        break;
	    default:
	}

	var springy = jQuery('#springydemo').makeItSpringy({
		graph: graph
	});	
}



function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


