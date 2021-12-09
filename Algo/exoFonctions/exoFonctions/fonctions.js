// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1(){
    console.log(17);
}

// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
function f2(){
    return 17;
}

// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();

// Utiliser la fonction f2 pour afficher 17 dans la console.
console.log(f2());

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
/*
Dans le cas ou on ne veut pas afficher le resultat directement dans la console mais on veut uitliser la 
fonction pour effectuer un autre calcul.
*/
// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(n){
    n*=2;
    console.log(n);
}
// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(x){
   return x*2;
}

// Utiliser la fonction f3 pour écrire dans la console le double de 99.
f3(99);

// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(99));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a =f4(99);

// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(b,c){
    console.log(b+c);
}

// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(b,c){
    return b+c;
}

// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
f5(42,77);

// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(f6(42,77));

// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a+=f6(42,77);
// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(b,c){
    if (b>c){
        return b;
    }
    else{
        return c
    }
}
// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
function f8(b,c,d){
    if (b>c&&b>d){
        return b;
    }
    else  if (c>b&&c>d){
        return c;
    }
    else {
        return d;
    }
}

// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f81(b,c,d){
    let a=f7(c,d)
    if (b>a){
        return b;
    }
    else {
        return a;
    }
}

function f82(b,c,d){
    let a=f7(b,c);
    let e=f7(c,d);
    let f=f7(b,d);
    if (a>e&&a>f){
        return a;
    }
    else  if (e>b&&e>f){
        return e;
    }
    else {
        return f;
    }
}

function f83(b,c,d){
 return f7(b,f7(c,d));
}

// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function f9(word,number){
    for (let i=0;i<number;i++){
        console.log(word)
    }
}
