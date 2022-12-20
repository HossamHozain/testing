import { Component,Input,Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(){}
  post={
    name:'hossam',
    isFavorite:false
  }
  onFavoriteChange($event:boolean){
    this.post.isFavorite=$event;
    console.log('is favorite has been changed to ..'+this.post.isFavorite)
  }
}
