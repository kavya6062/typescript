class  Person {
    name:string;
    private age:number;
    constructor(name:string,age:number=0){
       this.name=name;
       this.age=age;
    }

    walking():void{
        console.log(this.name+"  is walking");
    }

     getAge():number{
        return this.age;
    }
}

var p1 = new Person("Raj");
p1.walking();
console.log(p1.name,p1.getAge());