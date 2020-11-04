class Particle{

   constructor(x,y){

      this.body = Bodies.circle(x,y,10)
      this.radius = 10;
      this.color = color(random(0,255),random(0,255),random(0,255));
      World.add(world,this.body);

   }

   display(){

      push();
      translate(this.position.x,this.position.y);
      rotate(angle);
      fill(this.color);
      circle(this.body.position.x,this.body.position.y,10);
      pop();

   }

}