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



// class animal{
//     constructor(name)
//     {
//         this.name =name
//     }   

//     walk()
//     {
//         console.log(    `${this.name} is walking`);
//     }
// }

// j =new animal('jack')
// j.walk()


// class atif{
//     static rollno(){
//         console.log('roll no is 123');
//     }
// }

// atif.rollno()

// class animal{
//     constructor(name)
//     {
//         this.name=name
//     }

//     fly()
//     {
//         alert("he is flying")
//     }

//     get name   (){
//         return this._name   
//     }
// }

// let a = new animal ()
// a.fly()


// class phone
// {
//     get battery()
//     {
//         return 80
//     }

//     set battery(value){
//         console.log(value)
//     }
// }

// let p = new phone()

// console.log(p.battery)

// p.battery=90;






// class food{
//     get foodie()
//     {
//         return 'pizza'
//     }

//     set foodiee(khana)
//     {
//         console.log(khana)
//     }
// }

// let f=new food()

// console.log(f.foodie)

// f.foodiee='pozzi';


// console.log(f instanceof food)

// function hello()
// {
//     console.log("this is hello")
// }
// (function ()
// {
//     console.log("hello atif")
// })();



//   function kahankhao(){
//     console.log("khana khalo")
// }

// ((function (khajo){
//     console.log("   + khanaaa")
// }))(khalijiye)

(function(){
    console.log('this is to eat foodd')
})()