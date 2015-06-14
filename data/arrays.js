
//
// Node types:
// 
// 		Federation, FIFA Member, Marketing, Broadcasting, Sportswear, Co-Conspirator
// 
// 


var schemeA = { 
	"nodes": [
		["FIFA", 					{type: 'Federation', image: ''}], 
		["CONMEBOL Copa America", 	{type: 'Federation', image: ''}],
		["Traffic Brazil",			{type: 'Marketing', image: ''}], 
		["Traffic International",	{type: 'Marketing', image: ''}], 
		["Co-Conspirator #2",		{type: 'Co-Conspirator', image: ''}], 
		["Co-Conspirator #9",		{type: 'Co-Conspirator', image: ''}], 
		
		// "Co-Conspirator #2; Co-Conspirator 9",
		["Nicolas Leoz",   			{type: 'FIFA Member', image: 'images/actors/Nicolas_Leoz.jpg'}], 
		// "Traffic; Co-Conspirator #2",
		["Rafael Esquivel",			{type: 'FIFA Member', image: 'images/actors/Rafael_Esquivel.jpg'}], 
		["Alejandro Burzaco",		{type: 'FIFA Member', image: 'images/actors/Nicolas_Leoz.jpg'}], 
		["Co-Conspirator #10",		{type: 'Co-Conspirator', image: 'images/actors/Nicolas_Leoz.jpg'}], 
  	],
	"edges": [
		["FIFA", 				"CONMEBOL Copa America", {type: 'Basic', label: ''}],
		["Nicolas Leoz",		"CONMEBOL Copa America", {type: 'Basic', label: ''}],

		// THESE TWO NODES SHOULD GRAVITATE TOWARDS EACH OTHER
		["Traffic Brazil", 		"Traffic International", {type: 'Basic', label: ''}], 			//

		["Rafael Esquivel", 	"CONMEBOL Copa America", {type: 'Basic', label: ''}],
		["Traffic Brazil",  	"Co-Conspirator #2", 	 {type: 'Basic', label: ''}],
		["Traffic International","Co-Conspirator #9", 	 {type: 'Basic', label: ''}],

		// CONMEBOL == CONMEBOL Copa America
		["Traffic Brazil",			"CONMEBOL Copa America",{type: 'Marketing', label: '$1,700,000'}],
		["Traffic Brazil",			"CONMEBOL Copa America",{type: 'Marketing', label: '$6,600,000'}],

		["Traffic Brazil", 			"CONMEBOL Copa America",{type: 'Marketing', label: '$440,000'}],
		["Traffic International", 	"CONMEBOL Copa America",{type: 'Marketing', label: '$12,000,000'}],
		["Traffic International", 	"CONMEBOL Copa America",{type: 'Marketing', label: '$17,000,000'}],
		["Traffic International", 	"CONMEBOL Copa America",{type: 'Marketing', label: '$22,000,000'}],

		["Traffic International", 	"Rafael Esquivel",   	{type: 'Kickback', label: '$1,000,000'}],
		["Co-Conspirator #9", 		"Rafael Esquivel",     	{type: 'Kickback', label: '$700,000'}],
		
		// 6-7 figure digit payments, 11 GHOST LINES
		["Co-Conspirator #2", 		"Nicolas Leoz",    		{type: 'Kickback', label: '$X,000,000 (?)'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '- - - - -'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '- - - - -'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '- - - - -'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '- - - - -'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '- - - - -'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '- - - - -'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '- - - - -'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '- - - - -'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '- - - - -'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '- - - - -'}],

		// ? amounts, 7 GHOST LINES
		["Co-Conspirator #2", 		"Rafael Esquivel", 		{type: 'Kickback', label: '$1,000,000'}],
		["Co-Conspirator #2", 		"Rafael Esquivel",    	{type: 'Kickback', label: '$1,000,000'}],
		["Co-Conspirator #2", 		"Rafael Esquivel",     	{type: 'Kickback', label: '- - - - -'}],
		["Co-Conspirator #2", 		"Rafael Esquivel",     	{type: 'Kickback', label: '- - - - -'}],
		["Co-Conspirator #2", 		"Rafael Esquivel",     	{type: 'Kickback', label: '- - - - -'}],
		["Co-Conspirator #2", 		"Rafael Esquivel",     	{type: 'Kickback', label: '- - - - -'}],
		["Co-Conspirator #2", 		"Rafael Esquivel",     	{type: 'Kickback', label: '- - - - -'}],

		// 2 GHOST LINES
		["Co-Conspirator #2", 	"Alejandro Burzaco", 	{type: 'Kickback', label: ' - - - 7 figure bribe - - - '}],
		["Alejandro Burzaco", 	"Co-Conspirator #10", 	{type: 'Kickback', label: ' - - - 7 figure bribe - - - '}],	 
	]
};

