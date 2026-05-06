let fd = [
  {
    name: "rajvardhan",
    dob: "18-11-1917",
    phone: "784596458",
    city: "bhopal",
    profession: "teacher",
  },

  {
    name: "yoyohoneu",
    dob: "18-11-1917",
    phone: "784596458",
    city: "bhopal",
    profession: "teacher",
  },

  {
    name: "mukesh",
    dob: "18-11-1917",
    phone: "784596458",
    city: "bhopal",
    profession: "teacher",
  },

  {
    name: "subhash",
    dob: "18-11-1917",
    phone: "784596458",
    city: "bhopal",
    profession: "teacher",
  },
];

// print city
fd.forEach((element) => {
  console.log(element.city);
});

// print phone
fd.forEach((item) => {
  console.log(item.phone);
});

//print name
fd.forEach((item) => {
  console.log(item, name);
});

console.log(fd[1]["name"]);

fd[2].name;

let vishal = {
  name: "mukesh",
  dob: "18-11-1917",
  phone: "784596458",
  city: "bhopal",
  profession: "teacher",
};
console.log(Object.values(vishal));

console.log(Object.keys(vishal));

console.log(Object.entries(vishal));

let ar = [24, 56, 64, 48, 54, 41, 69, 43];

//bubble sort
ar.sort((a, b) => a - b);

console.log(ar);

console.log(ar.findIndex((val) => val==41));

// console.log(ar.findlastindex((val) => val===41));



let arr = [24, 56, 64, 48, 54, 41, 69, 43];

//filter does multi search (first  occurence of an array e=lement )
console.log(arr.filter((val) => val>41));

