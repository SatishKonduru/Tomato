import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-binding',
  templateUrl: './c-binding.component.html',
  styleUrls: ['./c-binding.component.css']
})
export class CBindingComponent implements OnInit {

  public myText1 = "textColor"
  public myText2 = "textSize"
  public myText3 = "textStyle"
  public isRequired = true
  public myStyleGroup = {
    "textColor": this.isRequired,
    "textSize" : this.isRequired,
    "textStyle" : !this.isRequired
  }


  constructor() { }

  ngOnInit(): void {
  }

}
