var ground, groundImg;
var mouse, mouse_run;
var cat, cat_running;

function preload() {
    //load the images here

    groundImg = loadImage("garden.png");

    mouseImg = loadAnimation("mouse1.png");

    mouse4 = loadAnimation("mouse4.png");

    mouse_run = loadAnimation("mouse2.png", "mouse3.png");

    catImg1 = loadAnimation("cat1.png");

    catImg4 = loadAnimation("cat4.png");

    cat_running = loadAnimation("cat2.png", "cat3.png");

}

function setup(){
    createCanvas(680,400);
    
    ground = createSprite(340, 200);
    ground.addImage("groundImg", groundImg);
    ground.scale = 0.7;

    cat = createSprite(500, 340, 20, 100);
    cat.addAnimation("cat1", cat1);
    cat.scale = 0.1;

    mouse = createSprite(200, 340, 10, 40);
    mouse.addAnimation("mouseImg", mouseImg);
    mouse.scale = 0.1;

}

function draw() {

    console.log(cat.x - mouse.x);

    background(rgb(30, 100, 220));

if (cat.x - mouse.x < cat.width / 2 - mouse.width / 2) {
       cat.velocityX = 0;
       cat.addAnimation("cat4", cat4);
       cat.changeAnimation("cat4");
       cat.x = 300;

       mouse.addAnimation("mouse4", mouse4);
       mouse.changeAnimation("mouse4");
       cat.bounce(mouse);
    }

    drawSprites();
}

function keyPressed() {
    
    if (keyCode === LEFT_ARROW) {

        cat.velocityX = -5;
        cat.addAnimation("cat_running", cat_running);
        cat.changeAnimation("cat_running");

        mouse.addAnimation("mouse_run", mouse_run);
        mouse.changeAnimation("mouse_run");
    }
    
}
