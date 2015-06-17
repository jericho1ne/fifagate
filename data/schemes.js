var schemes = {
	"A" : "",
	"B" : "",
	"C" : "",
	"D" : "",
	"E" : "",
	"F" : "",
	"G" : "",
	"H" : "",
	"I" : "",
	"J" : "",
	"K" : "",
	"L" : ""
}
//
// Node types:
// 
// 		Federation, FIFA Member, Marketing, Broadcasting, Sportswear, Co-Conspirator
// 
var schemeA = { 
	"nodes": [
		["FIFA", 					{type: 'Federation'}], 
		["CONMEBOL Copa America", 	{type: 'Federation', notes: 'Received three payments totaling $8,740,000 from Traffic Brazil between 1987-1993 for commercial and broadcast rights.  Received $51,000,000 from 2004-2011 for rights Wire payment from US to Paraguary for rights associated with 2004, 2007, and 2011 Copa America edition.'}],
		["Traffic",	{type: 'Commercial'}], 
		["Co-Conspirator #2",		{type: 'Co-Conspirator', notes: 'Co-Conspirator #2 paid a 6-7 digit figure bribe 11 times to Leoz, and five times to Esquivel.'}], 
		["Co-Conspirator #9",		{type: 'Co-Conspirator'}], 
		
		// "Co-Conspirator #2; Co-Conspirator 9",
		["Nicolas Leoz",   			{type: 'FIFA Member', notes: 'Received a 6-7 digit figure bribe 11 times from Co-Conspirator #2.'}], 
		// "Traffic; Co-Conspirator #2",
		["Rafael Esquivel",			{type: 'FIFA Member', notes: 'Received a 6-7 digit figure bribe 5 times from Co-Conspirator #2.  Received $2,000,000 additional kickback (retroactively demanded) for 2007 Copa America commerical and broadcast rights due to substantial profitability. Co-conspirators sought favorable position on commercial and marketing contracts up for bids, against competitor, Full Play.'}], 
		["Alejandro Burzaco",		{type: 'FIFA Member'}], 
		["Co-Conspirator #10",		{type: 'Co-Conspirator'}], 
  	],
	"edges": [
		["FIFA", 				"CONMEBOL Copa America", {type: 'Basic', label: ''}],
		["Nicolas Leoz",		"CONMEBOL Copa America", {type: 'Basic', label: ''}],

		// THESE TWO NODES SHOULD GRAVITATE TOWARDS EACH OTHER
		["Co-Conspirator #10", "CONMEBOL Copa America", {type: 'Basic', label: ''}], 			//

		["Rafael Esquivel", "CONMEBOL Copa America", {type: 'Basic', label: ''}],
		["Traffic", "Co-Conspirator #2", 	 {type: 'Basic', label: ''}],
		["Traffic","Co-Conspirator #9", 	 {type: 'Basic', label: ''}],

		// CONMEBOL == CONMEBOL Copa America
		// 
		// 
		["Traffic",	"CONMEBOL Copa America",{type: 'Marketing', label: '$8,740,000'}],
		//["Traffic",	"CONMEBOL Copa America",{type: 'Marketing', label: '$1,700,000'}],
		//["Traffic",	"CONMEBOL Copa America",{type: 'Marketing', label: '$6,600,000'}],
		//["Traffic", "CONMEBOL Copa America",{type: 'Marketing', label: '$440,000'}],

		["Traffic", "CONMEBOL Copa America",{type: 'Marketing', label: '$51,000,000'}],
		//["Traffic", "CONMEBOL Copa America",{type: 'Marketing', label: '$12,000,000'}],
		//["Traffic", "CONMEBOL Copa America",{type: 'Marketing', label: '$17,000,000'}],
		//["Traffic", "CONMEBOL Copa America",{type: 'Marketing', label: '$22,000,000'}],

		["Traffic", "Rafael Esquivel",   	{type: 'Kickback', label: '$1,000,000'}],
		["Co-Conspirator #9", 		"Rafael Esquivel",     	{type: 'Kickback', label: '$700,000'}],
		
		// 6-7 figure digit payments, 11 GHOST LINES
		["Co-Conspirator #2", 		"Nicolas Leoz",    		{type: 'Kickback', label: '6-7 digit figure', ghost: 'true'}],
		/*["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '', ghost: 'true'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '', ghost: 'true'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '', ghost: 'true'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '', ghost: 'true'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '', ghost: 'true'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '', ghost: 'true'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '', ghost: 'true'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '', ghost: 'true'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '', ghost: 'true'}],
		["Co-Conspirator #2", 		"Nicolas Leoz",       	{type: 'Kickback', label: '', ghost: 'true'}],*/

		// ? amounts, 7 GHOST LINES
		["Co-Conspirator #2", 		"Rafael Esquivel", 		{type: 'Kickback', label: '$2,000,000', ghost: 'true'}],
		// ["Co-Conspirator #2", 		"Rafael Esquivel",    	{type: 'Kickback', label: '$1,000,000', ghost: 'true'}],
		["Co-Conspirator #2", 		"Rafael Esquivel",     	{type: 'Kickback', label: '6-7 digit figure', ghost: 'true'}],
		/*["Co-Conspirator #2", 		"Rafael Esquivel",     	{type: 'Kickback', label: '', ghost: 'true'}],
		["Co-Conspirator #2", 		"Rafael Esquivel",     	{type: 'Kickback', label: '', ghost: 'true'}],
		["Co-Conspirator #2", 		"Rafael Esquivel",     	{type: 'Kickback', label: '', ghost: 'true'}],
		["Co-Conspirator #2", 		"Rafael Esquivel",     	{type: 'Kickback', label: '', ghost: 'true'}],*/

		// 2 GHOST LINES
		["Co-Conspirator #2", 	"Alejandro Burzaco", 	{type: 'Kickback', label: '7-digit $', ghost: 'true'}],
		["Alejandro Burzaco", 	"Co-Conspirator #10", 	{type: 'Kickback', label: '7-digit $', ghost: 'true'}],	 
	]
};

