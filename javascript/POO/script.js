function Stagiaires(nom, prenom, age, villeDeNaissance){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.villeDeNaissance = villeDeNaissance;
    this.sePresenter = () =>{
        console.log("bonjour, je m'appelle "+ this.nom +" "+ this.prenom + " j'ai "+ this.age+" ans, et je viens de "+ this.villeDeNaissance.nom);
    }
}

function Ville(nom, nombreHab, pays){
    this.nom = nom;
    this.nombreHab = nombreHab;
    this.pays = pays;
}
let montpellier = new Ville("Montpellier", 300000, "France");
let moiMeme = new Stagiaires("Felgueiras", "Manuel", 38, montpellier);
var lattes = new Ville("Lattes", 30000, "France")
let nounours = new Stagiaires("Bailly", "Baptiste", 22, lattes)
moiMeme.sePresenter();
nounours.sePresenter();
console.log(nounours);

class Personnage{
    constructor(pseudo, classe, sante, attaque){
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
        this.evoluer = () => {
            this.niveau += 1;
            console.log(this.pseudo + " passe au niveau " + this.niveau);
        }
        this.verifierSante = () => {
            if (this.sante <= 0){
                this.sante = 0
                console.log(this.pseudo + " a perdu :(")
            }
            return;
        }
    }
    get informations(){
       return this.pseudo + " " + this.classe+ " a "+ this.sante +" points de vie et est au niveau "+ this.niveau +"."
    }

}
 class Magicien extends Personnage{
     constructor(pseudo){
         super(pseudo, "magicien", 170, 90);
         this.attaquer = (personnage) => {
             if (personnage instanceof Personnage){
             personnage.sante -= this.attaque;
             console.log(this.pseudo +  " attaque " + personnage.pseudo + " en lançant un sort "+ this.attaque + 
               " dégâts ");
               this.evoluer();
               personnage.verifierSante();
             }
             else{
                 console.log("veuillez rentrer un personnage existant!")
             }
         }
         this.coupSpecial = (personnage) => {
            if (personnage instanceof Personnage){
             personnage.sante -= this.attaque * 5;
             console.log(this.pseudo +  " attaque avec son coup spécial puissance des arcanes " + personnage.pseudo +  this.attaque * 5 +" dégâts ");
               this.evoluer();
               personnage.verifierSante();
            }
            else{
                console.log("veuillez rentrer un personnage existant!")
            }
         }
     }
 }
 class Guerrier extends Personnage{
    constructor(pseudo){
        super(pseudo, "guerrier", 350, 50);
        this.attaquer = (personnage ) => {
            if ( personnage instanceof Personnage){
            personnage.sante -= this.attaque;
            console.log(this.pseudo +  " attaque " + personnage.pseudo + " avec son épée "+ this.attaque + 
              " dégâts ");
              this.evoluer();
              personnage.verifierSante();
            }
            else{
                console.log("veuillez rentrer un personnage existant!")
            }
        }
        this.coupSpecial = (personnage) => {
            if ( personnage instanceof Personnage){
            personnage.sante -= this.attaque * 5;
            console.log(this.pseudo +  " attaque avec son coup spécial haches de guerre " + personnage.pseudo +  this.attaque * 5 +" dégâts ");
              this.evoluer();
              personnage.verifierSante();
            }
            else{
                console.log("veuillez rentrer un personnage existant!")
            }
        }
 } 
}

class Trompette {

}
toutou = new Trompette();
let aragorn = new Guerrier("Aragorn");
let gandalf = new Magicien("Gandalf");
console.log(aragorn.informations);
console.log(gandalf.informations);
gandalf.attaquer(aragorn);
console.log(aragorn.informations);
aragorn.attaquer(gandalf);
aragorn.coupSpecial(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(aragorn);
console.log(aragorn);