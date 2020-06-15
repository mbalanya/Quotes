import { Component, OnInit } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'Person1', description: 'This is a sample quote'},
    {id:1, name:'Person2', description: 'This is another sample quote'},
    {id:1, name:'Person3', description: 'This is a third sample quote'},
    {id:1, name:'Person4', description: 'This is a forth sample quote'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
