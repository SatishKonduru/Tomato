import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {

 public name="Satish K Bhupathi"
 public msg = "good morning dear students"
 public person = {
  firstName: "Satish",
  lastName: "Konduru"
 }

 public myDate = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