var schemeB = { 
  	"nodes": [
		["FIFA",  				{type: 'Federation'}],
		["CONCACAF",			{type: 'Federation'}],
		["Traffic USA",			{type: 'Commercial'}],
		["Co-Conspirator #1",	{type: 'Co-Conspirator'}],
		["Jack Warner",			{type: 'FIFA Member'}],
	],
  	"edges": [
		["FIFA", "CONCACAF", 					{type: 'Basic', label: ''}],
		["Traffic USA", "Co-Conspirator #1", 	{type: 'Basic', label: ''}],
		["Jack Warner", "CONCACAF", 			{type: 'Basic', label: ''}],
		["Traffic USA", "CONCACAF", 			{type: 'Marketing', label: '$9,750,000'}],
		["Traffic USA", "Co-Conspirator #1", 	{type: 'Kickback', label: '$200,000'}],
		["Co-Conspirator #1", "Jack Warner",    {type: 'Kickback', label: '$100,000'}],	
  	]
};

var schemeC = { 
  	"nodes": [
		["FIFA", 			{type: 'Federation'}],	
		["CONMEBOL", 		{type: 'Federation'}],
		["Sports Mkt Co A",	{type: 'Commercial'}],
		["Grupo Sartander",	{type: 'Corporation'}],	
		["Bridgestone", 	{type: 'Corporation'}],
		["Toyota", 			{type: 'Corporation'}],
		["Nicolas Leoz", 	{type: 'FIFA Member', notes: 'One of the $2 million payments was paid in five $400,000 installments.' }],
		["Co-Conspirator #5",{type: 'Co-Conspirator'}],
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
		["Co-Conspirator #5", "Nicolas Leoz",  	{type: 'Kickback', label: '$2,000,000'}],
		//["Co-Conspirator #5", "Nicolas Leoz",   {type: 'Kickback', label: '$400,000'}],
		//["Co-Conspirator #5", "Nicolas Leoz",   {type: 'Kickback', label: '$400,000'}],
		//["Co-Conspirator #5", "Nicolas Leoz",   {type: 'Kickback', label: '$400,000'}],
		//["Co-Conspirator #5", "Nicolas Leoz",   {type: 'Kickback', label: '$400,000'}],
		//["Co-Conspirator #5", "Nicolas Leoz",   {type: 'Kickback', label: '$400,000'}],
	]
};


