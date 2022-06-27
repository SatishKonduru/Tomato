import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

 @Input()  public myName
  public check = false
  constructor() { }

  ngOnInit(): void {
  }

}
