import { Component, OnInit } from '@angular/core';
import { Page } from "../../models/page";

@Component({
  selector: 'list',
  templateUrl: 'views/list/list.component.html'
})
export class ListComponent implements OnInit {
  pages: Array<Page>

  constructor() { }

  ngOnInit() {

  }

}