var schemeD = { 
  	"nodes": [
		["FIFA", 						{type: 'Federation'}],	
		["CBF", 						{type: 'Federation'}],	
		["Jose Maria Marin", 			{type: 'FIFA Member'}],
		["Traffic", 					{type: 'Commercial'}],		// including traffic brazil
		["Sports Marketing Company B", 	{type: 'Commercial'}],
		["Co-Conspirator #6", 			{type: 'Co-Conspirator', notes: 'One of the three receipients of Co-Conspirator #6\'s payment used it to buy a yacht.' }],
		["Co-Conspirator #2", 			{type: 'Co-Conspirator'}],
		["Co-Conspirator #11",			{type: 'Co-Conspirator'}],
		["Co-Conspirator #12",			{type: 'Co-Conspirator'}],
  	],
  	"edges" : [
  		["FIFA",  "CBF", 							{type: 'Basic', label: ''}],
  		["Traffic", "Sports Marketing Company B", 	{type: 'Basic', label: ''}],	// used tobe Traffic Brazil
  		[ "CBF", "Jose Maria Marin", 				{type: 'Basic', label: ''}],

  		// SATELLITE NODE OF Traffic Intl
  		// [ "Traffic Brazil", "Traffic", 			{type: 'Basic', label: ''}],

  		// SATELLITE NODE
  		["Traffic", "Co-Conspirator #2", 				{type: 'Basic', label: ''}],
  		["CBF", "Co-Conspirator #11", 					{type: 'Basic', label: ''}],
  		["CBF", "Co-Conspirator #12", 					{type: 'Basic', label: ''}],

  		["Co-Conspirator #6", "Sports Marketing Company B",	{type: 'Basic', label: ''}],
  		["Traffic", "CBF", {type: 'Marketing', label: ''}],
		["Sports Marketing Company B", "CBF", {type: 'Marketing', label: ''}],
		
		["Co-Conspirator #6", "Jose Maria Marin", {type: 'Kickback', label: '$493,000'}],  //164,333.
		["Co-Conspirator #6", "Co-Conspirator #11", {type: 'Kickback', label: ''}],
		["Co-Conspirator #6", "Co-Conspirator #12", {type: 'Kickback', label: ''}],
	
		["Jose Maria Marin", "Co-Conspirator #11", {type: 'Kickback', label: ''}],
		["Jose Maria Marin", "Co-Conspirator #12", {type: 'Kickback', label: ''}],

		["Co-Conspirator #2", "Jose Maria Marin", {type: 'Kickback', label: '$493,000'}],
		["Co-Conspirator #2", "Jose Maria Marin", {type: 'Kickback', label: '$493,000', ghost: "true"}], // GHOST LINE
	]
};

var schemeE = { 
  	"nodes": [
		["FIFA", 					{type: 'Federation'}],	
		["Sportswear Company A", 	{type: 'Sportswear'}],	
		["CBF", 					{type: 'Federation'}],	
		["Traffic Brazil", 			{type: 'Commercial'}],	
		["Co-Conspirator #2", 		{type: 'Co-Conspirator'}],	
		["Co-Conspirator #11", 		{type: 'Co-Conspirator'}],	
  	],
	"edges" : [
		["FIFA","CBF", 	{type: 'Basic', label: ''}],		// implied

		// SATELLITE
		["Co-Conspirator #2", "Traffic Brazil",  {type: 'Basic', label: ''}],		// implied

		// SATELLITE!
		["Co-Conspirator #11", "CBF", 			{type: 'Basic', label: ''}],		// implied

		["Sportswear Company A", "CBF", {type: 'Marketing', label: '$160,000,000'}],
		["Sportswear Company A", "Traffic Brazil", {type: 'Kickback', label: '$30,000,000'}],
		["Co-Conspirator #2", "Co-Conspirator #11", {type: 'Kickback', label: '$15,000,000'}],
		["Sportswear Company A", "Traffic Brazil", {type: 'Kickback', label: 'Termination'}],
	]
};

