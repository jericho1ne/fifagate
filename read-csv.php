<?php

require_once("includes/csv_parse_functions.php");

// Files to read from and save to
$dataset  = array(
	"payoffs-schemeA.csv",
	"payoffs-schemeB.csv",
	"payoffs-schemeC.csv",
	"payoffs-schemeD.csv",
	"payoffs-schemeE.csv",
	"payoffs-schemeF.csv",
	"payoffs-schemeG.csv",
	"payoffs-schemeH.csv",
	"payoffs-schemeI.csv",
	"payoffs-schemeJ.csv",
);

// start at row 1 if you gots a header row
$row = 0;

$input_filename = "data/payoffs.csv";
// $filename = "data/actors.csv";

// ============================== parse dataset
if (($handle = fopen($input_filename, "r")) !== FALSE) {
	$schemeData = array();
	
	$avoidFirstRecord = true;
	$row = 0;

    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
		// skip over header row
		if ($row == 0) { 
			$row++; 
			continue; 
		}
		$schemeData[] =  getDataRow($data);
    }
    fclose($handle);
}


// ================ organize data with scheme headers
$schemes = array();

foreach ($schemeData as $key=>$val) {
	$schemes[$val['scheme']][] = $val;
}

// echo "<pre>"; echo json_encode($schemes); echo "</pre>";

// ================== Print data in required format 
/*
	"nodes": [
		"FIFA", 
		"CONCACAF",
		"Jack Warner",
	],
 	"edges": [
	  	["FIFA", "CONCACAF", 					{type: 'Basic', label: ''}],
	  	["Jack Warner", "CONCACAF", 			{type: 'Basic', label: ''}],
 	]
*/

foreach ($schemes as $key=>$datarows) {
	$uniqueNodes = array();

	echo '<b>' . 'Edges_'.str_replace(' ', '_', $key).'</b><br>';

	echo '"edges" : [';

	// PRINT EDGES
	foreach ($datarows as $row) {
		
		// Build nodes array
		if (!in_array($row['from'], $uniqueNodes, true)) {
			$uniqueNodes[] = $row['from'];
		}
		if (!in_array($row['to'], $uniqueNodes, true)) {
			$uniqueNodes[] = $row['to'];
		}

		// Print edges
		echo "\t";
		echo '["'. $row['from']. '", "'. $row['to'] .'", {type: \''. $row['type'] .'\', label: \''. $row['amount'] .'\'}],<br>';
	}

	// close nodes array		
	echo ']<br>';

	// PRINT NODES
	echo '"nodes" : [';
	echo "\t". '"FIFA", ';
	foreach ($uniqueNodes as $node) {
		echo "\t".'"' . $node . '",';
	}
	echo ']<br><hr>';

}

/*
$output_filename = "data/newfile.txt";
writeToFile($output_filename, $schemeData);
*/

?>