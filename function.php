<?php
	function connexionDB() {
		$connexion = mysql_connect("preprod.hetic.net", "bjrpapa", "b0nj0urp@p@") or exit (mysql_error());
		$database = mysql_select_db("bjrpapa") or exit (mysql_error());
		return ($connexion);
	}
?>