var schemeF = { 
	"nodes" : [
		["FIFA",			{type: 'Federation'}],
		// ["Traffic USA",		{type: 'Commercial'}],
		["Traffic",			{type: 'Commercial', notes: 'Traffic + Traffic USA combined'}],
		["CFU",				{type: 'Federation'}],
		["Jack Warner",		{type: 'FIFA Member'}],
	],
	"edges" : [
		["FIFA",  "CFU", {type: 'Basic', label: ''}],	// implied

		// put these close together
		["CFU",  "Jack Warner", {type: 'Basic', label: ''}],	// implied

		["Traffic", "CFU", {type: 'Marketing', label: '$900,000'}],
		["Traffic", "Jack Warner", {type: 'Kickback', label: '$800,000'}],
		["Traffic", "Jack Warner", {type: 'Kickback', label: '$40,000'}],
		["Traffic", "CFU", {type: 'Marketing', label: '$2,200,000'}],
		["Traffic", "Jack Warner", {type: 'Kickback', label: '$800,000'}],
		["Traffic", "Jack Warner", {type: 'Kickback', label: '$40,000'}],
	]
};

var schemeG = { 
	"nodes" : [
		["FIFA", 				{type: 'Federation'}],
		["Morocco",				{type: 'Federation'}],
		["Co-Conspirator #1",	{type: 'Co-Conspirator'}],
		["South Africa",  		{type: 'Federation'}], //  Bid Committee & South African Governament",
		["FIFA high ranking individual",	{type: 'FIFA Member'}],
		["CFU",					{type: 'Federation', notes:'Including three legal FIFA payments diverted from South Africa to CFU accounts controlled by Warner as bribes. Money moved from Swiss account to New York accounts, to Trinidad and Tobago account.'}],
		["Jack Warner",						{type: 'FIFA Member'}],
	],
	"edges" : [
		["FIFA",  "Morocco", {type: 'Basic', label: ''}],			// implied
		["FIFA",  "CFU", {type: 'Basic', label: ''}],				// implied
		["FIFA",  "CFU", {type: 'Basic', label: ''}],	// implied
		["FIFA",  "South Africa", {type: 'Basic', label: ''}],	// implied
		
		// FIFA Satellite
		["FIFA", "FIFA high ranking individual", 	{type: 'Basic', label: ''}],	// implied

		// Train tracks - not a kickback, it's DEVELOPMENT - more bening color YELLOW
		["FIFA high ranking individual", "South Africa", {type: 'Sports Development', label: '$10,000,000'}],
		["FIFA high ranking individual", "CFU", {type: 'Kickback', label: '$616,000'}],
		["FIFA high ranking individual", "CFU", {type: 'Kickback', label: '$1,600,000'}],
		["FIFA high ranking individual", "CFU", {type: 'Kickback', label: '$7,784,000'}],

		// CHANGE TYPE TO OFFERED BRIBE - horizontal slashes or dots
		["Morocco", "Co-Conspirator #1", {type: 'Offered Bribe', label: '$1,000,000'}],
		["South Africa", "CFU", {type: 'Kickback', label: ''}],

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
		["FIFA",							{type: 'Federation'}],
		["Costa Rican Soccer Federation",	{type: 'Federation'}],
		["Traffic",							{type: 'Commercial'}],
		["Eduardo Li",						{type: 'FIFA Member'}],
		["Nicaraguan Soccer Federation",	{type: 'Federation'}],
		["Julio Rocha",						{type: 'FIFA Member'}],
		["Co-Conspirator #18",				{type: 'FIFA Member'}],
		["Co-Conspirator #4",				{type: 'Co-Conspirator'}],
		["Co-Conspirator #19",				{type: 'Co-Conspirator'}],
	],
	"edges" : [
		["FIFA",  "Costa Rican Soccer Federation", 			{type: 'Basic', label: ''}],	// implied
		["FIFA",  "Nicaraguan Soccer Federation", 			{type: 'Basic', label: ''}],	// implied
		["FIFA",  "Eduardo Li", 							{type: 'Basic', label: ''}],	// implied
		["FIFA",  "Julio Rocha", 		{type: 'Basic', label: ''}],	// implied

		["Traffic", "Costa Rican Soccer Federation", 	{type: 'Marketing', label: '~$2,500,000'}],
		["Traffic", "Nicaraguan Soccer Federation", 	{type: 'Marketing', label: '~$1,138,000'}],

		["Traffic", "Eduardo Li", 							{type: 'Kickback', label: ''}],
		["Traffic", "Co-Conspirator #4", 					{type: 'Basic', label: ''}],	
		
		["Traffic", "Julio Rocha", 							{type: 'Kickback', label: '$150,000'}],
		["Traffic", "Julio Rocha", 							{type: 'Kickback', label: '', ghost: 'true'}],
		["Traffic", "Julio Rocha", 							{type: 'Kickback', label: '', ghost: 'true'}],
		["Traffic", "Co-Conspirator #19", 					{type: 'Kickback', label: '$50,000'}],
		["Co-Conspirator #18", "Traffic", 					{type: 'Basic', label: ''}],
		["Co-Conspirator #18", "Nicaraguan Soccer Federation", {type: 'Basic', label: ''}],
		["Co-Conspirator #19", "Nicaraguan Soccer Federation", {type: 'Basic', label: ''}],
	]
};


