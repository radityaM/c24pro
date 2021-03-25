class Sand {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':3,
          'density':0.6
      }
      this.radius=radius;
      this.x=x;
      this.y=y;
      this.body = Bodies.circle(this.x, this.y, (this.radius-20)/2, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      //ellipseMode(RADIUS);
      fill("brown");
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  };