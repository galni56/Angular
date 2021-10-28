import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu-item',
  inputs: ['link', 'title'],
  template: '<li><a mat-raised-button  color="primary" routerLink="{{link}}">{{title}}</a></li>',
  styleUrls: ['./nav-menu-item.component.css']
})
export class NavMenuItemComponent implements OnInit {
  link = '';
  title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
