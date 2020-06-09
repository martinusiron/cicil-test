import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  date: any;
  constructor(private datePipe: DatePipe, private route: ActivatedRoute) {
    this.route.params.subscribe(params =>  this.transformDate(params))
   }

  transformDate(myDate){
    this.date = this.datePipe.transform(myDate.date, "EEEE, dd MMMM yyyy");
  }

}
