class Cannon {
    constructor(x, y, witdh, height, angle){
        this.x = x;
        this.y = y;
        this.witdh = witdh;
        this.height = height;
        this.angle = angle;
        this.cannonImage = loadImage("assets/canhao.png");
        this.wheel1 = loadImage("assets/roda1.png");
        this.wheel2 = loadImage("assets/roda2.png");
    }
    display() {
       

        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.cannonImage, this.x, this.y, this.witdh, this.height);
        pop();
        noFill();
        image(this.wheel1 ,70, 70, 200, 200);
        image(this.wheel2 ,70, 70, 200, 200);
    }
}