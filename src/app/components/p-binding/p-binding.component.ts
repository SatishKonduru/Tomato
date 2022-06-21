import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-binding',
  templateUrl: './p-binding.component.html',
  styleUrls: ['./p-binding.component.css']
})
export class PBindingComponent implements OnInit {

  public myName = 'Satish'
  constructor() { }

  ngOnInit(): void {
  }

}
