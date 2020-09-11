class Paper{
    constructor(x,y,radius) {
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2,
        }
        this.body = Bodies.circle(300,590,35,options);
        this.radius = 35;
        World.add(world, this.body);

    }
    
    
   
    display(){
        var pos = this.body.position;
        fill("red");
        circle(pos.x,pos.y,this.radius);
        push();
    }
        }
