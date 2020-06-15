import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Person1', 'This is a sample quote', new Date(2019,6,9)),
    new Quote(2, 'Person2', 'This is another sample quote', new Date(2020,1,12)),
    new Quote(3, 'Person3', 'This is a third sample quote', new Date(2019,0,18)),
    new Quote(4, 'Person4', 'This is a forth sample quote', new Date(2019,2,14))
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`Confirm delete: ${this.quotes[index].name}!`)

      if (toDelete){
        this.quotes.splice(index,1);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
