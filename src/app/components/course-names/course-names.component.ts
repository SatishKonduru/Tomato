import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-names',
  templateUrl: './course-names.component.html',
  styleUrls: ['./course-names.component.css']
})
export class CourseNamesComponent implements OnInit {

  public cNames = [
    {id: 1, name: 'Angular', fee: 25000},
    {id: 2, name: 'React', fee: 15000},
    {id: 3, name: 'Bootstrap', fee: 10000}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
