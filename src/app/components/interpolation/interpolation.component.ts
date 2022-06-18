import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

public name: string = "Gopi"
public x = 10
public myLocation = window.location.href
  constructor() { }

  ngOnInit(): void {
  }

  getMyName(){
    // return "Hi My name is Satish Konduru"
    return `Hi, My name is ${this.name}`
  }

}