var schemeB = { 
  	"nodes": [
		["FIFA",  				{type: 'Federation', image: ''}],
		["CONCACAF",			{type: 'Federation', image: ''}],
		["Traffic USA",			{type: 'Marketing', image: ''}],
		["Co-Conspirator #1",	{type: 'Co-Conspirator', image: ''}],
		["Jack Warner",			{type: 'FIFA Member', image: ''}],
	],
  	"edges": [
		["FIFA", "CONCACAF", 					{type: 'Basic', label: ''}],
		["Jack Warner", "CONCACAF", 			{type: 'Basic', label: ''}],
		["Traffic USA", "CONCACAF", 			{type: 'Marketing', label: '$9,750,000'}],
		["Traffic USA", "Co-Conspirator #1", 	{type: 'Kickback', label: '$200,000'}],
		["Co-Conspirator #1", "Jack Warner",    {type: 'Kickback', label: '$100,000'}],	
  	]
};

var schemeC = { 
  	"nodes": [
		["FIFA", 			{type: 'Federation', image: ''}],	
		["CONMEBOL", 		{type: 'Federation', image: ''}],
		["Sports Mkt Co A",	{type: 'Federation', image: ''}],
		["Grupo Sartander",	{type: 'Bank', image: ''}],	
		["Bridgestone", 	{type: 'Corporation', image: ''}],
		["Toyota", 			{type: 'Corporation', image: ''}],
		["Nicolas Leoz", 	{type: 'FIFA Member', image: ''}],
		["Co-Conspirator #5",{type: 'Co-Conspirator', image: ''}],
  	],
  	"edges": [
		["FIFA","CONMEBOL", 					{type: 'Basic', label: ''}],
		["CONMEBOL","Nicolas Leoz", 			{type: 'Basic', label: ''}],

		// Co-Conspirator #5 should be a SATELLITE NODE of Mkt Co A
		["Sports Mkt Co A", "Co-Conspirator #5",{type: 'Basic', label: ''}],
		
		// ["Toyota", "CONMEBOL",                	{type: 'Marketing', label: '$35,000,000'}],
		// ["Bridgestone", "Nicolas Leoz",      	{type: 'Marketing', label: '$57,000,000'}],

		["Toyota", "Sports Mkt Co A", 			{type: 'Marketing', label: '$35,000,000'}],
		["Bridgestone", "Sports Mkt Co A",      {type: 'Marketing', label: '$57,000,000'}],
		["Grupo Sartander", "Sports Mkt Co A",	{type: 'Marketing', label: '$40,000,000'}],


		["Sports Mkt Co A", "Nicolas Leoz",   	{type: 'Marketing', label: '$56,100,000'}],
		["Co-Conspirator #5", "Nicolas Leoz",  	{type: 'Kickback', label: '$2,000,000'}],
		["Co-Conspirator #5", "Nicolas Leoz",   {type: 'Kickback', label: '$400,000'}],
		["Co-Conspirator #5", "Nicolas Leoz",   {type: 'Kickback', label: '$400,000'}],
		["Co-Conspirator #5", "Nicolas Leoz",   {type: 'Kickback', label: '$400,000'}],
		["Co-Conspirator #5", "Nicolas Leoz",   {type: 'Kickback', label: '$400,000'}],
		["Co-Conspirator #5", "Nicolas Leoz",   {type: 'Kickback', label: '$400,000'}],
	]
};