var schemeI = { 
	"nodes" : [
		["FIFA",				{type: 'Federation'}],
		["Co-Conspirator #7",	{type: 'FIFA Member', image: '', notes:'Mohamed Bin Hamman'}],
		["Jack Warner",			{type: 'FIFA Member'}],
		["CFU members",			{type: 'FIFA Member'}],
	],
	"edges" : [
		["FIFA",  "Jack Warner", 				{type: 'Basic', label: ''}],			// implied
		["FIFA",  "CFU members", 				{type: 'Basic', label: ''}],			// implied

		["Co-Conspirator #7", "Jack Warner",	{type: 'Meeting/Travel', label: '$363,537.98'}],

		["Jack Warner", "CFU members", 			{type: 'Kickback', label: '$40,000'}],
		["Jack Warner", "CFU members", 			{type: 'Meeting/Travel', label: '$40,000'}],
		["Jack Warner", "CFU members", 			{type: 'Kickback', label: '$40,000'}],
		["Jack Warner", "CFU members", 			{type: 'Meeting/Travel', label: '$40,000'}],
		["Jack Warner", "CFU members", 			{type: 'Kickback', label: '$40,000'}],
		
		["Co-Conspirator #7", "Jack Warner", 	{type: 'Kickback', label: '$1,211,980'}],
	]
};


