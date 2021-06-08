class Slingshot{

    constructor(a,b){

        var option={
        bodyA:a,
        pointB:b,
        length:10,
        stiffness:0.03
}
    
    this.sling=Constraint.create(option)
    World.add(world,this.sling) 

     this.pointB=b
}

 display(){


strokeWeight(3)
Line (this.Constraintsling.bodyA.position.x, this.sling.bodyA.position.y,
   this.sling.pointB.x,this.sling.pointB.y)




}