var schemeD = { 
  	"nodes": [
		["FIFA", {type: 'Federation', image: ''}],	
		["Traffic", {type: 'Marketing', image: ''}],
		// "Traffic Brazil",

		["CBF", {type: 'Federation', image: ''}],	
		["Sports Marketing Company B", {type: 'Marketing', image: ''}],
		["Co-Conspirator #6", {type: 'Co-Conspirator', image: ''}],
		
		["Co-Conspirator #2", {type: 'Co-Conspirator', image: ''}],
		["Co-Conspirator #11",{type: 'Co-Conspirator', image: ''}],
		["Co-Conspirator #12",{type: 'Co-Conspirator', image: ''}],
		["Jose Maria Marin", {type: 'FIFA Member', image: ''}],
  	],
  	"edges" : [
  		["FIFA",  "CBF", 									{type: 'Basic', label: ''}],
  		["Traffic", "Sports Marketing Company B", 	{type: 'Basic', label: ''}],	// used tobe Traffic Brazil
  		
  		// SATELLITE NODE OF Traffic Intl
  		// [ "Traffic Brazil", "Traffic", 			{type: 'Basic', label: ''}],

  		// SATELLITE NODE
  		[ "Traffic", "Co-Conspirator #2", 			{type: 'Basic', label: ''}],

  		["Co-Conspirator #6", "Sports Marketing Company B",	{type: 'Basic', label: ''}],


  		["Sports Marketing Company B", "Co-Conspirator #2", {type: 'Marketing', label: '- - - ? - - -'}],		// assumed

  		// SATELLETINE NODES no edge in the future
  		["Jose Maria Marin", "Co-Conspirator #11", {type: 'Basic', label: ''}],
  		["Jose Maria Marin", "Co-Conspirator #12", {type: 'Basic', label: ''}],

		["Traffic", "CBF", {type: 'Marketing', label: ''}],
		["Sports Marketing Company B", "CBF", {type: 'Marketing', label: ''}],
		["Co-Conspirator #6", "CBF", {type: 'Kickback', label: ''}],
	
		["Co-Conspirator #2", "Jose Maria Marin", {type: 'Kickback', label: '$493,000'}],
		["Co-Conspirator #2", "Jose Maria Marin", {type: 'Kickback', label: '- - - $493,000 - - - '}],		// GHOST LINE
	]
};

var schemeE = { 
  	"nodes": [
		["FIFA", 					{type: 'Federation', image: ''}],	
		["Sportswear Company A", 	{type: 'Sportswear', image: ''}],	
		["CBF", 					{type: 'Federation', image: ''}],	
		["Traffic Brazil", 			{type: 'Marketing', image: ''}],	
		["Co-Conspirator #2", 		{type: 'Co-Conspirator', image: ''}],	
		["Co-Conspirator #11", 		{type: 'Co-Conspirator', image: ''}],	
  	],
	"edges" : [
		["FIFA","CBF", 	{type: 'Basic', label: ''}],		// assumed

		// SATELLITE
		["Co-Conspirator #2", "Traffic Brazil",  {type: 'Basic', label: ''}],		// assumed

		// SATELLITE!
		["Co-Conspirator #11", "CBF", 			{type: 'Basic', label: ''}],		// assumed

		["Sportswear Company A", "CBF", {type: 'Marketing', label: '$160,000,000'}],
		["Sportswear Company A", "Traffic Brazil", {type: 'Kickback', label: '$30,000,000'}],
		["Co-Conspirator #2", "Co-Conspirator #11", {type: 'Kickback', label: '$15,000,000'}],
		["Sportswear Company A", "Traffic Brazil", {type: 'Kickback', label: 'Termination'}],
	]
};

var schemeF = { 
	"nodes" : [
		["FIFA",			{type: 'Federation', image: ''}],
		["Traffic USA",		{type: 'Marketing', image: ''}],
		["Traffic",			{type: 'Marketing', image: ''}],
		["CFU",				{type: 'Federation', image: ''}],
		["Jack Warner",		{type: 'FIFA Member', image: ''}],
	],
	"edges" : [
		["FIFA",  "CFU", {type: 'Basic', label: ''}],	// assumed

		// put these close together
		["CFU",  "Jack Warner", {type: 'Basic', label: ''}],	// assumed

		["Traffic USA", "CFU", {type: 'Marketing', label: '$900,000'}],
		["Traffic USA", "Jack Warner", {type: 'Kickback', label: '$800,000'}],
		["Traffic", "Jack Warner", {type: 'Kickback', label: '$40,000'}],
		["Traffic", "CFU", {type: 'Marketing', label: '$2,200,000'}],
		["Traffic", "Jack Warner", {type: 'Kickback', label: '$800,000'}],
		["Traffic USA", "Jack Warner", {type: 'Kickback', label: '$40,000'}],
	]
};

