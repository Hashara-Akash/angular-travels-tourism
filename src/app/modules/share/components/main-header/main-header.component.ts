import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    const menuItems = document.querySelector('.menu-items');
    // @ts-ignore
    menuItems.classList.toggle('show');
  }


  isMenuOpen: any;

}
