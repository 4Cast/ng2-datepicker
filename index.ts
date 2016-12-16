import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlimScrollModule } from 'ng2-slimscroll/ng2-slimscroll';
import { DatePickerComponent } from './src/components/ng2-datepicker.component';
import { DatePickerBComponent } from './src/components/bootstrap/ng2b-datepicker.component';


export * from './src/classes/';

@NgModule({
  declarations: [
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SlimScrollModule
  ],
  exports: [
    DatePickerComponent,
    SlimScrollModule
  ]
})
export class DatePickerModule { }
