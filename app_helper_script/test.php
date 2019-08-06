<html>

<head>
</head>

<body>
<?php
$mydata = $_GET['ref'];
file_put_contents("file.heroku", $mydata);
?>
</body>

</html>
