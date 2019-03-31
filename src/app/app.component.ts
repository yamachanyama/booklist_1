import { Component } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  booksList: Book[] = BOOKS;
  selectedBook: Book;

  getBookDetails(isbn: number) {
    this.selectedBook = this.booksList.find(book => book.isbn === isbn);
  }
}
