import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cardPlanType: string = 'jjj';
  cardPlanPrice: number = 10;

  handlePlanType(texto: string) {
    console.log(texto);
    this.cardPlanType = texto;
  }
}
