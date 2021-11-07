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
      { link: '/game', title: 'Game' },
      { link: '/pipe', title: 'Pipe' },
      { link: '/library', title: 'Library' },
      { link: '/user-forms', title: 'Forms' },
      { link: '/weather', title: 'Weather' }
    ]
  }

  ngOnInit(): void {
  }

}
