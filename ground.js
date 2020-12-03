class Ground{
    constructor(x,y,width,height){
        var option1 = {
            isStatic: true
        }

        this.body=Bodies.rectangle(x,y,width,height,option1);
        this.height=height;
        this.width=width;
        World.add(world,this.body);
    }
   display(){
       var post = this.body.position;
       rectMode(CENTER)
       stroke("blue");
       strokeWeight(3);
       fill("green");
       rect(post.x,post.y,this.width,this.height) 
   }
}
