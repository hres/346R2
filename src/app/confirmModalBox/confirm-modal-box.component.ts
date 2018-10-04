import { Component, Input, EventEmitter, Output } from "@angular/core";
// import {MdIconRegistry} from '@angular/material';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "confirm-modal-box",
  templateUrl: "./confirm-modal-box.component.html",
  styleUrls: ["./confirm-modal-box.component.css"]
})
export class ConfirmModalBoxComponent {
  @Input()
  conformBoxModalMessage: string;

  @Output()
  displayModal = new EventEmitter<boolean>();

  constructor() {}

  fireEvent(flag: boolean) {
    this.displayModal.emit(flag);
  }
}
