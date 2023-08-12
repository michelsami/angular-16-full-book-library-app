import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {

  constructor() { }

  booksData = new BehaviorSubject<Book[]>(
    [
      {title : 'Freedom', author: 'Free Man', published: 1992},
      {title : 'Life', author: 'John Auther', published: 1987},
      {title : 'How to be Happy', author: 'Happy man', published: 1888},
      {title : 'Become rich in 30 days', author: 'Micheal Jordan', published: 2022},
    ]
  ); 



  getAllBooks(): Book[] {
    return this.booksData.value;
  }

 addNewBook(book: Book): void {
  this.booksData.value.push(book);
 }

 deleteBook(book: Book): void {
  const bookFound = this.booksData.value.filter(b => b.title !== book.title && b.author !== book.author && b.published !== book.published)
  
  this.booksData.next(bookFound)

  
}

findBook(book: Partial <Book>): Book[]  {
  const booksFound = this.booksData.value.filter(b => b.title == book.title && b.author == book.author)

  return booksFound
  
}
 
}
