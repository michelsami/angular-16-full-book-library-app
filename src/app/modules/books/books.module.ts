import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { BooksRoutingModule } from './books-routing.module';
import { BookTemplateComponent } from './components/book-template/book-template.component';
import { BooksComponent } from './components/books/books.component';


@NgModule({
  declarations: [
    BookTemplateComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule

  ]
})
export class BooksModule { }
