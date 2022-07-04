import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { courseInterface } from '../course';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
private _dataURL = '../../assets/sharedData/course123.json'
  constructor(private _http: HttpClient) { }

  getCourseDetails(): Observable<courseInterface[]>{
  return  this._http.get<courseInterface[]>(this._dataURL)
  .pipe(catchError(this.incomingError))
  }

  incomingError(err: HttpErrorResponse){
    return throwError(err.message || "Unknown Server Error")
  }


}
