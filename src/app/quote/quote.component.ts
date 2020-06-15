import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Person1', 'This is a sample quote'},
    new Quote(2, 'Person2', 'This is another sample quote'},
    new Quote(3, 'Person3', 'This is a third sample quote'},
    new Quote(4, 'Person4', 'This is a forth sample quote'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
