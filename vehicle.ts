class Vehicle{
    Engine:String;
    Nooftires:number;
    Doors:number;
}
class Bike extends Vehicle{
    geers:number;
    isHybrid:boolean;
    
}
let ktm=new Bike();
ktm.Engine="390cc";
ktm.Nooftires=2;
ktm.Doors=0;
ktm.geers=6;
ktm.isHybrid=false;