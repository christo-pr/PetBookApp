import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
  selector: 'select-gender',
  templateUrl: 'views/modals/select-gender/select-gender.component.html'
})
export class SelectGenderComponent implements OnInit {
  gender: number;
  genders: Array<string> = ["Female", "Male", "Other"];

  constructor(private params: ModalDialogParams) {
    this.gender = params.context;
  }

  ngOnInit() {

  }
  onDoneTap(): any {
    this.params.closeCallback(this.genders[this.gender]);
  }

}
