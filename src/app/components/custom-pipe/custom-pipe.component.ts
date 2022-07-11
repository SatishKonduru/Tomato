import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  public courseName = ['Angular', 'React']
  constructor() { }

  ngOnInit(): void {
  }
  addCourse(name){
    this.courseName.push(name)
   console.log("Course Names: ", this.courseName)
  }

}
