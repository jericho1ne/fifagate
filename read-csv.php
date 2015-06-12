<?php

// start at row 1 if you gots a header row
$row = 0;

$filename = "data/payoffs-schemeC.csv";
// $filename = "data/actors.csv";

if (($handle = fopen($filename, "r")) !== FALSE) {
	$schemeData = array();
	
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
		$dataRow = array();
		
        $num = count($data);
        // echo "<p> $num fields in line $row: <br /></p>\n";
        $row++;
        for ($c=0; $c < $num; $c++) {
			// extract only 1-From, 2-To, 4-Payment Type, 5-Amount, 0-Year
            // echo $data[$c] . "\n";
			switch ($c) {
			    case 0:
			        $dataRow['year'] = $data[$c];
			        break;
			    case 1:
			         $dataRow['from'] = $data[$c];
			        break;
				 case 2:
					$dataRow['to'] = $data[$c];
					break;
			    case 4:
			         $dataRow['type'] = $data[$c];
			        break;
			 	case 5:
			        $dataRow['amount'] = $data[$c];
			        break;
			}
        }
		$schemeData[] = $dataRow;
    }
    fclose($handle);
}


echo "<pre>";
print_r($schemeData);
echo "</pre>";

writeToFile($filename, $schemeData);

function writeToFile($filename, $dataset) {
	// Write JS arrays to file
	//$myfile = fopen("data/newfile.txt", "w") or die("Unable to open file!");
	//fwrite($myfile, json_encode($schemeData));
	//fclose($myfile);
	file_put_contents($filename, $dataset);
}


?>