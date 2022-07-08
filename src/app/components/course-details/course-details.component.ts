import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']

})
export class CourseDetailsComponent implements OnInit {

  public cDetails = []
  public serverError = ''
  public selectedId
  constructor(private _cService : CourseService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   //this.cDetails =  this._cService.getCourseDetails()
   this._cService.getCourseDetails().subscribe(res => this.cDetails=res,
    err => this.serverError=err)

    this._activatedRoute.paramMap.subscribe((p: ParamMap) => {
      this.selectedId = parseInt(p.get('id'))
    })
  }

  onSelect(x){
    // this._router.navigate(['/selectedCourse', x.id])  ==>  //Absolute Navigation

    //the following is Relative Navigation
    this._router.navigate([x.id],{relativeTo: this._activatedRoute })
  }
  isSelected(x){
  return  x.id === this.selectedId
  }
}
