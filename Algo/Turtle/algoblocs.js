/*______________
Série A
_______________*/
/*
//Initialisation niveau A1
setPos(300,300);
setLineWidth(5);
changeColor(color.red);
faceDown();

//Realisation niveau A1
forward(200);
faceRight();
forward(100);

//Initialisation niveau A2
setPos(300,300);
setLineWidth(5);
changeColor(color.yellow);
faceLeft();

//Realisation niveau A2
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);

//Initialisation niveau A3
setPos(300,300);
setLineWidth(5);
changeColor(color.yellow);
faceLeft();

//Realisation niveau A2
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceUp();
forward(100);
faceDown();
forward(200);


//Initialisation niveau A4
setPos(200,500);
setLineWidth(5);
changeColor(color.green);
faceRight();

//Realisation niveau A4
forward(200);
arcLeft(100,180);
forward(100);
arcRight(100,180);
forward(200);



//Initialisation niveau A5
setPos(300,200);
setLineWidth(5);
changeColor(color.fuchsia);
faceRight();

//Réalisation A5
arcRight(100,360);
arcRight(50,180);
arcLeft(50,180)



//Initialisation niveau A6
setPos(300,450);
setLineWidth(5);
changeColor(color.blue);
faceUp();

//Réalisation niveau A6
forward(100);
up();
forward(100);
down();
forward(200);



//Initialisation niveau A7
setPos(200,200)
faceDown();
setLineWidth(5);
changeColor(color.green);

//Réalisation niveau A7
forward(200);
arcLeft(100,180)
up();
forward(50);
down();
forward(250);
arcLeft(100,180)
forward(50);


//Initialisation niveau A8
setPos(300,300);
faceUp();
changeColor(color.fuchsia);
setLineWidth(5);

//Réalisation niveau A8
forward(50)
faceRight();
forward(100);
faceDown();
forward(200);
faceLeft();
forward(50);
up();
forward(50);
faceUp();
forward(50)
down();
forward(50);



//Initialisation niveau A9
setPos(200,400);
changeColor(color.blue);
setLineWidth(5);
faceRight();

//Réalisation niveau A9
forward(200);
faceLeft();
arcRight(50,180);
arcLeft(50,180);
forward(200);
arcLeft(50,180);
arcRight(50,180);



//Initialisation niveau A10
setPos(300,300);
changeColor(color.red);
setLineWidth(5);
faceRight();

//Réalisation niveau A10
arcLeft(50,180);
changeColor(color.green);
arcLeft(100,180);
changeColor(color.yellow);
arcLeft(200,180);



//Initialisation niveau A11
setPos(150,200);
faceUp();
changeColor(color.blue);
setLineWidth(5);

//Réalisation niveau A11
arcRight(50,180);
faceRight();
up();
forward(50);
down();
faceUp();
arcRight(50,180);
up();
forward(50);
faceLeft();
forward(25);
down();
faceDown();
changeColor(color.fuchsia);
arcRight(100,180);



//Initialisation niveau A12
setPos(75,250);
faceUp();
changeColor(color.green);
setLineWidth(5);

//Réalisation niveau A12
arcRight(50,180);
forward(100);
arcLeft(50,180)
faceRight();
up();
forward(50);
down();
faceDown();
changeColor(color.yellow);
arcLeft(50,180);
forward(100);
arcRight(50,180);


//Initialisation maison
setPos(250,300)
faceDown();
changeColor(color.black),
setLineWidth(5);


//Réalisation maison
forward(100);
faceRight();
forward(100)
faceUp();
forward(100);
left(30);
forward(100)
left(120);
forward(100);
faceRight();
forward(100);

*/

/*______________
Série B
_______________*/

