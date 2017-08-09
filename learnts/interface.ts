// interface a{
//     m1():void;
//     m2():void;
//     m3():void;
// }
// class gg implements a{
//     m1():void{
//         console.log("siri");
        
//     }
//     m2():void{
//         console.log("renu");
//     }
//     m3():void{
//         console.log("ss")

//     }
//     }

// var e=new c();
// e.m1();
// e.m2();
// e.m3();

//multiple interfaces can access
// interface a{
//     s():void;
// }
// interface b{
//     r():void;
// }    
// class t implements a,b{
//     s():void{
//         console.log("ghfsdhg");

//     }
//     r():void{

//     }
// }
// var ss=new t();
// ss.s();

//same methods


// interface sss{
//     a():void;
// }
// interface www{
//     a():void;
// }
// class siri implements sss,www{
//     a():void{
//         console.log("ghdshg");
//     }
// }
// var jhhj=new siri();
// jhhj.a();

//abstract classes
  interface a{
    //   z():void;
  }
    interface b{
        y():void;
    }
     abstract class k implements a,b{
          z():void{
              console.log("siri");
          }
              y():void{

            }
      }
 