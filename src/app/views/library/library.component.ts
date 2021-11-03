import { Component, OnInit } from '@angular/core';
import { BooksService } from './library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  isBookForm = false;
  isAdd = false;
  isUpdate = false;
  books: any = [];
  index = 0;
  book: any = {}

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.books = this.booksService.getBooks();
  }

  addBook() {
    this.isBookForm = true;
    this.isAdd = true;
  }

  onAddBook(data: any) {
    this.booksService.addBook(data.book);
    this.isAdd = false;
    this.isBookForm = false;
    this.book = {};
  }

  onopenBookForm(data: any) {
    this.isUpdate = data.isUpdate;
    this.isBookForm = data.isBookForm;
    this.index = data.index;
    this.book = data.book;
  }

  onUpdateBook(data: any) {
    this.booksService.updateBook({ book: data.book, index: data.index });
    this.isUpdate = data.isUpdate;
    this.isBookForm = data.isBookForm;
    this.book = {};
  }

  onRemoveBook(index: number) {
    this.booksService.removeBook(index);
  }
}
