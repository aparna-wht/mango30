class Mangoes {
    constructor(x, y,){
      var options = {
        'restitution':0,
        'friction':1.0,
        'isStatic':true
    }
      this.image = loadImage("mangoed.png");
      this.x = x;
      this.y = y;
      this.r = 30;
      //this.width = 50;
      //this.height = 50;
      this.body = Bodies.circle(this.x,this.y,15,options);
    World.add(world,this.body)
     // this.Visibility = 255;

    }
  display()
  {
   var pos =this.body.position;
   
    push();
    translate(pos.x, pos.y);
    //rectMode(CENTER);
    strokeWeight(4);
    imageMode(CENTER);
    image(this.image,0,0,this.r*2,this.r*2);
    pop();
  }
}