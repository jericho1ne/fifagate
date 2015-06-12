var schemeA = { 
	"nodes": [
		// ["FIFA", {image: 'fifa-sm.jpg', type: 'International'}],
		"FIFA",
		"CONMEBOL Copa America",
		"Traffic Brazil",
		"Traffic International",
		"Co-Conspirator #2",
		"Co-Conspirator #9",
		"Co-Conspirator #2; Co-Conspirator 9",
		"Nicolas Leoz",   
		"Traffic; Co-Conspirator #2",
		"Rafael Esquivel",
		"Co-Conspirator #10; Alejandro Burzaco",
  	],
	"edges": [
		["FIFA","CONMEBOL Copa America", {type: 'Basic', label: ''}],
		["Rafael Esquivel", "CONMEBOL Copa America", {type: 'Basic', label: ''}],
		["Nicolas Leoz", "CONMEBOL Copa America", {type: 'Basic', label: ''}],
		["Traffic Brazil",			"CONMEBOL Copa America",{type: 'Marketing', label: '$1,700,000'}],
		["Traffic Brazil",			"CONMEBOL Copa America",{type: 'Marketing', label: '$6,600,000'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",    		{type: 'Kickback', label: '-?-'}],
		["Traffic Brazil", 			"CONMEBOL Copa America",{type: 'Marketing', label: '$440,000'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '-?-'}],
		["Traffic International", 	"CONMEBOL Copa America",{type: 'Marketing', label: '$12,000,000'}],
		["Traffic International", 	"CONMEBOL Copa America",{type: 'Marketing', label: '$17,000,000'}],
		["Traffic International", 	"CONMEBOL Copa America",{type: 'Marketing', label: '$22,000,000'}],
		["Traffic; Co-Conspirator #2", "Rafael Esquivel",   {type: 'Kickback', label: '$1,000,000'}],
		["Co-Conspirator #9", 		"Rafael Esquivel",     	{type: 'Kickback', label: '$700,000'}],
		["Co-Conspirator #2; Co-Conspirator 9", "Rafael Esquivel", 	{type: 'Kickback', label: '$1,000,000'}],
		["Co-Conspirator #2", 	"Co-Conspirator #10; Alejandro Burzaco", {type: 'Kickback', label: '-?-'}],
	]
};

var schemeB = { 
  	"nodes": [
		"FIFA", 
		"CONCACAF",
		"Traffic USA",
		"Co-Conspirator #1",	
		"Jack Warner",
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
		"FIFA", 			// {image: 'data/images/fifa-sm.jpg'}],
		"CONMEBOL", 		// 		{image: 'fifa-sm.jpg', type: 'International'}],
		"Sports Mkt Co A",
		"Grupo Sartander",	
		"Bridgestone", 
		"Toyota", 
		"Nicolas Leoz", 
		"Co-Conspirator #5"
  	],
  	"edges": [
		["FIFA","CONMEBOL", 					{type: 'Basic', label: ''}],
		["CONMEBOL","Nicolas Leoz", 			{type: 'Basic', label: ''}],
		["Toyota", "CONMEBOL",                	{type: 'Marketing', label: '$35,000,000'}],
		["Sports Mkt Co A", "Grupo Sartander",	{type: 'Marketing', label: '$40,000,000'}],
		["Bridgestone", "Nicolas Leoz",      	{type: 'Marketing', label: '$57,000,000'}],
		["Sports Mkt Co A", "Nicolas Leoz",   	{type: 'Marketing', label: '$56,100,000'}],
		["Co-Conspirator #5", "CONMEBOL",     	{type: 'Kickback', label: '$2,000,000 USD'}],
		["Co-Conspirator #5", "CONMEBOL",     	{type: 'Kickback', label: '$400,000 USD'}],
		["Co-Conspirator #5", "CONMEBOL",     	{type: 'Kickback', label: '$400,000 USD'}],
		["Co-Conspirator #5", "CONMEBOL",     	{type: 'Kickback', label: '$400,000 USD'}],
		["Co-Conspirator #5", "CONMEBOL",     	{type: 'Kickback', label: '$400,000 USD'}],
		["Co-Conspirator #5", "CONMEBOL",     	{type: 'Kickback', label: '$400,000 USD'}],
	]
};

var schemeD = { 
  	"nodes": [
		"FIFA", 
		"Traffic",
		"CBF",
		"Sports Marketing Company B",
		"Co-Conspirator #6",
		"Traffic Brazil",
		"Co-Conspirator #2",
		"Jose Maria Marin; Co-Conspirator #11; Co-Conspirator #12",
  	],
  	"edges" : [
  		["FIFA",  "CBF", {type: 'Basic', label: ''}],
		["Traffic", "CBF", {type: 'Marketing', label: ''}],
		["Sports Marketing Company B", "Co-Conspirator #2", {type: 'Basic', label: ''}],		// assumed

		["Sports Marketing Company B", "CBF", {type: 'Marketing', label: ''}],
		["Co-Conspirator #6", "CBF", {type: 'Kickback', label: ''}],
		["Sports Marketing Company B", "Traffic Brazil", {type: '', label: ''}],
		["Co-Conspirator #2", "Jose Maria Marin; Co-Conspirator #11; Co-Conspirator #12", {type: 'Kickback', label: '$493,000'}],
	]
};

var schemeE = { 
  	"nodes": [
		"FIFA",
		"Sportswear Company A",
		"CBF",
		"Traffic Brazil",
		"Co-Conspirator #2",
		"Co-Conspirator #11",
  	],
	"edges" : [
		["FIFA","CBF", 	{type: 'Basic', label: ''}],		// assumed
		["Co-Conspirator #2", "Traffic Brazil", 	{type: 'Basic', label: ''}],		// assumed

		["Sportswear Company A", "CBF", {type: 'Marketing', label: '$160,000,000'}],
		["Sportswear Company A", "Traffic Brazil", {type: 'Kickback', label: '$30,000,000'}],
		["Co-Conspirator #2", "Co-Conspirator #11", {type: 'Kickback', label: '$15,000,000'}],
		["Sportswear Company A", "Traffic Brazil", {type: 'Kickback', label: 'Termination'}],
	]
};

var schemeF = { 
	"nodes" : [
		"FIFA",
		"Traffic USA",
		"CFU",
		"Jack Warner",
		"Traffic",
	],
	"edges" : [
		["FIFA",  "Jack Warner", {type: 'Basic', label: ''}],	// assumed

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
		"FIFA",
		"Morocco",
		"Co-Conspirator #1",
		"South Africa Bid Committee & South African Governament",
		"CFU",
		"FIFA high ranking individual",
		"CFU and CONCACAF",
		"Jack Warner",
	],
	"edges" : [
		["FIFA",  "Morocco", {type: 'Basic', label: ''}],			// assumed
		["FIFA",  "CFU", {type: 'Basic', label: ''}],				// assumed
		["FIFA",  "CFU and CONCACAF", {type: 'Basic', label: ''}],	// assumed

		["Morocco", "Co-Conspirator #1", {type: 'Kickback', label: '-'}],
		["South Africa Bid Committee & South African Governament", "CFU", {type: 'Kickback', label: '-'}],
		["FIFA high ranking individual", "CFU and CONCACAF", {type: 'Kickback', label: '$616,000'}],
		["FIFA high ranking individual", "CFU and CONCACAF", {type: 'Kickback', label: '$1,600,000'}],
		["FIFA high ranking individual", "CFU and CONCACAF", {type: 'Kickback', label: '$7,784,000'}],
		["CFU", "Jack Warner", {type: 'Kickback', label: '$200,000'}],
		["CFU", "Jack Warner", {type: 'Kickback', label: '$1,400,000'}],
		["CFU", "Co-Conspirator #1", {type: 'Kickback', label: '$298,500'}],
		["CFU", "Co-Conspirator #1", {type: 'Kickback', label: '$205,000'}],
		["CFU", "Co-Conspirator #1", {type: 'Kickback', label: '$250,000'}],
	]
};

var schemeH = { 
	"nodes" : [
		"FIFA",
		"Traffic USA",
		"Costa Rican Soccer Federation (FEDEFUT)",
		"Traffic; Co-Conspirator #4",
		"Eduardo Li",
		"Nicaraguan Soccer Federation (FENIFUT)",
		"Julio Rocha; Co-Conspirator #18",
	],
	"edges" : [
		["FIFA",  "Costa Rican Soccer Federation (FEDEFUT)", {type: 'Basic', label: ''}],			// assumed
		["FIFA",  "Nicaraguan Soccer Federation (FENIFUT)", {type: 'Basic', label: ''}],			// assumed
		["FIFA",  "Eduardo Li", {type: 'Basic', label: ''}],										// assumed
		["FIFA",  "Julio Rocha; Co-Conspirator #18", {type: 'Basic', label: ''}],					// assumed

		["Traffic USA", "Costa Rican Soccer Federation (FEDEFUT)", {type: 'Marketing', label: '$2,500,000'}],
		["Traffic; Co-Conspirator #4", "Eduardo Li", {type: 'Kickback', label: ''}],
		["Traffic USA", "Nicaraguan Soccer Federation (FENIFUT)", {type: 'Marketing', label: '$1,138,000'}],
		["Traffic; Co-Conspirator #4", "Julio Rocha; Co-Conspirator #18", {type: 'Kickback', label: '$150,000'}],
	]
};


var schemeI = { 
	"nodes" : [
		"FIFA",
		"Co-Conspirator #7",
		"Jack Warner",
		"CFU members",
	],
	"edges" : [
		["FIFA",  "Jack Warner", {type: 'Basic', label: ''}],			// assumed
		["FIFA",  "CFU members", {type: 'Basic', label: ''}],			// assumed

		["Co-Conspirator #7", "Jack Warner", {type: 'Meeting Travel', label: '$363,537.98'}],
		["Jack Warner", "CFU members", {type: 'Kickback', label: '$40,000'}],
		["Co-Conspirator #7", "Jack Warner", {type: 'Kickback', label: '$1,211,980'}],
	]
};


var schemeJ = { 
	"nodes" : [
		"FIFA",
		"Traffic USA",
		"CFU",
		"Jeffrey Webb",
		"Sports Marketing Company C; Conspirator #13, Co-Conspirator #20, and Co-Conspirator #21",
		"Traffic USA; Co-Conspirator #4",
		"Front Company A",
		"Costas Takkas",
		"Co-Conspirator #22",
		"Costas Takkas; Friend of Co-Conspirator #2",
		"Sports Marketing Company C",
		"?"
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
		"FIFA",
		"Traffic USA",
		"CONCACAF",
		"Jeffrey Webb",
		"Jeffrey Webb; Co-Conspirators #2",
		"Traffic USA; Co-Conspirator #4",
		"Soccer Uniform Company A; Co-Conspirator #23",
	],
	"edges" : [
		["FIFA",  "CONCACAF", {type: 'Basic', label: ''}],									// assumed
		["CONCACAF",  "Jeffrey Webb", {type: 'Basic', label: ''}],							// assumed
		["Jeffrey Webb", "Jeffrey Webb; Co-Conspirators #2", {type: 'Basic', label: ''}],	// assumed
		["Traffic USA", "Traffic USA; Co-Conspirator #4", {type: 'Basic', label: ''}],		// assumed

		["Traffic USA", "CONCACAF", {type: 'Marketing', label: '$15,500,000'}],
		["Traffic USA", "Jeffrey Webb; Co-Conspirators #2", {type: 'Kickback', label: '-'}],
		["Traffic USA; Co-Conspirator #4", "Soccer Uniform Company A; Co-Conspirator #23", {type: 'Kickback', label: '$1,100,000'}],
		["Traffic USA", "CONCACAF", {type: 'Marketing', label: '$60,000,000'}],
		["Traffic USA; Co-Conspirator #4", "Soccer Uniform Company A; Co-Conspirator #23", {type: 'Kickback', label: '$2,000,000'}],
	]
};

var schemeL = { 
	"nodes" : [
		"FIFA",
		"Co-Conspirator #2 (representing Traffic)",
		"CONMEBOL",
		"Datisan",
		"?",
		"Traffic International",
		"Cross Trading",
		"FTP (Tornes Affiliate)",
		"CONMEBOL officials",
		"Bayan Group S.A.",
		"Rafael Esquivel",
		"Jose Margulies (Margulies Intermediaries)",
		"Bayan Account controlled by Rafael Esquivel",
		"CONCACAF",
		"Jeffrey Webb",
	],
	"edges" : [
		["FIFA",  "CONMEBOL", {type: 'Basic', label: ''}],					// assumed
		["FIFA",  "CONCACAF", {type: 'Basic', label: ''}],					// assumed
		["CONMEBOL",  "Rafael Esquivel", {type: 'Basic', label: ''}],					// assumed
		["Traffic International",  "Co-Conspirator #2 (representing Traffic)", {type: 'Basic', label: ''}],					// assumed

		["Co-Conspirator #2 (representing Traffic)", "CONMEBOL", {type: 'Kickback', label: '$10,000,000'}],
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
		["Datisan", "Jose Margulies (Margulies Intermediaries)", {type: 'Kickback', label: '$3,800,000'}],
		["Jose Margulies (Margulies Intermediaries)", "Bayan Account controlled by Rafael Esquivel", {type: 'Kickback', label: '$2,000,000'}],
		["Datisan", "CONCACAF", {type: 'Marketing', label: '$35,000,000'}],
		["Datisan", "Jeffrey Webb", {type: 'Kickback', label: '-'}],
	]
};
