$(document).ready(function() {
	var id = uniqid();
	$('#recordZone').hide();//On cache les boutons d'enregistrement au départ
	
	$("#webcam").scriptcam({ 
		appID: '363F9817-54',
		width: 640,
		height: 480,
		fileName: id,
		maximumTime: 150,
		timeLeft: remaining,
		connected: enableRecord//Fonction enableRecord qui se lance lorsque l'utilisateur a accepté l'invation flash a lancer la webcam
	});
	
	$("#recordButton").click(function() {//Bouton Record ecouteur d'evenement
		$.scriptcam.startRecording();
		
		$('#stopButton').show();
		$('#recordButton').hide();
	});
	
	$("#stopButton").click(function() {//Bouton STOP ecouteur d'evenement
		$.scriptcam.closeCamera();
		$('#recordZone').hide();//Enregistrement fini, on cache les boutons d'enregistrement
		
		//On envoye les donnees au script php pour copier la vidéo sur notre serveur
		$.post('script-upload.php', {id: id},function(data){
			alert(data);
		});
	});
});


//////// FONCTIONS //////////

function enableRecord() {//Fonction lancee lorsque l'utilisateur a accepté l'invit flash
	$('#recordZone').show();
	$('#stopButton').hide();
}

function remaining(value) {//Fonction qui génère le temps restant maximum
	$('#timeLeft').text(value);
}

//fonction pour générer des id uniques
function uniqid (prefix, more_entropy) {
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +    revised by: Kankrelune (http://www.webfaktory.info/)
  // %        note 1: Uses an internal counter (in php_js global) to avoid collision
  // *     example 1: uniqid();
  // *     returns 1: 'a30285b160c14'
  // *     example 2: uniqid('foo');
  // *     returns 2: 'fooa30285b1cd361'
  // *     example 3: uniqid('bar', true);
  // *     returns 3: 'bara20285b23dfd1.31879087'
  if (typeof prefix == 'undefined') {
    prefix = "";
  }

  var retId;
  var formatSeed = function (seed, reqWidth) {
    seed = parseInt(seed, 10).toString(16); // to hex str
    if (reqWidth < seed.length) { // so long we split
      return seed.slice(seed.length - reqWidth);
    }
    if (reqWidth > seed.length) { // so short we pad
      return Array(1 + (reqWidth - seed.length)).join('0') + seed;
    }
    return seed;
  };

  // BEGIN REDUNDANT
  if (!this.php_js) {
    this.php_js = {};
  }
  // END REDUNDANT
  if (!this.php_js.uniqidSeed) { // init seed with big random int
    this.php_js.uniqidSeed = Math.floor(Math.random() * 0x75bcd15);
  }
  this.php_js.uniqidSeed++;

  retId = prefix; // start with prefix, add current milliseconds hex string
  retId += formatSeed(parseInt(new Date().getTime() / 1000, 10), 8);
  retId += formatSeed(this.php_js.uniqidSeed, 5); // add seed hex string
  if (more_entropy) {
    // for more entropy we add a float lower to 10
    retId += (Math.random() * 10).toFixed(8).toString();
  }

  return retId;
}

