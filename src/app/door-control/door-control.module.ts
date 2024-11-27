import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DoorControlComponent } from './door-control.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DoorControlComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [DoorControlComponent]
})
export class DoorControlModule { }


/* import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DoorControlModule { }
 */