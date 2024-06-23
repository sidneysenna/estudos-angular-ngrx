import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input({ alias: 'planType', transform: (v: string) => v.toUpperCase() })
  planType: string = '';

  @Input({ required: true }) planPrice: number = 0;

  onButtonClicked(event: boolean) {
    console.log('onButtonClicked: ', event);
  }
}
