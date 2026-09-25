// let a =

// {
//     name: "atif",
//     age: 23
// }

// console.log(a.name);

// let b =
// {
//     run:() =>
//     {
//         alert('hello world');
//     }
// }

// console.log(b)

// class raik{

//     submit()
//     {
//         alert('hello world');
//     }

//     cancel()
//     {
//         alert('cancelled');
//     }

// }

// let harry = new raik();

// harry.submit();

// class khana
// {

//     constructor()
//     {
//         console.log("constructor called");
//     }

//  submit()
//  {
//     alert('kahna khao');
//  }

//  cancel()
//  {
//     alert('khana chor do');
//  }
// }

// let p = new khana();
// p.submit()

//inheritance
// class animal{

//     eat()
//     {
//         alert('eating');
//     }

//     piss()
//     {
//         alert('pissing');
//     }
// }

// class dog extends animal
// {
//     bark()
//     {
//         alert('barking');
//     }
// }

// let d=new dog();

// d.eat();
// d.piss();

// class afzal{

//     propety()
//     {
//         alert('this is a property');
//     }
// }

// class aaron extends afzal
// {
//     aaroni()
//     {
//         alert('this is aaron');
//     }

// }

// let a= new aaron();

// a.aaroni();
// a.propety();

//method overriding

// class employee {
//   login() {
//     conosle.log("login successful");
//   }

//   logout() {
//     console.log("logout successful");
//   }
//   requestLeave() {
//     console.log("leave requested");
//   }
// }

// class programmer extends employee {
//   requestcoffe() {
//     console.log("coffee requested");
//   }
// }

// let e = new employee();
// let p = new programmer();

// e.login();
// e.logout();
// e.requestLeave();


// class person

// {
//     constructor(eating)
//     {
//         this.eating=eating;
//     }
// }

// class perosn2 extends person
// {
//     constructor(eating,drinking)    {
//          super(eating)
//     this.drinking=drinking; 

//     }
   
// }



class animal{
    constructor(name)
    {
        this.name =name
    }   

    walk()
    {
        console.log(    `${this.name} is walking`);
    }
}

j =new animal('jack')
j.walk()


class atif{
    static rollno(){
        console.log('roll no is 123');
    }
}

atif.rollno()

