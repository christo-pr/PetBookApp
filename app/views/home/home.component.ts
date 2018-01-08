import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'home',
  templateUrl: 'views/home/home.component.html',
  styleUrls: ['views/home/home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit() {

  }

  onContinueTap() {
    this.router.navigate(['list']);
  }

}
