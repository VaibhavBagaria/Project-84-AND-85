var Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");


Car1X = 10;
Car1Y = 10;
Car2X = 10;
Car2Y = 150;
CarWidth = 100;
CarHeight = 70;
Car1Image = "Car1.png";
Car2Image = "Car2.png";
backgroundImage = "Race.jpg";


function add() {
    background_img1tag = new Image()
    background_img1tag.onload = uploadBackground;
    background_img1tag.src = backgroundImage;

    car_img1tag = new Image()
    car_img1tag.onload = uploadCar1;
    car_img1tag.src = Car1Image;

    car_img2tag = new Image()
    car_img2tag.onload = uploadCar2;
    car_img2tag.src = Car2Image;
}
function uploadBackground() {
    ctx.drawImage(background_img1tag, 0, 0, Canvas.width, Canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car_img1tag, Car1X, Car1Y, CarWidth, CarHeight);
}

function uploadCar2() {
    ctx.drawImage(car_img2tag, Car2X, Car2Y, CarWidth, CarHeight);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keypressed = e.keyCode

    if (keypressed == '37') {
        Left1()
        console.log("Left");
    }
    if (keypressed == '38') {
        Up1()
        console.log("Up");
    }
    if (keypressed == '39') {
        Right1()
        console.log("Right");
    }
    if (keypressed == '40') {
        Down1()
        console.log("Down");
    }


    if (keypressed == '87') {
        Up2()
        console.log("Up");
    }
    if (keypressed == '65') {
        Left2()
        console.log("Left");
    }
    if (keypressed == '83') {
        Down2()
        console.log("Down");
    }
    if (keypressed == '68') {
        Right2()
        console.log("Right");
    }
}

function Left1() {
    if (Car1X > 0) {
        Car1X = Car1X - 10
        uploadBackground()
        uploadCar1()
        uploadCar2()
    }
}

function Right1() {
    if (Car1X < 700) {
        Car1X = Car1X + 10
        uploadBackground()
        uploadCar1()
        uploadCar2()
    }
}


function Up1() {
    if (Car1Y > 0) {
        Car1Y = Car1Y - 10
        uploadBackground()
        uploadCar1()
        uploadCar2()
    }
}

function Down1() {
    if (Car1Y < 500) {
        Car1Y = Car1Y + 10
        uploadBackground()
        uploadCar1()
        uploadCar2()
    }
}


function Left2() {
    if (Car2X > 0) {
        Car2X = Car2X - 10
        uploadBackground()
        uploadCar2()
        uploadCar1()
    }
}

function Right2() {
    if (Car2X < 700) {
        Car2X = Car2X + 10
        uploadBackground()
        uploadCar2()
        uploadCar1()
    }
}


function Up2() {
    if (Car2Y > 0) {
        Car2Y = Car2Y - 10
        uploadBackground()
        uploadCar2()
        uploadCar1()
    }
}

function Down2() {
    if (Car2Y < 500) {
        Car2Y = Car2Y + 10
        uploadBackground()
        uploadCar2()
        uploadCar1()
    }
}

if (Car1X > 700)
{
    console.log("White Car Wins");
    document.getElementById("game_status").innerHTML = "White Car Wins";
}

if (Car2X > 700)
{
    console.log("Yellow Car Wins");
    document.getElementById("game_status").innerHTML = "Yellow Car Wins";
}
