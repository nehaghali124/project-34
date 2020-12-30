class Pendulum {
    constructor(x, y) {
      var options = {
        restitution: 1,
        friction: 0,
        frictionAir: 0.0,
        slop: 1,
        inertia: Infinity
      };
      this.body = Bodies.rectangle(x, y, 40, 40, options);
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      stroke(255,255,255);
      strokeWeight(1);
      fill("black");
      ellipse(0, 0, 60, 60);
      pop();
    }
  }
  