var schemeG = { 
	"nodes" : [
		["FIFA", 				{type: 'Federation', image: ''}],
		["Morocco",				{type: 'Federation', image: ''}],
		["Co-Conspirator #1",	{type: 'Co-Conspirator', image: ''}],
		["South Africa",  		{type: 'Federation', image: ''}], //  Bid Committee & South African Governament",
		["CFU",					{type: 'Federation', image: ''}],
		["FIFA high ranking individual",	{type: 'FIFA Member', image: ''}],
		["CFU and CONCACAF",				{type: 'Federation', image: ''}],
		["Jack Warner",						{type: 'FIFA Member', image: ''}],
	],
	"edges" : [
		["FIFA",  "Morocco", {type: 'Basic', label: ''}],			// assumed
		["FIFA",  "CFU", {type: 'Basic', label: ''}],				// assumed
		["FIFA",  "CFU and CONCACAF", {type: 'Basic', label: ''}],	// assumed
		["FIFA",  "South Africa", {type: 'Basic', label: ''}],	// assumed
		
		// FIFA Satellite
		["FIFA", "FIFA high ranking individual", 	{type: 'Basic', label: ''}],	// assumed

		// Train tracks - not a kickback, it's DEVELOPMENT - more bening color YELLOW
		["FIFA high ranking individual", "South Africa", {type: 'Kickback', label: '$10,000,000'}],
		["FIFA high ranking individual", "CFU and CONCACAF", {type: 'Kickback', label: '$616,000'}],
		["FIFA high ranking individual", "CFU and CONCACAF", {type: 'Kickback', label: '$1,600,000'}],
		["FIFA high ranking individual", "CFU and CONCACAF", {type: 'Kickback', label: '$7,784,000'}],

		// CHANGE TYPE TO OFFERED BRIBE - horizontal slashes or dots
		["Morocco", "Co-Conspirator #1", {type: 'Offer', label: '$1,000,000'}],
		["South Africa", "CFU", {type: 'Kickback', label: '-'}],

		["CFU", "Jack Warner", {type: 'Kickback', label: '$200,000'}],
		["CFU", "Jack Warner", {type: 'Kickback', label: '$1,400,000'}],
		["CFU", "Co-Conspirator #1", {type: 'Kickback', label: '$298,500'}],
		["CFU", "Co-Conspirator #1", {type: 'Kickback', label: '$205,000'}],
		["CFU", "Co-Conspirator #1", {type: 'Kickback', label: '$250,000'}],
	]
};

// THIS NEEDS CLEANUP !!! 
var schemeH = { 
	"nodes" : [
		["FIFA",							{type: 'Federation', image: ''}],
		["Traffic USA",						{type: 'Marketing', image: ''}],
		["Costa Rican Soccer Federation",	{type: 'Federation', image: ''}],
		["Traffic; Co-Conspirator #4",		{type: 'Federation', image: ''}],
		["Eduardo Li",						{type: 'FIFA Member', image: ''}],
		["Nicaraguan Soccer Federation",	{type: 'Federation', image: ''}],
		["Julio Rocha; Co-Conspirator #18",	{type: 'FIFA Member', image: ''}],
	],
	"edges" : [
		["FIFA",  "Costa Rican Soccer Federation", {type: 'Basic', label: ''}],			// assumed
		["FIFA",  "Nicaraguan Soccer Federation", {type: 'Basic', label: ''}],			// assumed
		["FIFA",  "Eduardo Li", {type: 'Basic', label: ''}],										// assumed
		["FIFA",  "Julio Rocha; Co-Conspirator #18", {type: 'Basic', label: ''}],					// assumed

		["Traffic USA", "Costa Rican Soccer Federation", {type: 'Marketing', label: '$2,500,000'}],
		["Traffic; Co-Conspirator #4", "Eduardo Li", {type: 'Kickback', label: ''}],
		["Traffic USA", "Nicaraguan Soccer Federation", {type: 'Marketing', label: '$1,138,000'}],
		["Traffic; Co-Conspirator #4", "Julio Rocha; Co-Conspirator #18", {type: 'Kickback', label: '$150,000'}],
	]
};


var schemeI = { 
	"nodes" : [
		["FIFA",				{type: 'Federation', image: ''}],
		["Co-Conspirator #7",	{type: 'Co-Conspirator', image: ''}],
		["Jack Warner",			{type: 'FIFA Member', image: ''}],
		["CFU members",			{type: 'FIFA Member', image: ''}],
	],
	"edges" : [
		["FIFA",  "Jack Warner", {type: 'Basic', label: ''}],			// assumed
		["FIFA",  "CFU members", {type: 'Basic', label: ''}],			// assumed

		["Co-Conspirator #7", "Jack Warner", {type: 'Meeting Travel', label: '$363,537.98'}],
		["Jack Warner", "CFU members", {type: 'Kickback', label: '$40,000'}],
		["Co-Conspirator #7", "Jack Warner", {type: 'Kickback', label: '$1,211,980'}],
	]
};


