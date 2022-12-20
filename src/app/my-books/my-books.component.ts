import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

@Input('isFavorite') isSelected:boolean
@Output('change') clicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isSelected=!this.isSelected
    this.clicked.emit(this.isSelected)
  }

}
