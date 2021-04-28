
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

  

   
    @property(cc.Prefab)
    ball:cc.Prefab

    @property(cc.Animation)
    throwAnimation:cc.Animation

    @property
    angle:number=0;
    @property
    force:number=0;

    @property(cc.Slider)
    angleSlider:cc.Slider
    @property(cc.Slider)
    forceSlider:cc.Slider

    @property(cc.Label)
    angleText:cc.Label
    @property(cc.Label)
    forceText:cc.Label
   
    onLoad()
    {
        cc.director.getPhysicsManager().enabled=true;
    }

    start () 
    {    
          
        
    }
    
    setAngle()
    {
        console.log("angle");
        this.angle=this.angleSlider.progress*90;
        this.angleText.string= "Angle="+Math.floor( this.angle).toString()+"°";

    }


    setForce()
    { 
      console.log("forece");
      this.force=this.forceSlider.progress*100;
      this.forceText.string= "Force="+Math.floor( this.force).toString();
    }
    


    throwButton()
    {
        this.throwAnimation.play();
    }
    throwBall()
    {   console.log("spawn");  
        var ball;
        
           
           var scene=cc.director.getScene();
           ball=cc.instantiate(this.ball);
           ball.parent=scene;
           console.log("spawn");  

        
        var rb=ball.getComponent(cc.RigidBody);
        ball.position=cc.v3(139.336,207.358,0);

        var Ux= this.force*50*Math.cos(this.angle*(Math.PI/180)); 
        var Uy= this.force*50*Math.sin(this.angle*(Math.PI/180));
        
        var force=cc.v2(Ux,Uy);
        var p=cc.v2(ball.position.x,ball.position.y);

        rb.applyForce(force,p,true);
    }



}
