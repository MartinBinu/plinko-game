class Plinko{

   constructor(x,y){

      var option = {

         isStatic: true

      }

      this.body = Bodies.circle(x,y,20,option)
      this.radius = 20;

      World.add(world,this.body);

   }

   display(){

      push();
      fill("white");
      circle(this.body.position.x,this.body.position.y,20);
      pop();

   }

}