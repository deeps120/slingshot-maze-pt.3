class Box{
    constructor(x,y,width,height){
       
        var options={
            restitution:2.0,
            friction:1.0,
            density:1.0
        }
        this.visiblity=255;
        this.body=Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    display(){
    if(this.body.speed>2){
        World.remove(world,this.body);
        this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
    }
            var pos=this.body.position;
        rect(pos.x,pos.y,this.width,this.height);

    
    }
    score(){
if(this.visiblity<255 && this.visiblity>-1000){s
score++;
}
    }
}