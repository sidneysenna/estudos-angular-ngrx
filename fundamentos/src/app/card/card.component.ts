import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  private _planType: string = '';

  @Input('planTypeAlias')
  set planType(tipo: string) {
    this._planType = tipo;
  }

  @Input({ required: true }) planPrice: number = 0;

  onButtonClicked(event: boolean) {
    console.log('onButtonClicked: ', event);
  }

  get planType() {
    return this._planType.toUpperCase();
  }
}
