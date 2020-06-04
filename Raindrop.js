  
class Raindrop{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        rectMode(CENTER);
        fill("white");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
reset(){
  if(this.body.position.y > 400){
    this.body.height = 0;
  }
}
}

