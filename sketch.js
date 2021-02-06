const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
var Divisions = [];
var Plinkos = [];
var Particles = [];
var horizontalDivision;

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(480,800);

  division1 = new Division(240,785,470,10);

  ground1 = new Ground(240,795,480,10);
  ground2 = new Ground(5,390,10,800);
  ground3 = new Ground(475,390,10,800);

  for(var k = 13;k <= width;k = k + 75.5 ){
    Divisions.push(new Division(k,580,10,400))
  }

  for(var j = 20;j <= width;j = j + 40 ){
    Plinkos.push(new Plinko(j,40))
  }

  for(var a = 40;a <= width;a = a + 40 ){
    Plinkos.push(new Plinko(a,80))
  }

  for(var b = 20;b <= width;b = b + 40 ){
    Plinkos.push(new Plinko(b,120))
  }

  for(var c = 40;c <= width;c = c + 40 ){
    Plinkos.push(new Plinko(c,160))
  }

  for(var d = 20;d <= width;d = d + 40 ){
    Plinkos.push(new Plinko(d,200))
  }

  for(var e = 40;e <= width;e = e + 40 ){
    Plinkos.push(new Plinko(e,240))
  }

  for(var f = 20;f <= width;f = f + 40 ){
    Plinkos.push(new Plinko(f,280))
  }

  for(var g = 40;g <= width;g = g + 40 ){
    Plinkos.push(new Plinko(g,320))
  }

  var render = Render.create({ 
     element: document.body,
      engine: engine,
      options: { width: 1200, height: 900, wireframes: false } });
      Render.run(render);

}

function draw() {

  background("black");

  Engine.update(engine);


  for(var k = 0;k < Divisions.length;k = k + 1 ){
  Divisions[k].display();
  }

  for(var j = 0;j < Plinkos.length;j = j + 1 ){
  Plinkos[j].display();
  }

  //for(var a = 0;a < Plinkos.length;a = a + 1 ){
  //Plinkos[a].display();
  //}

  //for(var b = 0;b < Plinkos.length;b = b + 1 ){
  //Plinkos[b].display();
  //}
    
  //for(var c = 0;c < Plinkos.length;c = c + 1 ){
  //Plinkos[c].display();
  //}

  //for(var d = 0;d < Plinkos.length;d = d + 1 ){
  //Plinkos[d].display();
  //}
  
  //for(var e = 0;e < Plinkos.length;e = e + 1 ){
  //Plinkos[e].display();
  //}
  
  //for(var f = 0;f < Plinkos.length;f = f + 1 ){
  //Plinkos[f].display();
  //}
      
  //for(var g = 0;g < Plinkos.length;g = g + 1 ){
  //Plinkos[g].display();
  //}

  division1.display();

  ground1.display();
  ground2.display();
  ground3.display();

  if(frameCount%10 === 0){
    Particles.push(new Particle(random(width/2 - 10,width/2 + 10),10,10))
  }

  for(var m = 0;m < Particles.length;m ++){
    Particles[m].display();
  }

  //console.log(Particles);

}