/*
//Intialisation niveau B1
faceRight();
changeColor(color.green);
setPos(100,100);
setLineWidth(5);

//Réalisation niveau B1


for (let i = 0 ; i < 4 ; i++){
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}



//Initialisation niveau B2
faceUp();
setPos(50,300)
changeColor(color.red);
setLineWidth(5);

//Réalisation niveau B2
for (let i=0;i<4;i++){
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}



//Initialisation niveau B3
setPos(250,250);
faceRight();
changeColor(color.fuchsia);
setLineWidth(5);

// Réalisation niveau B3
 for (let i=0;i<4;i++){
     forward(100);
     right(90);
 }


 //Initialisation niveau B4
 setPos(250,300);
 changeColor(color.blue);
 faceRight();
 setLineWidth(5);

 //Réalisation niveau B4

 for (let i=0;i<3;i++){
     forward(100)
     left(120);
 }

 

 //Initialisation niveau B5
 setPos(300,300);
 changeColor(color.yellow);
 faceUp();
 setLineWidth(5);

 //Réalisation niveau B5
 forward(100)
 for (let i=0;i<3;i++){
    changeColor(color.red);
     forward(50);
     right(120);
 }


 //Initialisation niveau B6
 setPos(150,300);
 changeColor(color.red);
 faceRight();
 setLineWidth(5);

 //Réalisation niveau B6
 for (let i=0;i<2;i++){
     forward(50)
     faceUp();
     forward(50)
     faceRight();
 }
 changeColor(color.green);
 for (let i=0;i<3;i++){
     forward(50);
     faceDown();
     forward(50);
     faceRight();
 }


 //Initialisation niveau B7
setPos(300,300);
faceRight();
changeColor(color.yellow);
setLineWidth(5);

//Réalisation niveau B7
 for (let i=0;i<4;i++){
     forward(100);
     right(90);
 }
for (let i=0;i<3;i++){
    forward(100);
    left(120);
}

//Initialisation niveau B8
setPos(300,300);
faceRight();
setLineWidth(5);
changeColor(color.yellow);

//Réalisation niveau B8
for (let i=0;i<8;i++){
    forward(200);
    right(135);
}



//Initialisation niveau B9
setPos(150,300);
faceRight();
setLineWidth(5);
changeColor(color.fuchsia);

//Réalisation niveau B9
forward(50);
up();
forward(50);
down();

for (let i=0;i<3;i++){
    forward(100);
    right(120);
}



//Initialisation niveau B10
setPos(25,300);
changeColor(color.green);
setLineWidth(5);
faceRight();

//Réalisation niveau B10
for (let i=0;i<8;i++){
    forward(100);
    right(135);
}
forward(100);
up();
forward(100);
down();
changeColor(color.yellow);
for (let i=0;i<8;i++){
    forward(200);
    left(135);
}
right(90);
up();
forward(100);
down();
changeColor(color.fuchsia);
for (let i=0;i<8;i++){
    forward(100);
    right(135);
}


//Initialisation niveau B11
setPos(250,250);
setLineWidth(5);
changeColor(color.red);
faceRight();

//Réalisation niveau B11
for (let i=0;i<6;i++){
    forward(50);
    left(90);
    forward(50);
    right(90);
    forward(50);
    right(90);
}


//Initialisation niveau B12
setPos(350,350)
changeColor(color.fuchsia);
setLineWidth(5);
faceRight();

//Réalisation niveau B12
for (let i=0;i<3;i++){
    right(90);
    forward(50);
}
up();
forward(50);
down();
changeColor(color.green);
for (let i=0;i<3;i++){
    forward(50);
    right(90);
}

//Initialisation niveau B13
setPos(200,200);
setLineWidth(5);
changeColor(color.green);
faceRight();

//Réalisation niveau B13
for (let i=0;i<8;i++){
    forward(50);
    left(135);
    forward(25);
    right(90);
    forward(25);
    right(90);
}


//Initialisation niveau B14
setPos(50,50);
changeColor(color.yellow);
faceRight();
setLineWidth(5);

//Réalisation niveau B14
forward(50);
for (let i=0;i<5;i++){
    right(120);
    forward(100);
    left(120);
    forward(100);
}

//Initialisation niveau B15
setPos(200,200);
changeColor(color.red);
faceRight;
setLineWidth(5);

//Réalisation niveau B15
for (let i=0;i<4;i++){
    forward(100);
    arcLeft(50,90)
}

//Initialisation niveau B16
setPos(200,400);
setLineWidth(5);
changeColor(color.green);
faceRight();

//Réalisation niveau B16
arcLeft(200,90);
faceLeft();
for (let i=0;i<4;i++){
    arcLeft(25,90);
    arcRight(25,90);
}

//Initialisation niveau B17
setPos(200,300);
changeColor(color.blue);
faceRight();
setLineWidth(5);

for (let i=0;i<6;i++){
    arcLeft(50,180);
    left(120);
}

//Initialisation niveau B18
setPos(200,400);
faceRight();
changeColor(color.yellow);
setLineWidth(5);

//Réalisation niveau B18
for (let i=0;i<8;i++){
    forward(200);
    left(90);
    forward(50);
    left(45);
}


//Initialisation niveau B19
setPos(300,550);
changeColor(color.aqua);
faceRight();
setLineWidth(5);

//Initialisation niveau B19
for (let i=0;i<4;i++){
    arcLeft(50,180);
    faceRight();
}
faceUp();
up();
forward(50);
down();
faceLeft();
for (let i=0;i<4;i++){
    arcLeft(50,180);
    faceLeft();
}

//Initialisation niveau B20
setPos(200,200);
setLineWidth(5);
changeColor(color.aqua);
faceDown();

//Réalisation niveau B20
for (let i=0;i<2;i++){
    forward(100);
    arcLeft(50,90);
}
forward(150);
arcLeft(50,90);
forward(100);
arcLeft(50,90);
forward(50);
faceRight();
forward(200);
faceLeft();
forward(100);
faceDown();
up();
forward(25);
faceRight();
down();
arcRight(50,360);



//Initialisation niveau B21
setPos(350,200);
faceRight();
shiftColor(0.1);
setLineWidth(5);


//Réalisation niveau B21
for (let i=0;i<6;i++){
    forward(100);
    left(120);
    forward(50);
    left(120);
    forward(100);
    right(60);
    forward(50);
    right(120);
    forward(50);
    right(120);
    up();
    forward(100);
    down();
    shiftColor(0.1);
}


//Initialisation niveau B22
setPos(300,300);
changeColor(color.yellow);
left(120);
setLineWidth(5);

//Réalisation niveau B22
for (let i=0;i<6;i++){
    forward(100);
    left(60);
}
changeColor(color.green);
for (let i=0;i<3;i++){
    forward(100);
    right(90);
}
changeColor(color.red);
left(60);
forward(100)
changeColor(color.green);
right(120);
for (let i=0;i<5;i++){
    forward(100);
    left(90);
}
left(150);
forward(100);



//Initialisation niveau B23
setPos(200,300);
changeColor(color.fuchsia);
faceRight();
left(45);
setLineWidth(5);

//Réalisation niveau B23
for (let i=0;i<3;i++){
    forward(50);
    right(90);
    forward(50);
    left(90);
}
right(135);
forward(50);
for (let i=0;i<3;i++){
    right(45);
    forward(50);
    right(90);
    forward(50);
    left(135);
}
right(180);
forward(50);

//Initialisation niveau B24
setPos(200,200);
changeColor(color.red);
faceRight();
setLineWidth(5);

//Réalisation niveau B24
for (let i=0;i<8;i++){
    forward(100);
    left(135);
}
forward(50);
changeColor(color.green);
for (let i=0;i<3;i++){
    right(135);
    forward(100);
    left(135);
    forward(50);
}
forward(50);
right(90);
forward(25);
for (let i=0;i<2;i++){
    left(90);
    forward(25);
}
right(90);
forward(50);
for (let i=0;i<3;i++){
    forward(50);
    left(135);
    forward(100);
    right(135);
}

*/

