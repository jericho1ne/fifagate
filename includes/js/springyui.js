/**
Copyright (c) 2010 Dennis Hotson

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
*/

(function() {

jQuery.fn.makeItSpringy = function(params) {
	var graph = this.graph = params.graph || new Springy.Graph();
	
	var nodeFont 	= "12px Open Sans, sans-serif";
	var faFontSm	= "12px FontAwesome";
	var faFontMd	= "20px FontAwesome";
	var faFontLg	= "24px FontAwesome";
	

	var edgeFont 	= "12px Open Sans, sans-serif";
	
	var stiffness = params.stiffness || 800.0;
	var repulsion = params.repulsion || 85.0;
	var damping = params.damping || 0.15;
	var minEnergyThreshold = params.minEnergyThreshold || 0.00001;
	
	var nodeSelected = params.nodeSelected || null;
	var nodeImages = {};

	// whether to redraw text when upside down
	var edgeLabelsUpright = true;

	var canvas = this[0];
	var ctx = canvas.getContext("2d");

	var layout = this.layout = new Springy.Layout.ForceDirected(graph, stiffness, repulsion, damping, minEnergyThreshold);

	// calculate bounding box of graph layout.. with ease-in
	var currentBB = layout.getBoundingBox();
	var targetBB = {bottomleft: new Springy.Vector(-2, -2), topright: new Springy.Vector(2, 2)};

	// auto adjusting bounding box
	Springy.requestAnimationFrame(function adjust() {
		targetBB = layout.getBoundingBox();
		// current gets 20% closer to target every iteration
		currentBB = {
			bottomleft: currentBB.bottomleft.add( targetBB.bottomleft.subtract(currentBB.bottomleft)
				.divide(100)),
			topright: currentBB.topright.add( targetBB.topright.subtract(currentBB.topright)
				.divide(100))
		};

		Springy.requestAnimationFrame(adjust);
	});

	// convert to/from screen coordinates
	var toScreen = function(p) {
		var size = currentBB.topright.subtract(currentBB.bottomleft);
		var sx = p.subtract(currentBB.bottomleft).divide(size.x).x * canvas.width;
		var sy = p.subtract(currentBB.bottomleft).divide(size.y).y * canvas.height;
		return new Springy.Vector(sx, sy);
	};

	var fromScreen = function(s) {
		var size = currentBB.topright.subtract(currentBB.bottomleft);
		var px = (s.x / canvas.width) * size.x + currentBB.bottomleft.x;
		var py = (s.y / canvas.height) * size.y + currentBB.bottomleft.y;
		return new Springy.Vector(px, py);
	};

	// half-assed drag and drop
	var selected = null;
	var nearest = null;
	var dragged = null;

	//============== CLICK AND DRAG LISTENER =================
	jQuery(canvas).mousedown(function(e) {
		var pos = jQuery(this).offset();
		var p = fromScreen({x: e.pageX - pos.left, y: e.pageY - pos.top});
		selected = nearest = dragged = layout.nearest(p);

		if (selected.node !== null) {
			dragged.point.m = 10000.0;

			if (nodeSelected) {
				nodeSelected(selected.node);
			}
		}

		renderer.start();
	});

	//============== DOUBLE CLICK LISTENER =================
	jQuery(canvas).dblclick(function(e) {
		var pos = jQuery(this).offset();
		var p = fromScreen({x: e.pageX - pos.left, y: e.pageY - pos.top});
		selected = layout.nearest(p);
		node = selected.node;

		console.log( ' (+) dblclicked on ' + node.id );

		if (node && node.data && node.data.ondoubleclick) {
			node.data.ondoubleclick();
		}
	});

	//============== SINGLE CLICK LISTENER =================
	jQuery(canvas).click(
		// TODO: toggle info window on / off
		function(e) {
			var pos = jQuery(this).offset();
			var p = fromScreen({x: e.pageX - pos.left, y: e.pageY - pos.top});
			nearest = layout.nearest(p);
			node = selected.node;
			
			// take the following UI action
			$('#notepad').html('<div class="legend-header">'+node.id + '</div>');

			if (node.data.notes !== undefined) {
				$('#notepad').append('<hr>');
				$('#notepad').append(node.data.notes);  
			}
			// console.log( ' (+) clicked ' + node.id );
	

			renderer.start();
		}
	);

	jQuery(canvas).mousemove(function(e) {
		var pos = jQuery(this).offset();
		var p = fromScreen({x: e.pageX - pos.left, y: e.pageY - pos.top});
		nearest = layout.nearest(p);

		if (dragged !== null && dragged.node !== null) {
			dragged.point.p.x = p.x;
			dragged.point.p.y = p.y;
		}

		renderer.start();
	});

	jQuery(window).bind('mouseup',function(e) {
		dragged = null;
	});


	//=================================================================================
	//
	//		getTextWidth
	//
	//=================================================================================
	var getTextWidth = function(node) {
		var text = (node.data.label !== undefined) ? node.data.label : node.id;
		if (node._width && node._width[text])
			return node._width[text];

		ctx.save();

		//============================== FONT SIZE (Doesn't do shit)
		ctx.font = nodeFont;
		
		//======================== WIDTH OF NODE DIV
		var width = ctx.measureText(text).width;
		ctx.restore();

		node._width || (node._width = {});
		node._width[text] = width;

		return width;
	};

	//=================================================================================
	//
	//		getTextHeight (affects font size)
	//
	//=================================================================================
	var getTextHeight = function(node) {
		var textHeight = 22;

		if (node.id=="FIFA") {
			textHeight = nodeFont = 24;
		}
		else {
			textHeight = nodeFont = 18;	
		}
	
		//console.log(" >> " + textHeight);
		return textHeight;
		// In a more modular world, this would actually read the font size, but I think leaving it a constant is sufficient for now.
		// If you change the font size, I'd adjust this too.
	};

	//=================================================================================
	//
	//		getImageWidth
	//
	//=================================================================================
	var getImageWidth = function(node) {
		var width = (node.data.image.width !== undefined) ? node.data.image.width : nodeImages[node.data.image.src].object.width;
		return width;
	}

	//=================================================================================
	//
	//		getImageHeight
	//
	//=================================================================================
	var getImageHeight = function(node) {
		var height = (node.data.image.height !== undefined) ? node.data.image.height : nodeImages[node.data.image.src].object.height;
		return height;
	}

	//=================================================================================
	//
	//		Node.prototype.getHeight
	//
	//=================================================================================
	Springy.Node.prototype.getHeight = function() {
		var height;
		
		if (this.data.image == undefined) {
			height = getTextHeight(this);
		} 
		else {
			if (this.data.image.src in nodeImages && nodeImages[this.data.image.src].loaded) {
				height = getImageHeight(this);
			} 
			else {
				height = 20;
			}
		}
		return height;
	}

	//=================================================================================
	//
	//		Node.prototype.getWidth
	//
	//=================================================================================
	Springy.Node.prototype.getWidth = function() {
		var width;

		// if working with text boxes
		if (this.data.image == undefined) {
			width = getTextWidth(this);
			
		} 
		// images case
		else {
			if (this.data.image.src in nodeImages && nodeImages[this.data.image.src].loaded) {
				width = getImageWidth(this);
			} 
			else {
				width = 10;
			}
			
		}

		return width;
	}

	//=================================================================================
	//
	//		Springy.Renderer
	//
	//=================================================================================
	var renderer = this.renderer = new Springy.Renderer(layout,
		function clear() {
			ctx = canvas.getContext("2d");
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		},

		//=================================================================================
		//
		//		Springy.drawEdge
		//
		//=================================================================================
		function drawEdge(edge, p1, p2) {
			var x1 = toScreen(p1).x;
			var y1 = toScreen(p1).y;
			var x2 = toScreen(p2).x;
			var y2 = toScreen(p2).y;

			var direction = new Springy.Vector(x2-x1, y2-y1);
			var normal = direction.normal().normalise();

			var from = graph.getEdges(edge.source, edge.target);
			var to = graph.getEdges(edge.target, edge.source);

			var total = from.length + to.length;

			// Figure out edge's position in relation to other edges between the same nodes
			var n = 0;
			for (var i=0; i<from.length; i++) {
				if (from[i].id === edge.id) {
					n = i;
				}
			}

			// Space out edge text to avoid overlaps
			var spacing = 22.0;

			//============================= HOW FAR OFF NODE CENTER TO DRAW THE VECTOR / EDGE
			var offset = normal.multiply(-((total - 1) * spacing)/3.0 + (n * spacing));
			//========================================================================== Node spacing/diameter
			var s1 = toScreen(p1).add(offset);
			var s2 = toScreen(p2).add(offset);

			var boxWidth = edge.target.getWidth();
			var boxHeight = edge.target.getHeight();

			var multiplier = 2;
			var intersection = intersect_line_box(s1, s2, {x: x2-boxWidth/multiplier, y: y2-boxHeight/multiplier}, boxWidth, boxHeight);

			if (!intersection) {
				intersection = s2;
			} 

			// =================== EDGE COLOR =================
			// Default edge color: dk gray
			var stroke = fontColor= 'rgba(60, 60, 60, 0.65)';
			var labelText = '';

			//================FONT COLOR /  EDGE TEXT / EDGE LABEL TEXT ============================ 
			if (edge.data.type !== undefined) {	
				//console.log(edge.data.type);

				// Color
				stroke = fontColor = vectorTypes[edge.data.type].color;
			
				// Connection Icon
				labelText += vectorTypes[edge.data.type].unicode;
			}

			// ============================ EDGE WEIGHT + ARROW STYLING ===============
			var arrowTipWidth;
			var arrowTipLength;

			// SET EDGE THICKNESS
			var edgeThickness = 0.5;			
			
			labelText += ' ' + edge.data.label;
			
			// currency > int conversion
			var labelTextInt = Number(edge.data.label.replace(/[^0-9\.]+/g,""));

			// =====================  EDGE THICKNESS AND DISPLACEMENT
			var displacement = -1;

			// normalized categories
			if (labelTextInt >= 0 && labelTextInt < 50000) {		
				edgeThickness = 1.5;
				displacement = -2;
			}
			else if (labelTextInt >= 50000 && labelTextInt < 500000) {		
				edgeThickness = 2.25;
				displacement = -3.5;
			}
			else if (labelTextInt >= 500000 && labelTextInt < 1000000) {		
				edgeThickness = 3.75;
				displacement = -4;
			}
			else if (labelTextInt >= 1000000 && labelTextInt < 5000000) {		
				edgeThickness = 5.25;
				displacement = -5.5;
			}
			else if (labelTextInt >= 5000000 && labelTextInt < 10000000) {		
				edgeThickness = 7.25;
				displacement = -6;
			}
			else if (labelTextInt >= 10000000 && labelTextInt < 50000000) {		
				edgeThickness = 9.25;
				displacement = -6.5;
			}
			else if (labelTextInt >= 50000000) {						
				edgeThickness = 12.25;
				displacement = -7;
			}
			var weight = (edge.data.weight !== undefined) ? edge.data.weight : 1.0;

			ctx.lineWidth = Math.max(weight * edgeThickness, 0.001);
			arrowTipWidth = ctx.lineWidth + 4;
			arrowTipLength = 18;

			// original case check, we never pass in directional though
			var directional = (edge.data.directional !== undefined) ? edge.data.directional : true;

			// decide if arrow gets drawn based on Edge Type (Basic == no arrow)
			directional = (edge.data.type=="Basic" ? 0 : 1);

			// line
			var lineEnd;
			if (directional) {
				// Distance of arrow tip from edge line
				lineEnd = intersection.subtract(direction.normalise().multiply(arrowTipLength * 1.01));
			} else {
				lineEnd = s2;  //s2;
			}

			ctx.strokeStyle = stroke;
			ctx.beginPath();

			var edgePadX = 10;
			var edgePadY = 10;

			ctx.moveTo(s1.x, s1.y);
			ctx.lineTo(lineEnd.x, lineEnd.y);
			ctx.lineCap = 'round';
			ctx.stroke();

			// arrow
			if (directional) {
				ctx.save();
				ctx.fillStyle = stroke;
				ctx.translate(intersection.x, intersection.y);
				ctx.rotate(Math.atan2(y2 - y1, x2 - x1));
				ctx.beginPath();
				ctx.moveTo(-arrowTipLength, arrowTipWidth);
				ctx.lineTo(0, 0);
				ctx.lineTo(-arrowTipLength, -arrowTipWidth);
				ctx.lineTo(-arrowTipLength * 0.8, -0);
				ctx.closePath();
				ctx.fill();
				ctx.restore();
			}

			// ============================== EDGE LABEL TEXT (ICON + $ AMOUN===================
			if (labelText !== undefined) {				
				ctx.save();
				ctx.textAlign = "center";
				ctx.textBaseline = "top";
				ctx.font = faFontSm;  // edgeFont;
				ctx.fillStyle = fontColor;
				var angle = Math.atan2(s2.y - s1.y, s2.x - s1.x);

				// ============================= FONT PLACEMENT IN RELATIONSHIP TO EDGE
				
				// if flipped
				if (edgeLabelsUpright && (angle > Math.PI/2 || angle < -Math.PI/2)) {
					//displacement = -2;
					angle += Math.PI;
				}
				
				var textPos = s1.add(s2).divide(2).add(normal.multiply(displacement));
				ctx.translate(textPos.x, textPos.y);
				ctx.rotate(angle);

				//				   		x  y
				ctx.fillText(labelText, 0, 4);
				ctx.restore();
			}

		},

		//=================================================================================
		//
		//		Springy.drawNode
		//
		//=================================================================================
		function drawNode(node, p) {
			var s = toScreen(p);

			ctx.save();

			// =============== NODE PADDING ==========================================================
			// Pulled out the padding aspect so that the size functions could be used in multiple places
			// These should probably be settable by the user (and scoped higher) but this suffices for now
			var paddingX = paddingY = 20;

			var contentWidth = node.getWidth();
			var contentHeight = node.getHeight();
			var boxWidth = contentWidth + paddingX ;
			var boxHeight = contentHeight + paddingY;

			// Add a fill behding node text
			// ctx.clearRect(s.x - boxWidth/2, s.y - boxHeight/2, boxWidth, boxHeight);

			// ============ NODE FILL BACKGROUND COLOR =====================================
			
			// SELECTED
			if (selected !== null && selected.node !== null && selected.node.id === node.id) {
				ctx.fillStyle = 'rgba(255, 123, 0, 0.65)';
			} 
			//else if (nearest !== null && nearest.node !== null && nearest.node.id === node.id) {
		//		ctx.fillStyle = 'rgba(200, 200, 200, 0.45)';
	//		} 
			else {
				ctx.fillStyle = 'rgba(200, 200, 200, 0.55)';
			}
			
			// Old rectangular background
			// ctx.fillRect(s.x - boxWidth/2, s.y - boxHeight/2, boxWidth, boxHeight);

			ctx.textAlign 		= "left";
			ctx.textBaseline 	= "top";
			ctx.font = (node.data.font !== undefined) ? node.data.font : nodeFont;

			// ===================== NODE FONT COLOR
			var nodeColor = "#333333";
			


			// =============================== ACTOR NODE ICON ====================================
			// 		(Federation, FIFA Member, Marketing, Broadcasting, Sportswear, Co-Conspirator)
			var labelText = actorTypes[node.data.type].unicode;  //  node.id;


			//console.log(" >> image : " + node.data.image);
			//console.log("   >> content W / H : " + contentWidth + ', '+ contentHeight);
			// console.log("   >> s.x / s.y : " + s.x + ', '+ s.y);
			

			//============================================================= DRAW A BUBBLE! ++++++++++++++++
			// DEFAULTS
			var radius = 22;	
			ctx.font = faFontLg; 
			// Where to anchor the Actor to the Node
			var anchorX = s.x - contentWidth/2 + 11;
			var anchorY = s.y - contentHeight/2 + 11;

			// override for special cases
			if (node.data.type=="Co-Conspirator") {
			    radius = 16;	
			    ctx.font = faFontMd;
			    ctx.fillStyle = 'rgba(255,255,255,0.02)'; 
			}

			
			ctx.beginPath();
		    ctx.arc(anchorX, anchorY, radius, 0, 2 * Math.PI, false);
		    //ctx.fillStyle = '#eee';    // ctx.fillStyle = 'rgba(147, 147, 147, 0.25)';
		    ctx.fill();
		    
		    // ======================================================== DISPLAY NODE TEXT ===============
		   
			
		    ctx.lineWidth = 0.5;
		    ctx.strokeStyle = 'rgba(200,200,200,0.15)';
		    ctx.stroke();
		    ctx.fillStyle = nodeColor;
			// print text within at x,y position
			ctx.fillText(labelText, anchorX-11, anchorY-11);


 			ctx.font = edgeFont;  // edgeFont;
		    ctx.lineWidth = 0.5;
		    ctx.strokeStyle = 'rgba(200,200,200,0.15)';
		    ctx.stroke();
		    ctx.fillStyle = nodeColor;
			// print NODE NAME within at x,y position
			ctx.fillText(node.id, anchorX+16, anchorY-4)
		
			
			// only draw image if defined in array 
			if (node.data.image !== undefined) {
				//console.log(">???");
				// console.log( " NODE :: else" );
				// Currently we just ignore any labels if the image object is set. One might want to extend this logic to allow for both, or other composite nodes.
				var src = node.data.image.src;  // There should probably be a sanity check here too, but un-src-ed images aren't exaclty a disaster.
				if (src in nodeImages) {
					if (nodeImages[src].loaded) {
						// Our image is loaded, so it's safe to draw
						ctx.drawImage(nodeImages[src].object, s.x - contentWidth/2, s.y - contentHeight/2, contentWidth, contentHeight);
					}
				}
				else{
					// First time seeing an image with this src address, so add it to our set of image objects
					// Note: we index images by their src to avoid making too many duplicates
					nodeImages[src] = {};
					var img = new Image();
					nodeImages[src].object = img;
					img.addEventListener("load", function () {
						// HTMLImageElement objects are very finicky about being used before they are loaded, so we set a flag when it is done
						nodeImages[src].loaded = true;
					});
					img.src = src;
				}
			}
			ctx.restore();
		}
	);
	renderer.start();

	// helpers for figuring out where to draw arrows

	//***************************************************
	//
	//***************************************************
	function intersect_line_line(p1, p2, p3, p4) {
		var denom = ((p4.y - p3.y)*(p2.x - p1.x) - (p4.x - p3.x)*(p2.y - p1.y));

		// lines are parallel
		if (denom === 0) {
			return false;
		}

		var ua = ((p4.x - p3.x)*(p1.y - p3.y) - (p4.y - p3.y)*(p1.x - p3.x)) / denom;
		var ub = ((p2.x - p1.x)*(p1.y - p3.y) - (p2.y - p1.y)*(p1.x - p3.x)) / denom;

		if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
			return false;
		}

		return new Springy.Vector(p1.x + ua * (p2.x - p1.x), p1.y + ua * (p2.y - p1.y));
	}

	//***************************************************
	//
	//***************************************************
	function intersect_line_box(p1, p2, p3, w, h) {
		var tl = {x: p3.x, y: p3.y};
		var tr = {x: p3.x + w, y: p3.y};
		var bl = {x: p3.x, y: p3.y + h};
		var br = {x: p3.x + w, y: p3.y + h};

		var result;
		if (result = intersect_line_line(p1, p2, tl, tr)) { return result; } // top
		if (result = intersect_line_line(p1, p2, tr, br)) { return result; } // right
		if (result = intersect_line_line(p1, p2, br, bl)) { return result; } // bottom
		if (result = intersect_line_line(p1, p2, bl, tl)) { return result; } // left

		return false;
	}

	return this;
}

})();
