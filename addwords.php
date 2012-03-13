<html>
	<head>
		<title> HomeWork 7 </title>
		<LINK type="text/css" rel="stylesheet" href="style.css">
		<script src="add.js" type="text/javascript"></script>    
		<meta content="text/html; charset=windows-1256" http-equiv=Content-Type>

	</head>
		
	<body>
	
		<?php include('process.php'); ?>
		
		<div id="header" style="text-align: right">
			<a href="style.css">Stylesheet</a> - <a href="add.js">JavaScript</a>
		</div>

		<div id="content_area">

			<p> Use this site to add words to the database </p>			

			<form action="addwords.php" method="GET">
				<label>Arabic word:</label>
				<input type="text" size="16" name="arabicWord"><br />
				<label>English word:</label>
				<input type="text" size="16" name="englishWord"><br />
					
				<input type="submit" value="Submit">
			</form>
		</div>
		<div id="bottom_pane"></div>
		<div id="footer">
			<i>Created by: <b>Moustafa Ismael</b> - Copyright &copy; Mason Scheduler</i>   
		</div>

	</body>
</html>