// NEEDS CLEANUP - Should Company A remain a bank (Hong Kong)??
var schemeJ = { 
	"nodes" : [
		["FIFA",			{type: 'Federation', image: ''}],
		["Traffic USA",		{type: 'Marketing', image: ''}],
		["CFU",				{type: 'Federation', image: ''}],
		["Jeffrey Webb",	{type: 'FIFA Member', image: ''}],
		["Sports Marketing Company C; Conspirator #13, Co-Conspirator #20, and Co-Conspirator #21",	{type: 'Marketing', image: ''}],
		["Traffic USA; Co-Conspirator #4",	{type: 'Marketing', image: ''}],
		["Front Company A",	{type: 'Bank', image: ''}],
		["Costas Takkas",		{type: 'FIFA Member', image: ''}],
		["Co-Conspirator #22",	{type: 'Co-Conspirator', image: ''}],
		["Costas Takkas; Friend of Co-Conspirator #2",	{type: 'FIFA Member', image: ''}],
		["Sports Marketing Company C",	{type: 'Marketing', image: ''}],
		["?",	{type: 'Co-Conspirator', image: ''}],
	],
	"edges" : [
		["FIFA",  "CFU", {type: 'Basic', label: ''}],					// assumed
		["FIFA",  "Jeffrey Webb", {type: 'Basic', label: ''}],			// assumed
		["FIFA",  "Costas Takkas", {type: 'Basic', label: ''}],			// assumed
		["Traffic USA",  "Traffic USA; Co-Conspirator #4", {type: 'Basic', label: ''}],			// assumed

		["Traffic USA", "CFU", {type: 'Marketing', label: '$23,000,000'}],
		["Traffic USA", "Jeffrey Webb", {type: 'Kickback', label: '$3,000,000'}],
		["Sports Marketing Company C; Conspirator #13, Co-Conspirator #20, and Co-Conspirator #21", "Traffic USA; Co-Conspirator #4", {type: 'Kickback', label: '-'}],
		["Traffic USA", "Front Company A", {type: 'Kickback', label: '$1,200,000'}],
		["Front Company A", "Costas Takkas", {type: 'Kickback', label: '$750,000'}],
		["Front Company A", "Costas Takkas", {type: 'Kickback', label: '$250,000'}],
		["Front Company A", "Co-Conspirator #22", {type: 'Kickback', label: '$200,000'}],
		["Traffic USA", "Costas Takkas; Friend of Co-Conspirator #2", {type: 'Kickback', label: '$500,000'}],
		["Costas Takkas", "Jeffrey Webb", {type: 'Kickback', label: '-'}],
		["Costas Takkas", "Jeffrey Webb", {type: 'Kickback', label: '-'}],
		["Sports Marketing Company C", "?", {type: 'Kickback', label: '-'}],
	]
};

var schemeK = { 
	"nodes" : [
		["FIFA",					{type: 'Federation', image: ''}],
		["Traffic USA",				{type: 'Marketing', image: ''}],
		["CONCACAF",				{type: 'Federation', image: ''}],
		["Jeffrey Webb",			{type: 'FIFA Member', image: ''}], 
		["Co-Conspirator #2",		{type: 'Co-Conspirator', image: ''}],
		["Co-Conspirator #4",		{type: 'Co-Conspirator', image: ''}],	
		["Co-Conspirator #23",		{type: 'Co-Conspirator', image: ''}],
		// "Jeffrey Webb; Co-Conspirators #2",
		// "Traffic USA; ",
		["Soccer Uniform Company A", {type: 'Sportswear', image: ''}],//"Soccer Uniform Company A; Co-Conspirator #23",
	],
	"edges" : [
		["FIFA",  "CONCACAF", {type: 'Basic', label: ''}],							// assumed
		// ["CONCACAF",  "Jeffrey Webb", {type: 'Basic', label: ''}],					// assumed
		["Jeffrey Webb", "Co-Conspirator #2", {type: 'Basic', label: ''}],			// assumed
		// ["Traffic USA", "Co-Conspirator #4", {type: 'Basic', label: ''}],			// assumed
		["CONCACAF", "Co-Conspirator #4", {type: 'Basic', label: ''}],			// assumed
		["Soccer Uniform Company A", "Co-Conspirator #23", {type: 'Basic', label: ''}],

		["Traffic USA", "CONCACAF", {type: 'Marketing', label: '$15,500,000'}],
		["Traffic USA", "CONCACAF", {type: 'Marketing', label: '$60,000,000'}],
		// ["Traffic USA", "Jeffrey Webb", {type: 'Kickback', label: '-'}],		// sought and obtained
		["Traffic USA", "Soccer Uniform Company A", {type: 'Kickback', label: '$1,100,000'}],  //; Co-Conspirator #23 for TO
		["Traffic USA", "Soccer Uniform Company A", {type: 'Kickback', label: '$2,000,000'}],  //
		["Soccer Uniform Company A", "Jeffrey Webb", {type: 'Kickback', label: '$1,100,000'}],  //; Co-Conspirator #23 for TO
		["Soccer Uniform Company A", "Jeffrey Webb", {type: 'Kickback', label: '$2,000,000'}],  //
	]
};

