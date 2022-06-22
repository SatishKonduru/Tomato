import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-binding',
  templateUrl: './e-binding.component.html',
  styleUrls: ['./e-binding.component.css']
})
export class EBindingComponent implements OnInit {

  constructor() { }
public msg = 'Click this Button'
  ngOnInit(): void {
  }
  onClick(){
    this.msg = 'You Clicked This Button'
    console.log("You Clicked This Button")
  }
}
