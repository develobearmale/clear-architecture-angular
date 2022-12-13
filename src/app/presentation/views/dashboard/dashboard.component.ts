import { Component, OnInit} from '@angular/core';
import { delay } from 'rxjs';
import { UserService } from 'src/app/data/services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit{

  constructor(private userService:UserService){}

  ngOnInit(): void {
   this.getDummyUsers();
  }

  public getDummyUsers():void{
    this.userService.getAll().subscribe({
      next:(users:any)=>{
        console.log("users",users);      
      }
    });
  }



}
