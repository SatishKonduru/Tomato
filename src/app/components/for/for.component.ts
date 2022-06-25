import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  public names = ['RSK', 'RENU', 'Chikkie', 'Micky']
  public emp =[
   {
    id: 1,
    name: "Satish",
    age: 42
  },
  {
    id: 2,
    name: "Renu",
    age: 37
  },
  {
    id: 3,
    name: "Nagesh",
    age: 72
  }
]

  constructor() { }


  ngOnInit(): void {
  }

}
