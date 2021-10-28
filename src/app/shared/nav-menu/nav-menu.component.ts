import { Component, OnInit } from '@angular/core';

interface IMenuItem {
  link: string,
  title: string
}

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  menuItems: Array<IMenuItem>;

  constructor() {
    this.menuItems = [
      { link: '/pipe', title: 'PIPE' },
      { link: '/game', title: 'Game' }
    ]
  }

  ngOnInit(): void {
  }

}