/*______________
Série C
_______________*/

/*

//Initialisation niveau C1
setPos(50,300);
changeColor(color.blue);
faceRight();
setLineWidth(5);

//Réalisation niveau C1
for (let i=0;i<4;i++){
    for (let i=0;i<3;i++){
        forward(100);
        right(120);
    }
    forward(100);
}



//Initialisation niveau C2
setPos(250,580);
changeColor(color.fuchsia);
faceUp();
setLineWidth(5);

//Réalisation niveau C2
for (let i=0;i<6;i++){
    for (let i=0;i<4;i++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}



//Initialisation niveau C3
setPos(25,350);
changeColor(color.green);
faceRight();
setLineWidth(5);

//Réalisation niveau C3
for (let i=0;i<3;i++){
    for (let i=0;i<8;i++){
        forward(100);
        left(135);
    }
    up();
    forward(200);
    down();
    shiftColor(0.1);
}

*/

/*________________

           Serie D

________________*/

/*

//Initialisation niveau D6
setPos(200,200);
changeColor(color.aqua);
faceRight();
setLineWidth(5);

//Réalisation de niveau D6
let i=50;
forward(i);
faceDown();
i=100;
forward(i);
faceRight();
i=150;
forward(i);



//Initialisation niveau D8
setPos(300,300);
changeColor(color.yellow);
faceRight();
setLineWidth(5);

//Réalisation de niveau D8
let length=50;
for (let i=0;i<2;i++){
    faceDown();
    forward(length);
    faceRight();
    forward(length);
}
faceUp();
length=100;
forward(length);
faceLeft();
forward(length);


//Initialisation niveau D9
setPos(300,300);
changeColor(color.blue);
faceRight();
setLineWidth(5);

//Réalisation de niveau D9
let length=50;
for (let i=0;i<6;i++){
    forward(length);
    right(120);
    length+=50;
}



//Initialisation niveau D11
setPos(50,300);
changeColor(color.white);
faceRight();
setLineWidth(5);

//Réalisation niveau D11
let length=125;
for (let i=0;i<5;i++){
    for (let j=0;j<4;j++){
        forward(length);
        left(120);
    }
    right(120);
    length-=25;
}



//Initialisation niveau D12
setPos(300,300);
changeColor(color.aqua);
faceRight();
setLineWidth(5);

//Réalisation niveau D11
let length=50;
for (let i=0;i<6;i++){
    for (let j=0;j<4;j++){
        forward(length);
        left(120);
    }
    right(60);
    length+=25;
}



//Initialisation niveau D13
setPos(330,300);
changeColor(color.fuchsia);
faceRight();
setLineWidth(5);

//Réalisation niveau D13
let radius=50;
let length=100;
for (let i=0;i<8;i++){
    arcRight(radius,180);
    up();
    forward(length);
    radius+=25;
    down();
}


//Initialisation niveau D15
setPos(300,300);
changeColor(color.fuchsia);
faceDown();
setLineWidth(5);

//Réalisation niveau D15
let corner=90;
let length=50;
for (let i=0;i<10;i++){
    forward(length);
    left(corner);
    length+=10;
    corner-=5;
}

/*________________

           Serie E

________________*/

