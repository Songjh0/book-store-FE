export interface Book {
  id: number;
  title: string;
  img: number;
  category: number;
  form: string;
  isbn: string;
  summary: string;
  detail: string;
  author: string;
  pages: number;
  contents: string;
  price: number;
  linkes: number;
  pubDate: string;
}

export interface BookDetail extends Book {
  categoryName: string;
  liked: boolean;
}