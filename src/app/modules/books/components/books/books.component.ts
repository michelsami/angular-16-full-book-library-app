import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from 'src/app/interfaces/book';
import { BooksDataService } from 'src/app/services/books-data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  bookTitle:string = '';
  bookTitleSearch:string = '';
  bookAuthor:string = '';
  bookAuthorSearch:string = '';

  bookPublished!:number;
  booksData: Book[] = [];

  constructor(private _bookService: BooksDataService){

    this._bookService.booksData.subscribe(
      {next: (data: Book[]) => this.booksData = data}
    )
  }

  addBook(): void {
    this._bookService.addNewBook({title: this.bookTitle, author: this.bookAuthor, published: this.bookPublished});
  }
  
  search(): void {

    const booksFound = this._bookService.findBook({title: this.bookTitleSearch, author: this.bookAuthorSearch});
    this.booksData = booksFound;
  }

  getAllBooks(): void {
    this._bookService.booksData.subscribe(
      {next: (data: Book[]) => this.booksData = data}
    )
  }
}