// NEEDS CLEANUP - Should Company A remain a bank (Hong Kong)??
var schemeJ = { 
	"nodes" : [
		["FIFA",						{type: 'Federation'}],
		["Traffic USA",					{type: 'Commercial'}],
		["CFU",							{type: 'Federation'}],
		["Jeffrey Webb",				{type: 'FIFA Member', image: '', notes: 'Received swimming pool & realty payoffs from Takkas, plus hefty bribe for commercial rights for CFU 2018 and 2022 World Cup qualifiers.'}],

		["Sports Marketing Company C",	{type: 'Commercial'}],
		["Conspirator #13", 			{type: 'Co-Conspirator'}],
		["Conspirator #20", 			{type: 'Co-Conspirator'}],
		["Conspirator #21", 			{type: 'Co-Conspirator'}],

		["Front Company A",				{type: 'Corporation'}],
		["Costas Takkas",				{type: 'FIFA Member', image: '', notes:'Also includes the "Unknown Co-Conspirator", an acquaintance of Takkas\'.'}],
		["Co-Conspirator #4",			{type: 'Co-Conspirator'}],
		["Co-Conspirator #22",			{type: 'Co-Conspirator'}],
		["Friend of Co-Conspirator #2",	{type: 'Co-Conspirator'}],
		["Sports Marketing Company C",	{type: 'Commercial'}],
	],
	"edges" : [
		["FIFA", "CFU", 							{type: 'Basic', label: ''}],					// implied
		["CFU", "Jeffrey Webb", 					{type: 'Basic', label: ''}],			// implied
		["FIFA", "Costas Takkas", 					{type: 'Basic', label: ''}],			// implied
		["Traffic USA",  "Co-Conspirator #4", 		{type: 'Basic', label: ''}],			// implied

		["Traffic USA", "CFU", 						{type: 'Marketing', label: '$23,000,000'}],
		["Traffic USA", "Jeffrey Webb", 			{type: 'Kickback', label: '$3,000,000'}],
		
		["Sports Marketing Company C", "Traffic USA", {type: 'Marketing', label: '-'}],

		["Sports Marketing Company C", "Conspirator #13", {type: 'Basic', label: ''}],
		["Sports Marketing Company C", "Conspirator #20", {type: 'Basic', label: ''}],
		["Sports Marketing Company C", "Conspirator #21", {type: 'Basic', label: ''}],

		["Traffic USA", "Front Company A", 			{type: 'Kickback', label: '$1,200,000'}],
		
		["Front Company A", "Costas Takkas", 		{type: 'Kickback', label: '$750,000'}],
		["Front Company A", "Costas Takkas", 		{type: 'Kickback', label: '$250,000'}],
		["Front Company A", "Co-Conspirator #22", 	{type: 'Kickback', label: '$200,000'}],

		["Traffic USA", "Friend of Co-Conspirator #2", {type: 'Kickback', label: '$500,000'}],
		["Friend of Co-Conspirator #2", "Costas Takkas", {type: 'Kickback', label: '$500,000'}],
		["Costas Takkas", "Jeffrey Webb", 				{type: 'Kickback', label: '-'}],
		["Costas Takkas", "Jeffrey Webb", 				{type: 'Kickback', label: '-'}],
		["Sports Marketing Company C", "Costas Takkas", {type: 'Kickback', label: '-'}],		// formerly Unknown co-conspirator
	]
};

