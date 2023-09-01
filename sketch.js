var canvas;
var Caronsmall;
var canaleta2;
var canaleta3;
var canaleta4;
var canaleta5;
var canaleta6;
var canaleta7;
var canaleta8;
var canaleta9;

function preload(){//cargar imagenes

}
function setup(){//configuraciones
    canvas = createCanvas(1000, 1000);
    canaleta1 = createSprite(100,500,50,600);
    canaleta2 = createSprite(200,500,50,600);
    canaleta3 = createSprite(300,500,50,600);
    canaleta4 = createSprite(400,500,50,600);
    canaleta5 = createSprite(500,500,50,600);
    canaleta6 = createSprite(600,500,50,600);
    canaleta7 = createSprite(700,500,50,600);
    canaleta8 = createSprite(800,500,50,600);
    canaleta9 = createSprite(900,500,50,600);
    
    //var canaletas=new Group();
    //canaletas.add(canaleta1, canaleta1, canaleta3, canaleta4, canaleta5, canaleta6, canaleta7, canaleta8, canaleta9);

    //canaletas.groupsetTintEach("yellow");
    //canaleta1.shapeColor("black");

}

function draw(){
    background('Cyan');
    textSize(20);
    fill("Yellow");
    text(mouseX+","+mouseY,mouseX,mouseY)    
   

    drawSprites();
}