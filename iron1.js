



function affiche() {
	var temps1 = 'rien';
	temps1 = document.getElementById('donne').value ;
	document.getElementById('view1').innerHTML = (temps1.substr(0,2) + " min" + " " + temps1.substr(3,4) + " sec");
	var tot1 = Number(temps1.substr(0,2)*60);
	var tot2 = Number(temps1.substr(3,4));
	var tot = tot1+tot2;
	document.getElementById('view2').innerHTML = (tot + " secondes par 100m");
	var natation = tot*38;
	var heure = Math.floor(natation/3600);
	var minutes =(natation%3600)/60;
	var secondes = (minutes-Math.floor(minutes))*60;
	document.getElementById('view3').innerHTML = ("Votre temps global sera de " + heure + " heure" + Math.floor(minutes) + " minutes " + Math.floor(secondes) + " secondes !");
}


