import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-binding',
  templateUrl: './s-binding.component.html',
  styleUrls: ['./s-binding.component.css']
})
export class SBindingComponent implements OnInit {

  public myColor = 'blue'
  public required : boolean = false
  public myStyleGroup = {
    color: 'red',
    fontStyle: 'italic',
    fontSize: '50px',
    fontWeight: 'bold'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
