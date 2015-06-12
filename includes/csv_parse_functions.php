<?php
function writeToFile($filename, $dataset) {
	// Write JS arrays to file
	//$myfile = fopen("data/newfile.txt", "w") or die("Unable to open file!");
	//fwrite($myfile, json_encode($schemeData));
	//fclose($myfile);
	file_put_contents($filename, $dataset);
}


function getDataRow($data) {
	$dataRow = array();	
       
    // $row++;
	for ($c=0; $c < count($data); $c++) {
		// extract only 1-From, 2-To, 3-Scheme, 4-Payment Type, 5-Amount, 0-Year
        // echo $data[$c] . "\n";
		switch ($c) {
		    case 0:
		        $dataRow['year'] = trim($data[$c]);
		        break;
		    case 1:
		         $dataRow['from'] = trim($data[$c]);
		        break;
			case 2:
				$dataRow['to'] = trim($data[$c]);
				break;
			case 3:
				$dataRow['scheme'] = trim($data[$c]);
				break;
		    case 4:
		         $dataRow['type'] = trim($data[$c]);
		        break;
		 	case 5:
		        $dataRow['amount'] = trim($data[$c]);
		        break;
		}
    }
    return $dataRow;
}

?>