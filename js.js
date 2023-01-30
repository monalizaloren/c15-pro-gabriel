var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var score;

// Crie as variáveis 'gameOverImg' e 'restartImg', utilizando a mesma estrutura da linha 4
// Crie as variáveis 'jumpSound', 'checkPointSound' e 'dieSound'
//Crie a variável 'PLAY' que recebe o número 1
//Crie a variável 'END' que recebe o número 0
//Crie a variável 'gameState' que recebe 'PLAY'
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
  ////Carrega as imagens 'restart.png' e 'gameOver.png' para dentro das variáveis criadas na linha 8
  jumpSound = loadSound("jump.mp3")
  //Na linha 27, você está carregando o som para o pulo, faça o mesmo para a variável 'dieSound' e 'checkPointSound'
}

function setup() {
  //Crie um canva com 600 de largura e 200 de altura
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided", trex_collided);
  

  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  gameOver = createSprite(300,100);
  //Utilize o código 'addImage' para adicionar a imagem de gameOver dentro da variável
  gameOver.???(gameOverImg);
//Faça o mesmo com a variável 'restart'
//1. Crie um sprite de 300 e 140 
//2. Adicione a imagem 'restartImg'

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  //Defina o tamanho do sprite gameOver e restart para 0.5
//criar Grupos de Obstáculos e Nuvens
obstaclesGroup = createGroup();
cloudsGroup = ???();
  
  
  score = 0;
}

function draw() {
  background(180);
  text("Pontuação: "+ score, 500,50);
  score = score + Math.round(frameCount/60);
  
  //Programe 'Se o estado do jogo for 'PLAY'
  ???
  //...O sprite de gameOver e restart ficarão invisível
  //Além disso, mude a animação do trex para correndo

  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -13;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  

  spawnClouds();
  
  spawnObstacles();
  
  drawSprites();
}

   



function spawnClouds() {
 
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(10,60));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     
    cloud.lifetime = 200;
    
    
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}
