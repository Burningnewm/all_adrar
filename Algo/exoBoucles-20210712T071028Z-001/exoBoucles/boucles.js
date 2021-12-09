// Exercice 1 : écrire 50 fois "Bonjour" dans la console.
console.log("Exercice 1")
for (let i=0;i<50;i++){
    console.log("Bonjour")
}

// Exercice 2 : écrire dans la console :
// A
// B
// A
// B
// A
// B
// A
// B
// A
// B
console.log("Exercice 2")
for (let i=0;i<5;i++){
    console.log("A")
    console.log("B")
}

// Exercice 3 : écrire dans la console :
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
console.log("Exercice 3")
for (let i=0;i<3;i++){
    for (let j=0; j<5;j++){
    console.log("A")
    }
    console.log("B")
}

// Exercice 4 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
console.log("Exercice 4")
for (let i=0;i<10;i++){
    console.log(i)
}

// Exercice 5 : écrire dans la console :
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
console.log("Exercice 5")
for (let i=3;i<13;i++){
    console.log(i)
}
// Exerice 6 : écrire dans la console :
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 3
// 0
// 1
console.log("Exercice 6")
for (let i=0;i<10;i++){
    console.log(i%4);
}

// Exercice 7 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// A
// A
// A
// 8
// 9
console.log("Exercice 7")
for (let i=0;i<10;i++){
    if (i==5 ||i==6||i==7){
        console.log("A");
}
    else {
    console.log(i);
    }
}
// Exercice 8 : écrire dans la console :
// 100
// 1
// 2
// 103
// 4
// 5
// 106
// 7
// 8
// 109
console.log("Exercice 8");
for (let i=0;i<10;i++){
    if (i%3==0){ 
        console.log(i+100);
}
    else {
        console.log(i)
    }
    
}
// Exercice 9 : écrire dans la console :
// 0
// 101
// 202
// 3
// 104
// 205
// 6
// 107
// 208
// 9
console.log("Exercice 9");
for (let i=0;i<10;i++){
    if (i%3==0){ 
        console.log(i);
}
    else {
        if(i%3==1){
            console.log(i+100)
        }
        else{
        console.log(i+200)
        }
    }
    
}

// Exercice 10 : écrire dans la console tous les résultats possibles de lancers de deux dé :
// 1 1
// 1 2
// 1 3
// ...
// 6 4
// 6 5
// 6 6
console.log("Exercice 10");
    for (let i=1;i<7;i++){
    x=0;
        for (let j=1;j<7;j++){
        x++;
        console.log(x,i);
        }
    }
// Exercice 11 : adapter l'exercice précédent pour enlever les doublons (on ne veut pas afficher 1 2 et 2 1, mais seulement l'un des deux).
console.log("Exercice 11");
for (let i=1;i<7;i++){
    for (let j=i; j<7;j++){
        console.log(j,i);
    }
}
    
// Exercice 12 : en prenant des dés à 20 faces, combien de résultats différents (sans doublon) peut-on afficher ? (Autrement dit : adapter le code précédent pour compter les résultats au lieu de les afficher)
console.log("Exercice 12");
let result=0;
for (let i=1;i<21;i++){
    for (let j=i; j<21;j++){
        result++;
    }
}
console.log(result);

// Exercice 13 : afficher la table de multiplication de 1 (de 1 à 9):
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// 1x5 = 5
// 1x6 = 6
// 1x7 = 7
// 1x8 = 8
// 1x9 = 9
console.log("Exercice 13");
let a = 1;
for (let i=1;i<10;i++){
    b=a*i;
    console.log(a, "x", i,"=", b);
}
// Exercice 14 : que faut-il modifier du code précédent pour obtenir la table de 2 :
// 2x1 = 2
// 2x2 = 4
// 2x3 = 6
// 2x4 = 8
// 2x5 = 10
// 2x6 = 12
// 2x7 = 14
// 2x8 = 16
// 2x9 = 18
console.log("Exercice 14");
let c = 2;
for (let i=1;i<10;i++){
    d=c*i;
    console.log(c, "x", i,"=", d);
}
// Exercice 15 : comment généraliser pour afficher toutes les tables de multiplication de 1 à 9 :
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// ...
// 9x7 = 63
// 9x8 = 72
// 9x9 = 81
console.log("Exercice 15");
let f;
for (let i=1;i<10;i++){
    for (let j=1;j<10;j++){
        f=i*j;
        console.log(i, "x", j,"=", f);
    }
}
// Exercice 16 : calculer 1+2+3+4+...+99+100. (Vous devriez trouver 5050)
console.log("Exercice 16");
let total=0;
for (let i=0;i<101;i++){
    total+=i;
}
console.log(total);
// Exercice 17 : trouver le nombre n tel que 1+2+3+4+5+...+(n-1)+n = 302253
console.log("Exercice 17");
let n=1;
let tot=1;
while (tot<302253){
    n++;
    tot+=n;
}
console.log(n);
// Exercice 18 : Afficher :
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
console.log("Exercice 18");
let z=1;
let k=1;
while (k<56){
    console.log(z);
    z+=k;
    console.log(k);
    k+=z;  
}

