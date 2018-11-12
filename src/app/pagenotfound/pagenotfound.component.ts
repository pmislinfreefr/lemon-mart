import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  template: `
    <p>
    This page doesn't exist. Go back to <a routerLink="/home">home</a>.
    </p>
  `,
  styles: [],
})
export class PagenotfoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
