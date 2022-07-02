import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']

})
export class CourseDetailsComponent implements OnInit {

  public cDetails = []

  constructor(private _cService : CourseService) { }

  ngOnInit(): void {
   this.cDetails =  this._cService.getCourseDetails()
  }

}
