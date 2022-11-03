import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-header-details',
  templateUrl: './header-details.component.html',
  styleUrls: ['./header-details.component.css']
})
export class HeaderDetailsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  back(){
    this.location.back()
  }

}
