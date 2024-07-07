// 1. objects ✅
// 2. classes ✅
// 3. properies ✅
// 4. constructor ✅
// 5. this keyword ✅
// 6. methods✅
// 7. inheritance ✅
// 8. super function ✅
// 9. class variable

// const person1 = {
//     name: "aldj",
//     age: 12,
//     gender: "male",
// }
// const person2 = {
//     name: "aldj",
//     age: 12,
//     gender: "male",
//     getName: function () {
//     }
// }

// let temp; // declare
// temp = 34; // initialize

// class Person {
//   name: string;
//   age: number;
//   gender: string;
//   id: number;

//   constructor(name1: string, age1: number, gender1: string, id: number) {
//     this.name = name1;
//     this.age = age1;
//     this.gender = gender1;
//     this.id = id;
//   }
// }

// let person1 = new Person("Talha", 16, "Male", 11);
// let person2 = new Person("Fasih", 18, "Female", 12);

// console.log(person1);
// console.log(person2);

// soloution

class BakeryItem {
  //parent
  name: string;
  price: number;
  //   numOfItem: number;
  static numOfItem = 0;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;

    // this.numOfItem += 1;
    BakeryItem.numOfItem += 1;
  }

  printDetail() {
    console.log(this);
    console.log(`The name is ${this.name} and price is ${this.price}`);
  }

  printNumofItems() {
    return BakeryItem.numOfItem;
  }
}

class Pastry extends BakeryItem {
  //child
  flavor: string;

  constructor(flavor: string, name: string, price: number) {
    super(name, price);
    // this.name = name;
    this.flavor = flavor;
  }

  printDetail(): void {
    console.log(
      `the name is ${this.name}, price is ${this.price}, and flavor is ${this.flavor}`
    );
  }
}

const item1 = new BakeryItem("cake", 100);
const item2 = new BakeryItem("brownieCake", 500);

// console.log(item1.name);
// item1.printDetail();
// item2.printDetail();
// item1.printDetail2();

// const pastry1 = new Pastry("choclate", "vanilla", 100);
// const pastry2 = new Pastry("choclate", "vanilla", 100);

// console.log(pastry1);
// item1.printDetail();
// pastry1.printDetail();
// console.log(pastry1.printNumofItems());