// Exercice 19 : compter combien il y a de nombres multiples de 3 ou de 7 entre 1234 et 5678
/*console.log("Exercice 19");
let result1=0;
let result2=0;
for (let i=1234;i<5678;i++){
    if(i%3==0){
        result1++;
    }    
    else { if (i%7==0){
        result2++;
    }
    }
}
console.log(result1, result2);
*/

console.log("Exercice 19");
let result1=0;
for (let i=1234;i<5678;i++){
    if(i%3==0 || i%7==0 ){
        result1++;
    }  
}
console.log(result1);


// Exercice 20 : afficher dans la console :
/*
*
**
***
****
*****
*/
console.log("Exercice 20");
let star1="*";
let star2="*";
for (let i=0;i<5;i++){
    console.log(star1);
    star1+=star2;
}

// Exercice 21 : afficher dans la console :
/*
    *
   **
  ***
 ****
*****
*/
/*console.log("Exercice 21");
let star3="";
for (let i=0;i<1;i++){
    star3+="    *";
    console.log(star3);
    for (let j=0;j<1;j++){
        star3="";
        star3+="   **";
        console.log(star3);
    }
    for (let k=0;k<1;k++){
        star3="";
        star3+="  ***"
        console.log(star3);
    }
        for (let l=0;l<1;l++){
            star3="";
            star3+=" ****"
        console.log(star3);
        }
        for (let m=0;m<1;m++){
            star3="";
            star3+="*****"
        console.log(star3);
        }
}
*/
console.log("Exercice 21");
let star3="";
for (let i=5;i>0;i--){
    star3+=" ";
    console.log(star3);
    for (let j=5;j>i;j--){
        star3+="*";
        console.log(star3);
    }
    for (let k=5;k>i;k--){
        star3+="  ***"
        console.log(star3);
    }
}

// Exercice 22 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
*/
console.log("Exercice 22");
let star4="";
for (let i=0;i<1;i++){
    star4+="    *";
    console.log(star4);
    for (let j=0;j<1;j++){
        star4="";
        star4+="   ***";
        console.log(star4);
    }
    for (let k=0;k<1;k++){
        star4="";
        star4+="  *****"
        console.log(star4);
    }
        for (let l=0;l<1;l++){
            star4="";
            star4+=" *******"
        console.log(star4);
        }
        for (let m=0;m<1;m++){
            star4="";
            star4+="*********"
        console.log(star4);
        }
}

// Exercice 23 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
console.log("Exercice 23");
let star5;
for (let i=0;i<1;i++){
    star5="";
    star5+="    *";
    console.log(star5);
    for (let j=0;j<1;j++){
        star5="";
        star5+="   ***";
        console.log(star5);
    }
    for (let k=0;k<1;k++){
        star5="";
        star5+="  *****"
        console.log(star5);
    }
        for (let l=0;l<1;l++){
            star5="";
            star5+=" *******"
        console.log(star5);
        }
        for (let m=0;m<1;m++){
            star5="";
            star5+="*********"
        console.log(star5);
        }
        for (let l=0;l<1;l++){
            star5="";
            star5+=" *******"
        console.log(star5);
        }
        for (let k=0;k<1;k++){
            star5="";
            star5+="  *****"
            console.log(star5);
        }
        for (let j=0;j<1;j++){
            star5="";
            star5+="   ***";
            console.log(star5);
        }
        for (let i=0;i<1;i++){
            star5="";
            star5+="    *";
            console.log(star5);
        }
}