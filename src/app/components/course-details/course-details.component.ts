import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']

})
export class CourseDetailsComponent implements OnInit {

  public cDetails = []
  public serverError = ''
  constructor(private _cService : CourseService, private _router: Router) { }

  ngOnInit(): void {
   //this.cDetails =  this._cService.getCourseDetails()
   this._cService.getCourseDetails().subscribe(res => this.cDetails=res,
    err => this.serverError=err)
  }

  onSelect(x){
    this._router.navigate(['/selectedCourse', x.id])
  }
}
