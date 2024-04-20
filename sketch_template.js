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
    
    // kleur lijnen
    stroke(0);

    // dikte van lijn
    strokeWeight(4);

    // x punt 1, y punt 1, x punt 2, y punt 2
    line(0, 75, 98, 75)
}
  
function draw() {
    
}