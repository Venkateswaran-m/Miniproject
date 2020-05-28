import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  exports:[
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
    
  ]

})
export class MaterialModule { }
