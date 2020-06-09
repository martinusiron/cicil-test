import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }
  model= {
    name: '',
    date: ''
  };

  showFormControl(form:any){
    return form && form.controls['name'] && form.controls['name'].value;
  }

  onSubmit(){
    this.router.navigate([`/result/${this.model.date}`]);
  }

}
