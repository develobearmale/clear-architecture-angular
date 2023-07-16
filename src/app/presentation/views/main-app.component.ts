import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss'],

})
export class MainAppComponent implements OnInit{

  public aaaa = 'asdasd'
  constructor(){}

  ngOnInit(): void {
   
  }
  
  cabiame(){
    this.aaaa = 'bbbbb'
    console.log(this.aaaa)

  }



}
