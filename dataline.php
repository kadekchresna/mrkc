<?php
$con=mysqli_connect("localhost","root","","dbline");

if (!$con) {
  die('Could not connect: ' . mysql_error());
}

// Data for Sugar
$query = mysqli_query($con,"SELECT sugar FROM comodity");
$rows = array();
$rows['name'] = 'Sugar';
while($tmp= mysqli_fetch_array($query)) {
    $rows['data'][] = $tmp['sugar'];
}

// Data for Rice
$query = mysqli_query($con,"SELECT rice FROM comodity");
$rows1 = array();
$rows1['name'] = 'Rice';
while($tmp = mysqli_fetch_array($query)) {
    $rows1['data'][] = $tmp['rice'];
}

// Data for Wheat Flour
$query = mysqli_query($con,"SELECT wheat_flour FROM comodity");
$rows2 = array();
$rows2['name'] = 'Wheat Flour';
while($tmp = mysqli_fetch_array($query)) {
    $rows2['data'][] = $tmp['wheat_flour'];
}

$result = array();
array_push($result,$rows);
array_push($result,$rows1);
array_push($result,$rows2);

print json_encode($result, JSON_NUMERIC_CHECK);

mysqli_close($con);
?> 
