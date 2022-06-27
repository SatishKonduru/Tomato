import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
public name = 'SATISH'
@Input()  public  fromParent;

@Output() public childMsg = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
this.childMsg.emit("Hello this is from CHILD Component")
  }

}