// Needs cleanup baaad
var schemeL = { 
	"nodes" : [
		["FIFA",					{type: 'Federation', image: ''}],
		["Co-Conspirator #2",		{type: 'Co-Conspirator', image: ''}],	// (representing Traffic
		["CONMEBOL",				{type: 'Federation', image: ''}],
		["Datisan",					{type: 'Marketing', image: ''}],
		["?",						{type: 'Co-Conspirator', image: ''}],		// ?? type ??
		["Traffic International",	{type: 'Marketing', image: ''}],
		["Cross Trading",			{type: 'Bank', image: ''}],
		["FTP (Tornes Affiliate)",	{type: 'Bank', image: ''}],
		["CONMEBOL officials",		{type: 'FIFA Member', image: ''}],
		["Bayan Group S.A.",		{type: 'Bang', image: ''}],
		["Rafael Esquivel",			{type: 'FIFA Member', image: ''}],
		["Jose Margulies",			{type: 'FIFA Member', image: '', notes: 'Margulies Intermediaries'}],			 
		["Bayan Account controlled by Rafael Esquivel",	{type: 'Bank', image: ''}],		// bank or fifa member here?
		["CONCACAF",				{type: 'Federation', image: ''}],
		["Jeffrey Webb",			{type: 'FIFA Member', image: ''}],
	],
	"edges" : [
		["FIFA",  "CONMEBOL", {type: 'Basic', label: ''}],					// assumed
		["FIFA",  "CONCACAF", {type: 'Basic', label: ''}],					// assumed
		["CONMEBOL",  "Rafael Esquivel", {type: 'Basic', label: ''}],					// assumed
		["Traffic International",  "Co-Conspirator #2", {type: 'Basic', label: ''}],					// assumed

		["Co-Conspirator #2", "CONMEBOL", {type: 'Kickback', label: '$10,000,000'}],
		["Datisan", "CONMEBOL", {type: 'Marketing', label: '$317,500,000'}],
		["Datisan", "?", {type: 'Kickback', label: ''}],
		["Traffic International", "Cross Trading", {type: 'Kickback', label: '$5,000,000'}],
		["Traffic International", "FTP (Tornes Affiliate)", {type: 'Kickback', label: '$5,000,000'}],
		["Traffic International", "FTP (Tornes Affiliate)", {type: 'Kickback', label: '$1,666,667'}],
		["Datisan", "Cross Trading", {type: 'Kickback', label: '$1,667,000'}],
		["Datisan", "CONMEBOL officials", {type: 'Kickback', label: '-'}],
		["Bayan Group S.A.", "Rafael Esquivel", {type: 'Kickback', label: '$50,000'}],
		["Bayan Group S.A.", "Rafael Esquivel", {type: 'Kickback', label: '$250,000'}],
		["Bayan Group S.A.", "Rafael Esquivel", {type: 'Kickback', label: '$400,000'}],
		["Datisan", "Jose Margulies", {type: 'Kickback', label: '$3,800,000'}],
		["Jose Margulies", "Bayan Account controlled by Rafael Esquivel", {type: 'Kickback', label: '$2,000,000'}],
		["Datisan", "CONCACAF", {type: 'Marketing', label: '$35,000,000'}],
		["Datisan", "Jeffrey Webb", {type: 'Kickback', label: '-'}],
	]
};
