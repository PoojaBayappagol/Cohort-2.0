//Default constructor

class AlooChat{
    constructor(){
        this.price=55;
        this.oil="5ml";
        this.oilBrand="Saffola";
        this.masale=['pudina','mirchi','chat'];
    }

    pack(){
        console.log("Aloo Chat is packed");
    }
    unpack(){
        console.log("Aloo Chat is unpacked");
    }
}

let ac1=new AlooChat()

// customized constructor
class  Kithab {
    constructor(name,price,author,color){
        this.name=name;
        this.price=price;
        this.author=author;
        this.color=color;
    }

    bookmarkLagao(){}
    pannaPadlo(){}
}

let b1=new Kithab("moral",132,"Harsh","white")
let b2=new Kithab("Computer Science",565,"VijayaKumar","dark pink")
let b3=new Kithab("DBMS",344,"Harsh","grey")


//Prototypes

class Human{
    constructor(){
        this.name='abcd';
        this.age=34;
    }
}

Human.prototype.saansLo=function(){
    console.log("hey");
}

Human.prototype.khaankhao=function(){
    console.log("heyyyy");
}

let h1=new Human();
let h2=new Human();
