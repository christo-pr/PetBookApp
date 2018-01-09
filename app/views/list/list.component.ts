import { Component, OnInit } from '@angular/core';
import { Page } from "../../models/page";
import { PageService } from './../../services/page.service';
import { RouterExtensions } from "nativescript-angular/router";
import { NavigationOptions } from "nativescript-angular/router/ns-location-strategy";
import { ItemEventData } from "ui/list-view";

@Component({
  selector: 'list',
  templateUrl: 'views/list/list.component.html'
})
export class ListComponent implements OnInit {
  pages: Array<Page>

  constructor(
    private router: RouterExtensions,
    private pageService: PageService) { }

  ngOnInit() {
    this.pages = this.pageService.getPages();
  }

  onAddTap(): void {
    let options: NavigationOptions = {
        clearHistory: true
      };
    this.router.navigate( ["detail", this.pages.length], options);
  }

  onItemTap(args: ItemEventData): void {
    let id = args.index;
    this.router.navigate(["detail", id]);
  }

}
