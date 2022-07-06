import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  templateUrl: './selected-course.component.html',
  styleUrls: ['./selected-course.component.css']
})
export class SelectedCourseComponent implements OnInit {
public courseId ;
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  // this.courseId = parseInt(this._activatedRoute.snapshot.paramMap.get('id'))
  this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
    this.courseId= parseInt(params.get('id'))
  })

  }

  gotoPrevious(){
    let previousID = this.courseId - 1
    this._router.navigate(['/selectedCourse', previousID])
  }

  gotoNext(){
    let nextId = this.courseId + 1
    this._router.navigate(['/selectedCourse', nextId])
  }
}
