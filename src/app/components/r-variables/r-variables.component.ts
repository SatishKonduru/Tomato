import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r-variables',
  templateUrl: './r-variables.component.html',
  styleUrls: ['./r-variables.component.css']
})
export class RVariablesComponent implements OnInit {

  public myMessage = ''
  constructor() { }

  ngOnInit(): void {
  }
  showMessage(msg){
    this.myMessage = msg
  }
}
