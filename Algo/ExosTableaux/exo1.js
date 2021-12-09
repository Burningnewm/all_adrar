// 1) Créer un tableau tab1 de 6 cases, qui contient les nombres 144, 202, 216, 216, 222 et 64.
let tab1 = [144,202,216,216,222,64];
// 2) Ajouter le nombre 0 à la fin du tableau tab1.
tab1.push(0);
// 3) Afficher *un par un* tous les éléments du tableau tab1.
for (let i=0; i<tab1.length;i++){
    console.log(tab1[i]);
}
// 4) Retirer le dernier élément du tableau tab1.
tab1.pop();
// 5) Créer un tableau tab2 qui contient les nombres 238, 222, 228, 216, 200.
let tab2 = [238,222,228,216,200];
// 6) Ajouter le nombre 58 à la fin de tab2.
tab2.push(58);
// 7) Ajouter *un par un* tous les éléments du tableau tab2 à la fin du tableau tab1.
for (let i=0; i<tab2.length;i++){
    tab1.push(tab2[i]);
}
// 8) Afficher *un par un* tous les éléments du tableau tab1.
for (let i=0; i<tab1.length;i++){
    console.log(tab1[i]);
}
// 9) Retirer et stocker dans la variable maVariable le dernier élément du tableau tab1.
let maVariable = tab1.pop();
// 10) Afficher la taille du tableau tab1.
console.log(tab1.length);
// 11) Ajouter le nombre 66 à la fin du tableau tab1.
tab1.push(66);
// 12) Diviser par 2 toutes les variables contenues dans le tableau tab1.
for (let i=0; i<tab1.length;i++){
    tab1[i]/=2;
}
// 13) Pour vérifier si vous êtes correctement arrivé(e) jusqu'ici, essayez les deux lignes de code suivantes :
console.log(tab1.reduce((acc,cur)=> acc+String.fromCharCode(cur),""));
console.log(String.fromCharCode(maVariable)+String.fromCharCode(maVariable-17));
// (On ne cherchera pas à comprendre ça)

let tab = [14,15,16,17,17,20,22,21];

// Afficher tous les éléments pairs du tableau tab.

for (let i=0;i<=tab.length;i++){
    if (tab[i]%2==0){
        console.log(tab[i]);
    }
}
// Afficher tous les éléments du tableau tab qui sont dans des cases de numéro pair.

for (let i=0;i<=tab.length;i++){
    if (i%2==0){
        console.log(tab[i]);
    }
}
// Exo T1 : fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.

function exoT1(tab){
    console.log(tab[tab.length-1]);
}
exoT1(tab);


// Exo T2 : fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function exoT2(tab){
    return tab[tab.length-1];
}
console.log(exoT2(tab));
// Exo T3 : fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.

function exoT3(tab){
    let a=tab[0];
    for (let i=1;i<tab.length;i++){
        if (tab[i]<a){
            a=tab[i];
        }  
    }
    return a;  
}
console.log(exoT3(tab));

// Exo T4 : fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

function exoT4(tab){
    let a=tab[0];
    for (let i=1;i<tab.length;i++){
        if (tab[i]>a){
            a=tab[i];
        }  
    }
    return a;  
}
console.log(exoT4(tab));

// Exo T5 : fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
let number=tab[3];
function exoT5(tab,number){
    let t=0;
    for (let i=0;i<tab.length;i++){
        if (number==tab[i]){
            t++;
        }
    }
    return t;
}
console.log(exoT5(tab,number));
// Exo T6 : fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.


let nombre=10;

function exoT6(tab,nombre){
    return exoT5(tab,nombre)>0;
}
console.log(exoT6(tab,nombre));


/*function exoT6(tab,nombre){
    
    for (let i=0;i<tab.length;i++){
        if (nombre==tab[i]){
           return true;
        }
    }
    return false

}
console.log(exoT6(tab, nombre));
*/

// Exo T7 (plus difficile) : fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
console.log("exoT7")