var schemeK = { 
	"nodes" : [
		["FIFA",					{type: 'Federation'}],
		["Traffic USA",				{type: 'Commercial'}],
		["CONCACAF",				{type: 'Federation'}],
		["Jeffrey Webb",			{type: 'FIFA Member'}], 
		["Co-Conspirator #2",		{type: 'Co-Conspirator'}],
		["Co-Conspirator #4",		{type: 'Co-Conspirator'}],	
		["Co-Conspirator #23",		{type: 'Co-Conspirator'}],
		["Aaron Davidson",			{type: 'Co-Conspirator'}],
		// "Jeffrey Webb; Co-Conspirators #2",
		// "Traffic USA; ",
		["Soccer Uniform Company A", {type: 'Sportswear'}],//"Soccer Uniform Company A; Co-Conspirator #23",
	],
	"edges" : [
		["FIFA",  "CONCACAF", {type: 'Basic', label: ''}],							// implied
		["Traffic USA", "Aaron Davidson", {type: 'Basic', label: ''}],				// implied
		// ["CONCACAF",  "Jeffrey Webb", {type: 'Basic', label: ''}],				// implied
		["Co-Conspirator #2", "Traffic USA",  {type: 'Basic', label: ''}],			// implied
		// ["Traffic USA", "Co-Conspirator #4", {type: 'Basic', label: ''}],		// implied
		["CONCACAF", "Co-Conspirator #4", {type: 'Basic', label: ''}],				// implied
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
		["FIFA",					{type: 'Federation'}],
		["Co-Conspirator #2",		{type: 'Co-Conspirator'}],	// (representing Traffic
		["CONMEBOL",				{type: 'Federation'}],
		["Datisan",					{type: 'Commercial', notes: 'Datisan paid massive bribe of $100,000,000 for 2013 Copa America contract.  Also secured worldwide, exclusive commercial rights to Copa America\'s 2015, 2016, 2019, and 2023 editions.'}],
		["Traffic International",	{type: 'Commercial'}],
		["Cross Trading",			{type: 'Corporation'}],
		["FTP (Tornes Affiliate)",	{type: 'Corporation'}],
		["CONMEBOL officials",		{type: 'FIFA Member'}],
		["Bayan Group S.A.",		{type: 'Corporation'}],
		["Rafael Esquivel",			{type: 'FIFA Member'}],
		["Jose Margulies",			{type: 'FIFA Member', image: '', notes: 'Margulies Intermediaries'}],			 
		["CONCACAF",				{type: 'Federation', notes: 'Datisan seeks and obtains CONCACAF commercial rights for special 2016 Centenario Contract.'}],
		["Jeffrey Webb",			{type: 'FIFA Member', notes: 'Datisan agrees to unspecified bribe payment to Webb for CONCACAF contract.'}],
	],
	"edges" : [
		["FIFA",  "CONMEBOL", {type: 'Basic', label: ''}],					// implied
		["FIFA",  "CONCACAF", {type: 'Basic', label: ''}],					// implied

		["Datisan", "FTP (Tornes Affiliate)", {type: 'Basic', label: ''}],					// implied
		["Datisan", "Cross Trading",  {type: 'Basic', label: ''}],					// implied
		["Datisan", "Bayan Group S.A.",  {type: 'Basic', label: ''}],					// implied

		["CONMEBOL",  "Rafael Esquivel", {type: 'Basic', label: ''}],					// implied
		["CONMEBOL",  "CONMEBOL officials", {type: 'Basic', label: ''}],
		["Traffic International",  "Co-Conspirator #2", {type: 'Basic', label: ''}],					// implied

		["Co-Conspirator #2", "CONMEBOL officials", {type: 'Kickback', label: '$10,000,000'}],
		["Datisan", "CONMEBOL", {type: 'Marketing', label: '$317,500,000'}],
		["Traffic International", "Cross Trading", {type: 'Kickback', label: '$5,000,000'}],
		["Traffic International", "FTP (Tornes Affiliate)", {type: 'Kickback', label: '$5,000,000'}],
		["Traffic International", "FTP (Tornes Affiliate)", {type: 'Kickback', label: '$1,666,667'}],
		["Datisan", "Cross Trading", {type: 'Kickback', label: '$1,667,000'}],
		["Datisan", "CONMEBOL officials", {type: 'Kickback', label: '-'}],
		["Bayan Group S.A.", "Rafael Esquivel", {type: 'Kickback', label: '$50,000'}],
		["Bayan Group S.A.", "Rafael Esquivel", {type: 'Kickback', label: '$250,000'}],
		["Bayan Group S.A.", "Rafael Esquivel", {type: 'Kickback', label: '$400,000'}],
		["Datisan", "Jose Margulies", {type: 'Kickback', label: '$3,800,000'}],
		["Jose Margulies", "Bayan Group S.A.", {type: 'Kickback', label: '$2,000,000'}],
		["Datisan", "CONCACAF", {type: 'Marketing', label: '$35,000,000'}],
		["Datisan", "Jeffrey Webb", {type: 'Kickback', label: '-'}],
	]
};
