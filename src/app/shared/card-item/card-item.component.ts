import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})

export class CardItemComponent {
  @Input() index: number = 0;
  @Input() book: any = {};
  @Output() onRemoveBook = new EventEmitter<number>()
  @Output() onOpenBookForm = new EventEmitter<any>()
  @Output() onCloseButton = new EventEmitter<any>()

  openBookForm(book: any, index: any) {
    this.onOpenBookForm.emit({ book: book, index: index, isUpdate: true, isBookForm: true });
  }

  removeBook(index: number) {
    this.onRemoveBook.emit(index)
  }

  closeButton(book: any, index: any) {
    this.onCloseButton.emit({ isUpdate: false, isBookForm: true });
  }
}