/*

//Initialisation niveau E1
setPos(100,300);
changeColor(color.yellow);
faceRight();
setLineWidth(5);

//Réalisation niveau E1
function etoile(){
    for (let i=0;i<5;i++){
        forward(75);
        right(144);
    }
}
etoile();
forward(100);
etoile();
forward(200);
changeColor(color.green);
etoile();


//Initialisation niveau E2
setPos(300,300);
changeColor(color.blue);
faceRight();
setLineWidth(5);

//Réalisation niveau E2
function wing(){
    forward(200);
    for (let i=0;i<2;i++){
        right(120);
        forward(100);
    }
    left(60);
    forward(100);
}
for (let i=0;i<2;i++){
    wing();
}
right(90);
changeColor(color.red);
for (let i=0;i<2;i++){
    wing();
}


//Initialisation niveau E3
setPos(250,350);
changeColor(color.yellow);
faceRight();
setLineWidth(5);

//Réalisation niveau E3
function square(){
    for (let i=0;i<4;i++){
        forward(50);
        left(90);
    }
}
for (let i=0;i<6;i++){
    square();
    forward(100);
    left(60);
}



//Initialisation niveau E4
setPos(0,550);
changeColor(color.red);
faceRight();
setLineWidth(5);

//Réalisation niveau E4
function stair(){
    for (let i=0;i<2;i++){
        forward(50);
        faceUp();
        forward(50);
        faceRight();
    }
}
stair();
changeColor(color.yellow);
forward(100);
changeColor(color.blue);
stair();
changeColor(color.green);
stair();
forward(100);

//Initialisation niveau E7
setPos(25,300);
changeColor(color.red);
faceRight();
setLineWidth(5);

//Réalisation niveau E7
function pattern(){
    down();
    for (let i=0;i<2;i++){
        forward(50);
        left(45);
        forward(100);
        left(135);
    }
    up();
}
for (let i=0;i<2;i++){
    pattern();
    forward(100);
}
changeColor(color.blue);
for (let i=0;i<3;i++){
    pattern();
    forward(100);
}



//Initialisation niveau E8
setPos(25,300);
changeColor(color.red);
faceRight();
setLineWidth(5);

//Réalisation niveau E8
function triangle(){
    for (let i=0;i<3;i++){
        forward(100);
        left(120);
    }
    for (let i=0;i<3;i++){
        forward(50);
        right(120);
    }
}
triangle();
forward(100);
changeColor(color.aqua);
triangle();
forward(100);
faceDown();
changeColor(color.yellow);
triangle();


//Initialisation niveau E10
setPos(75,300);
changeColor(color.red);
faceRight();
setLineWidth(5);

//Réalisation niveau E10
function cross(){
    down();
    for (let i=0;i<4;i++){
        for (let i=0;i<2;i++){
            forward(25);
            right(90);
        }
        forward(25);
        left(90);
    }
    up();
}
for (let i=0;i<3;i++){
    cross();
    forward(100);
    faceUp();
    cross();
    forward(100);
    faceRight();
    shiftColor(0.3);
}



//Initialisation niveau E12
setPos(75,250);
changeColor(color.blue);
faceRight();
setLineWidth(5);

//Réalisation niveau E12
function squares(){
    let length=50
    for (let i=0;i<3;i++){
        for (let j=0;j<4;j++){
            forward(length);
            arcLeft(50,90);
        }
        length+=25;
    }
    
}
squares();
up();
faceDown();
forward(100);
shiftColor(0.25);
down();
squares();
faceRight();
up();
forward(250);
shiftColor(0.25)
down();
squares();

*/




























