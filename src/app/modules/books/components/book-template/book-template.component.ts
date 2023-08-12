import { Component , Input} from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { BooksDataService } from 'src/app/services/books-data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-book-template',
  templateUrl: './book-template.component.html',
  styleUrls: ['./book-template.component.scss']
})
export class BookTemplateComponent {

  isEditEnable = false; 
  
  @Input() books!: Book[] ;
  adminLoggedIn = this._userService.adminLoggedIn();

  constructor(private _userService: UserService, private _bookService: BooksDataService){
    
  }

  deleteBook(book:Book): void{
    this._bookService.deleteBook(book);
  }

  amendBook(book:Book): void{
    this.isEditEnable = true;
  }

  save(){
    this.isEditEnable = false;

  }
}

