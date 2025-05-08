// Problem -> 1

function formatString(input: string, toUpper?: boolean) {
  if (toUpper || toUpper === undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

const result = formatString("bangladesh");

// Problem -> 2

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  let book: { title: string; rating: number }[] = [];

  items.map((item): void => {
    if (item.rating >= 4) {
      book.push(item);
    }
  });

  return book;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Book D", rating: 4.6 },
];

filterByRating(books);

// Problem -> 3

// function concatenateArray<T>(...array: T[][]): T[] {
//   let data = [];
//   const looping = array.map((arr) => arr.map((arr2) => data.push(data)));
//   console.log(data);
// }

// concatenateArray([1, 2], [3, 4], [5]);

// later 3

// Problem -> 4

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    console.log(`Make: ${this.make} , Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    console.log(`Model: ${this.model}`);
  }
}

const myCar = new Car("Toyota", 2020, "corolla");

myCar.getInfo();
myCar.getModel();

// Problem -> 5

function processValue(value: string | number): number {
  if (typeof value === "string") {
    const toArray: string[] = value.split("");
    return toArray.length;
  }

  if (typeof value === "number") {
    return value * 2;
  } else {
    return 0
  }

}

processValue("hello");
processValue(10);

// Problem -> 6






