import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputNumber?: number;
  selectedFunction: (n: number) => boolean = this.isPrime
  result?: boolean;

  selections = [
    {
      name: 'isPrime',
      value: this.isPrime
    },
    {
      name: 'isFibonacci',
      value: this.isFibonacci
    }
  ]

  isPrime(n: number): boolean {
    for (let i = 2, square = Math.sqrt(n); i <= square; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  isPerfectSquare(n: number): boolean {
    let square = Math.round(Math.sqrt(n));
    return square * square == n;
  }

  isFibonacci(n: number): boolean {
    // Through binets formula
    return this.isPerfectSquare((5 * (n * n)) + 4) || this.isPerfectSquare((5 * (n * n)) - 4)
  }

  formatNumber() {
    // To allow blank input
    if (this.inputNumber) {
      if (this.inputNumber < 0) {
        this.inputNumber = 1;
      }
      this.inputNumber = Math.round(this.inputNumber);
    }
    this.recomputeFunction();
  }

  recomputeFunction() {
    if (this.inputNumber) {
      this.result = this.selectedFunction(this.inputNumber);
    } else {
      this.result = undefined;
    }
  }
}
