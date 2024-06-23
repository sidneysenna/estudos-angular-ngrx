import { Component, Input, numberAttribute } from '@angular/core';

function handlePlanType(valor: string) {
  return valor.toUpperCase();
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({ alias: 'planType', transform: (v: string) => handlePlanType(v) })
  planType: string = '';

  @Input({ required: true, transform: numberAttribute }) planPrice: number = 0;

  onButtonClicked(event: boolean) {
    console.log('onButtonClicked: ', event);
  }
}
