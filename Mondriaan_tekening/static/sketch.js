function setup() {
    createCanvas(400, 400);
    background(220);
    strokeWeight(4);

    // witte achtergrond
    fill(255);
    rect(-20, -20, 500, 500);

    // rode vierkant rechts boven

    // kleur van vorm
    fill(230, 20, 20);
    rect(100, 0, 300, 300);

    // blauwe vierkant links onder
    fill(40, 20, 200);
    rect(0, 300, 100, 100);

    // gele vierkant rechts onder
    fill(255, 255, 0);
    rect(350, 355, 100, 50);

    stroke(0);

    // dikte van lijn
    strokeWeight(4);

    // x punt 1, y punt 1, x punt 2, y punt 2
    line(0, 75, 98, 75)

    line(50, 75, 50, 300)
}
  
function draw() {
    
}