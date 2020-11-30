class ped{
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      //this.body.setScale(0.1,0.2);
      this.width = width;
      this.height = height;
      
      this.image = loadImage("cherry.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      //rectMode(CENTER);
      strokeWeight(4);
      imageMode(CENTER);
			image(this.image,0,this.height/2,this.width,this.height);
      pop();
    }
  };