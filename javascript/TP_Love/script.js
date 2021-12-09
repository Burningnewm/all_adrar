// Pour storer dans des const les differents elements necessaires
const button = document.querySelector("#button");
const homme = document.querySelector("#homme");
const femme = document.querySelector("#femme");
const percentageText = document.querySelector("#percent-text");
const container = document.querySelector("#container");
const error = document.querySelector("#errorMessage");

//Fonction pour la bar de progres coeur et pour que le chiffre augmente graduellement.


//Pour storer la musique d'amouuuuur dans une variable  
let audio = new Audio("loveMusique.mp3");

// fonction qui permet d'appeler l'api
function love(){
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${homme.value}&fname=${femme.value}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "love-calculator.p.rapidapi.com",
            "x-rapidapi-key": "af141c685bmshe6e5cab332c7c93p1f2de0jsn1f6b013b8b61"
    }
    })
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        console.log(data);
    // Si l'input est vide afficher un message d'erreur et faire disparaitre le coeur.
    if (homme.value == "" || femme.value == ""){
        error.style.display = "block";
        container.style.display = "none";
        audio.pause();
        audio.currentTime = 0;
    }
    // sinon afficher le coeur et lancer la musique si la compatibilité est supérieur à 65%
    else{
    const percentage = data.percentage;
    const loveCompatibility = data.percentage / 100;
    var bar = new ProgressBar.Path('#heart-path', {
        easing: 'easeInOut',
        duration: 1400,
        step: function(state, progressPercentage) {
            percentageText.innerHTML = "" +  (progressPercentage.value() * 100).toFixed(0) + "";
    }
      }); 
    bar.set(0);
    bar.animate(loveCompatibility);
    container.style.display = "block";
    error.style.display = "none";
    if (percentage >= 65){
        audio.play();
    }
    // pause la musique si 
    else {
        audio.pause();
        audio.currentTime = 0;
    }
    }})
 // catch erreur eventuelle.
    .catch(err => {
       console.error(err);
    });
}
// add event lorsqu'on click sur le boutton.
button.addEventListener('click', (e) => { 
    e.preventDefault();
    love(); 
});





