function my_prix(){
	var prix_sejour = 300;
	var prix_reduit = 120;
	var duree_sejour;
	
	var nb_adulte = document.getElementById('nb_adultes').value;
	var nb_enfant = document.getElementById('nb_enfants').value;
	var petit_dejeuner;
	var prix= document.getElementById('prix');
	
	duree_sejour = duree_du_sejour();
	prix.value=(prix_reduit*nb_enfant + prix_sejour*nb_adulte)*duree_sejour;
	console.log(prix);

	if(document.getElementById('petit_dejeuner').value == 'oui'){
		prix.value = prix.value + (duree * (nb_adulte+nb_enfant)) * 8;
	}

}

function duree_du_sejour(){
	var aller=document.getElementById('date_depart').value;
	var retour =document.getElementById('date_retour').value;
	var duree;

	console.log(aller);
	console.log(retour);

	aller = new Date(aller);
	retour = new Date(retour);
	duree = retour - aller;
	duree= duree/(1000*60*60*24);

	if(duree < 0){
		alert('La date de retour doit être postérieure à la date de départ.');
		document.getElementById('date_retour').value = null;
	}
	return duree;
	
}

function data(){
    
    var searchParams = new URLSearchParams(window.location.search);
    
    document.getElementById("prenom").innerHTML = searchParams.get("prenom")
    document.getElementById("nom").innerHTML = searchParams.get("nom")
    document.getElementById("email").innerHTML = searchParams.get("email")
    document.getElementById("telephone").innerHTML = searchParams.get("telephone")
    document.getElementById("date_depart").innerHTML = searchParams.get("date_depart")
    document.getElementById("date_retour").innerHTML = searchParams.get("date_retour")
    document.getElementById("nb_adultes").innerHTML = searchParams.get("nb_adultes")
    document.getElementById("nb_enfants").innerHTML = searchParams.get("nb_enfants")
    document.getElementById("petit_dej").innerHTML = searchParams.get("petit_dej")
    document.getElementById("prix").innerHTML = searchParams.get("prix")
  
  } 