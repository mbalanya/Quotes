import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id:1, name:'This is a sample quote'},
    {id:1, name:'This is another sample quote'},
    {id:1, name:'This is a third sample quote'},
    {id:1, name:'This is a forth sample quote'}
  ];
}
