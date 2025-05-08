// ->
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || toUpper === undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

formatString("bangladesh");

// ->
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Book D", rating: 4.6 },
];

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

filterByRating(books);

// ->
function concatenateArray<T>(...array: T[][]): T[] {
  return array.flat();
}

concatenateArray([1, 2], [3, 4], [5]);

// ->
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make} , Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "corolla");

myCar.getInfo();
myCar.getModel();

// ->
function processValue(value: string | number): number {
  if (typeof value === "string") {
    const toArray: string[] = value.split("");
    return toArray.length;
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    return 0;
  }
}

processValue("hello");
processValue(10);

// ->
interface Product {
  name: string;
  price: number;
}

const products: Array<Product> = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
  { name: "Book", price: 100 },
];

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length) {
    const highestProduct: Product = products.reduce(
      (maxItem: Product, minItem: Product): Product =>
        maxItem.price > minItem.price ? maxItem : minItem
    );
    return highestProduct;
  } else {
    return null;
  }
}

getMostExpensiveProduct(products);

// -> 

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";

    default:
      return "Weekday";
  }
}

getDayType(Day.Friday)

// ->
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject): void => {
    setTimeout(():void => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}

squareAsync(4).then(console.log);
