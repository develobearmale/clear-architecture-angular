import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerComponent } from './progress-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MaterialModule } from 'src/app/core/material/material.module';
@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MaterialModule
  ],
  declarations: [ProgressSpinnerComponent],
  exports: [ProgressSpinnerComponent]
})
export class ProgressSpinnerModule { }