import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { LoadingService } from './core/services/loading.service';

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
  constructor(private loadingService: LoadingService){

  }

  ngOnInit(): void {
    this.loadingService.loadingSub
    .subscribe((loading) => {
      this.loading = loading;
    });
  }

}