function exoT7(tab){
    let b;
    let a=tab[0];
    for (let i=1;i<tab.length;i++){
        if (tab[i]>a){
            b=a;
            a=tab[i];
        }  
        else if (tab[i]>b && tab[i]!=a){
            b=tab[i];
        }
    }
    if (a>b){
        return b;
    } 
    else {
        return a;
    }
}
console.log(exoT7(tab));

// Exo T8 (plus difficile 2) : même chose que l'exo T6 on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?
let nombre1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// ALGORITHME DE TYPE DIVISER POUR REGNER!!
/*function exoT8(nombre1,nombre){
    if(nombre>nombre1[7]){
        for (let i=6;i<10;i++){
            if (nombre==nombre1[i]){
            return true
        }
    }
        }
    else if (nombre>nombre1[9]){
     for (let i=10;i<15;i++){
            if (nombre==nombre1[i]){
                return true;
            }
        }
        }
    else if (nombre<nombre1[14]){
        for (let i=10;i<15;i++){
            if (nombre==nombre1[i]){
            return true;
            }
        }
    }
    else {
        return false
    }
}
console.log(exoT8(tab, nombre1));
*/

/*
Tour de Hanoi : https://www.mathsisfun.com/games/towerofhanoi.html
Il y a 3 tours, et des disques sur l'une d'entre elles. On ne peut déplacer qu'un seul disque à la fois, et on ne peut pas placer un disque sur un autre plus petit.

Le but est d'écrire une fonction qui **affiche dans la console** la solution de ce problème.
Exemple avec le code (obfusqué) :
*/

/*
=====!!!!!=====
Code solution
Le but n'est pas d'essayer de lire ce code ! :smile:
Ça permet juste de pouvoir tester le code
=====!!!!!=====
*/
var _0x46d6=['Déplacer\x20de\x20','log'];(function(_0xc4e4ba,_0x67764c){var _0x46d64f=function(_0x5dd88d){while(--_0x5dd88d){_0xc4e4ba['push'](_0xc4e4ba['shift']());}};_0x46d64f(++_0x67764c);}(_0x46d6,0x8d));var _0x5dd8=function(_0xc4e4ba,_0x67764c){_0xc4e4ba=_0xc4e4ba-0x1ae;var _0x46d64f=_0x46d6[_0xc4e4ba];return _0x46d64f;};function hanoi(_0x52aa04,_0x48ecf8,_0x1a53ff,_0x5f2a2e){var _0x5208d9=_0x5dd8;_0x52aa04>0x0&&(hanoi(_0x52aa04-0x1,_0x48ecf8,_0x5f2a2e,_0x1a53ff),console[_0x5208d9(0x1ae)](_0x5208d9(0x1af)+_0x48ecf8+'\x20vers\x20'+_0x1a53ff),hanoi(_0x52aa04-0x1,_0x5f2a2e,_0x1a53ff,_0x48ecf8));}


hanoi(3,"un","trois","deux"); // Je demande : comment déplacer 3 disques de la tour "un" vers la tour "trois", avec la tour "deux" en intermédiaire.
/*

     |            |            |
     |            |            |
     |            |            |
    -|-           |            |
   --|--          |            |
  ---|---         |            |
=====|=====  =====|=====  =====|=====
    un          deux         trois
*/
// Résultat (dans la console) :
// Déplacer de un vers trois
// Déplacer de un vers deux
// Déplacer de trois vers deux
// Déplacer de un vers trois
// Déplacer de deux vers un
// Déplacer de deux vers trois
// Déplacer de un vers trois

function hanoi1(n,a, b, c){
    if (n==1){
        console.log("Déplacer de " + a + " vers " + c);
    }
    else{
        hanoi1(n-1,a,c,b);
        console.log("Déplacer de " + a + " vers " + c);
        hanoi1(n-1,b,a,c);
    }
}
hanoi1(8,"a","b","c");
