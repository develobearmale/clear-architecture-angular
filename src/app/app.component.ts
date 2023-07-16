import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { delay } from 'rxjs';
import { LoadingService } from './core/services/loading.service';
import { ProfileComponent } from '../app/presentation/views/profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title:string = 'clear-architecture-angular';
  public loading: boolean = false;
  color = 'primary' as any;
  public mode = 'indeterminate'  as any;
  value = 50;
  displayProgressSpinner = false;
  spinnerWithoutBackdrop = false;
  // Display progress spinner for 3 secs on click of button
  showProgressSpinner = () => {
    this.displayProgressSpinner = true;
    setTimeout(() => {
      this.displayProgressSpinner = false;
    }, 3000);
  };


  timeLeft: number = 60;
  
  constructor(
    private loadingService: LoadingService,
    public dialog: MatDialog){

  }

  ngOnInit(): void {
    this.loadingService.loadingSub
    .subscribe((loading) => {
      this.loading = loading;
    });

    this.startTimer()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProfileComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
   });
  }

  startTimer() {
    const timer = setInterval(() => {
      console.log('On Timer');
      //this.openDialog()
    }, 1000);
  }

}
