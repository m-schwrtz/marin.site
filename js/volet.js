/*--------------------------------------animation volet---------------------------------------------*/
function ouverture()
    //BUT: ouvrir le volet de navigation
    //ENTREE: clic sur l'aubergine
    //SORTIE: ouverture du volet (déclenchement de la transition vers la nouvelle classe)
{
    document.querySelector('.volet').classList.add('voletOuvert');
    document.querySelector('.voletOuvert').classList.remove('volet');
}

function fermeture() 
    //BUT: fermer le volet de navigation
    //ENTREE: clic sur l'aubergine
    //SORTIE: fermeture du volet (déclenchement de la transition vers la nouvelle classe)
{
    document.querySelector('.voletOuvert').classList.add('volet');
    document.querySelector('.volet').classList.remove('voletOuvert');
}