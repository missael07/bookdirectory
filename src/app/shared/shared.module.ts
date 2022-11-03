import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderDetailsComponent } from './header-details/header-details.component'
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderDetailsComponent,],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [HeaderComponent, HeaderDetailsComponent]
})
export class SharedModule { }
