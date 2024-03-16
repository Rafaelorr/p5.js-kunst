function setup() {
    // maak een canvas van 400 op 400 pixels
    createCanvas(400, 400);
    background(220);

    // dikte van lijnen van vormen
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
    
    // kleur lijnen
    stroke(0);

    // dikte van lijn
    strokeWeight(4);

    // lijnen
    // x punt 1, y punt 1, x punt 2, y punt 2
    line(0, 75, 98, 75)
    line(50, 75, 50, 300)
    line(100, 355, 350, 355)
    line(200, 355, 200, 400)
    line(350, 400, 350, 300)
}
  
function draw() {
    
}