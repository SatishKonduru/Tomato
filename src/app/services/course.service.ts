import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourseDetails(){
  return  [
      {id: 1, name: 'Angular', fee: 25000},
      {id: 2, name: 'React', fee: 15000},
      {id: 3, name: 'Bootstrap', fee: 10000}
    ]
  }
}
