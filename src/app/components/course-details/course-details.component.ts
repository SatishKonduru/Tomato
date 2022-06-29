import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  public cDetails = [
    {id: 1, name: 'Angular', fee: 25000},
    {id: 2, name: 'React', fee: 15000},
    {id: 3, name: 'Bootstrap', fee: 10000}

  ]



  constructor() { }

  ngOnInit(): void {
  }

}
