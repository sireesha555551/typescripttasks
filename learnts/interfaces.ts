// interface a{
//     j?:any;
//     s():void;
//     r():void;
// }
// interface gd{
//     d():void;
//     g():void;
// }
// interface ht extends gd,a{


// }

// class keerthi implements ht{
//     s():void{
//         console.log("siri");
       
//     }
//     r():void{
//         console.log("renu");
//     }
// d():void{

// }
//     g():void{

//     }

// }
// var hghg=new keerthi();
// hghg.s();


//abstract classes
interface jkl{
    a():void;
    b():void;
}
abstract class iol implements jkl{
     a():void{
         console.log("siri");

     }
      abstract b():void;

}
    class n extends iol{
        b():void{

        }
    }

    var jkj=new n();
    jkj.a();