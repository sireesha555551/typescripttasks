//type gaurds
  function m(a:number|string):void{
      console.log(a);
     
 }
console.log(m(10));

//type aliases

type s=string|number|boolean;
function aliases(name:s){
    console.log(name);
}
console.log(aliases('s'));
