
class Developer{
     private  name:string;
     private  address:string;
     private  email:string;
     setName(name:string):void{
         this.name=name;
     }
        setAddress(address:string):void{
            this.address=address;
        }
        setEmail(email:string):void{
            this.email=email;
        }
        getName():string{
            return this.name;
        }
        getAddress():string{
            return this.address;
        }
        getEmail():string{
            return this.getEmail;
        }
}
    class employee extends Developer{
        skillss():void{
            console.log("siri");
        }
    }
    var dev=new Developer();
        dev.setName("siri");
        dev.setAddress("hgh");
        dev.setEmail("hgh");
        console.log(dev.getName()+" "+dev.getAddress()+" "+dev.getEmail());
    }