import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fundamentos';

  inputText = 'inputinho';
  inputDisabled = true;

  toogleInput() {
    this.inputDisabled = !this.inputDisabled;
  }

  logInputText() {
    console.log(
      'O valor nao eh alterado pq esta em uma unica direcao...',
      this.inputText
    );
  }

  handleKeyup(event: KeyboardEvent) {
    console.log((event.target as HTMLInputElement).value);
  }
}
