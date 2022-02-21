import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-calculator',
  templateUrl: './string-calculator.component.html',
  styleUrls: ['./string-calculator.component.css']
})
export class StringCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Add(input: string): number{
    return 0;
  }
}
