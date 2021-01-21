class bird {
    constructor(x, y, width, height) {
      var options = {
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
     
    }
    display(){

      var pos =this.body.position;
      //mouse movement
      pos.x = mouseX
      pos.y = mouseY

      //
      var angle = this.body.angle;
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  