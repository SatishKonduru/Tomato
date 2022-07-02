import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-names',
  templateUrl: './course-names.component.html',
  styleUrls: ['./course-names.component.css']
})
export class CourseNamesComponent implements OnInit {

  public cNames = []
  constructor(private _cService: CourseService ) { }

  ngOnInit(): void {
  this.cNames =   this._cService.getCourseDetails()
  }

}
