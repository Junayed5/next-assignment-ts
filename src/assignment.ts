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
