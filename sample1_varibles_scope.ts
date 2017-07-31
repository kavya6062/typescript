var count:number=0;


class Bird{
    name:string="Parrot";
    static staticCount:number=0;
   
    createPrivateVar():void{
        var localVar=20;
    }

    getStaticCount():number{
         return Bird.staticCount;
     }

     incrementStatic():void{
         Bird.staticCount++;
     }
 }

 var bird1 = new Bird();
 console.log(bird1.name);
 console.log(bird1.incrementStatic());
 console.log(bird1.getStaticCount());
 console.log(bird1.createPrivateVar());

 
 var bird2 = new Bird();
 console.log(bird2.name);
 console.log(bird2.incrementStatic());
 console.log(bird2.getStaticCount());

//Static variables will be shared by all the instances of the same class.



