class Plinko{

   constructor(x,y){

      var option = {

         isStatic: true

      }

      this.body = Bodies.circle(x,y,10,option)
      this.radius = 10;

      World.add(world,this.body);

   }

   display(){

      push();
      fill("white");
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
      pop();

   }

}