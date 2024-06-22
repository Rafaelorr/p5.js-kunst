function setup() {
    createCanvas(800, 600);
    background(220);

    // licht blauwe achtergrond
    fill("lightblue");
    rect(0, 0, 800, 600);

    noStroke();
    fill('white');
    triangle(400, 500, 600, 200, 800, 500);
    fill("lightgray");
    triangle(500, 500, 700, 300, 850, 500)
    
}

function draw(){
    noStroke();
    fill(81, 144, 121);
    rect(0, 500, 800, 100);

    fill(255);
    circle(90, 100, 70);
    circle(120, 90, 90);
    circle(130, 110, 80);
    circle(160, 100, 80);

    fill('yellow');
    circle(600, 150, 150);

    fill(0);
    rect(175, 440, 50, 85);
    
    fill('green')
    triangle(200, 300, 50, 440, 350, 440);
    triangle(325, 340, 50, 340, 195, 220);
}