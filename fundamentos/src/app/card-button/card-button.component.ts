import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss'],
})
export class CardButtonComponent {
  @Output('buttonClick') buttonClickEmmiter = new EventEmitter<boolean>();

  propTest: boolean = false;

  onButtonClick() {
    console.log('onButtonClick()');
    this.buttonClickEmmiter.emit(this.propTest);
  }
}
