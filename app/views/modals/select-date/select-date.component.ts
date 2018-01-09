import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
  selector: 'select-date',
  templateUrl: 'views/modals/select-date/select-date.component.html'
})
export class SelectDateComponent implements OnInit {
  date: any;

  constructor(private params: ModalDialogParams) {
    this.date = params.context;
  }

  ngOnInit() { }

  onDoneTap(): any {
    this.params.closeCallback(this.date);
  }

}
