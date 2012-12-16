<?php
error_reporting("e_all");

if(isset($_POST['id'])&&strlen($_POST['id'])==13&&verif_alphaNum($_POST['id'])){
	include("function.php");
	connexionDB();
	
	//On choisit la bonne zone pour l'heure
	date_default_timezone_set('Europe/Paris'); 
	
	$id=$_POST['id'];
	
	//Si le titre est vide, on initialise la variable
	if(isset($_POST['titre'])){
		$titre=$_POST['titre'];
	}else{
		$titre="";
	}
	
	//Si la description est vide, on initialise la variable
	if(isset($_POST['description'])){
		$description=$_POST['description'];
	}else{
		$description="";
	}
	
	$url = "http://s354544963.onlinehome.fr/363F9817-54_".$id.".mp4";
	
	$url_ap = "http://s354544963.onlinehome.fr/363F9817-54_".$id."_0000.jpg";
	
	$requete = "INSERT INTO contenu(date_contenu, titre_contenu, description_contenu, url_contenu, url_apercu, id_type) VALUES(NOW(), `".$titre."`, `".$description."`, `".$url_contenu."`, `".$url_apercu."`, `1`)";
	
	//On envoie la requete SQL
	$result = mysql_query($requete);
	if (!$result) {
    	die('Requête invalide : ' . mysql_error());
    }
	
}else{
	echo "Erreur";
}


/////// FONCTIONS ///////////

//Fonction pour vérifier si l'id est bien composé uniquement de chiffres et de lettres
function verif_alphaNum($str){
    preg_match("/([^A-Za-z0-9])/",$str,$result);
//On cherche tt les caractères autre que [A-Za-z] ou [0-9]
    if(!empty($result)){//si on trouve des caractère autre que A-Za-z ou 0-9
        return false;
    }
    return true;
}

?>