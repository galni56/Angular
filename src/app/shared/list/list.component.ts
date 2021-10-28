import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  inputs: ['items: list'],
})

export class ListComponent implements OnInit {

  items: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
