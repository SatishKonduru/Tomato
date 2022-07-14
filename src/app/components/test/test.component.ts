import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {

    //1. PROMISE
  //   let p = new Promise( r => {
  //     console.log("Promise Starts......")
  //     console.log("Promise Starts......")
  //     console.log("Promise Starts......")
  //     r("This is PROMISE")
  //   })
  //   p.then(v => console.log(v))

    //1. OBSERVABLE
    // let ob = new Observable(o => {
    //   console.log("Observable Starts...")
    //   o.next("This is Observable")
    // })

    // ob.subscribe(v => console.log(v))

    // let p = new Promise(r => {
    //   r("Angular")
    //   r("React")
    //   r("Vue")
    //   r("Node")
    // })
    // p.then(v => console.log(v))

    // let ob = new Observable( o => {
    //   o.next("Angular")
    //   o.next("React")
    //   o.next("Bootstrap")
    //   o.next("Angular Material")
    //   o.next("Node")
    // })
    // ob.subscribe(v => console.log(v))

    // let ob = new Observable(o => {
    //   setTimeout(()=> {
    //     console.log("Observable startssss.....")
    //     o.next("Satish")
    //     o.next("Konduru")
    //   },4000)
    // })
    // ob.subscribe(v => console.log(v)).unsubscribe()

//     this.getData()
//     this.getData1()

    function getData(data){
      let counter = 0
      setInterval( ()=> {
        console.log("Data: "+ counter)
        data.next(counter)
        counter++
      }, 2000)
    }//getData ends here....
    const obs = new Observable(getData)
    const shared = new Subject()
    shared.subscribe(v => console.log("Subscription 1 : "+ v))
    shared.subscribe(v => console.log("Subscription 2 : "+ v))
    shared.subscribe(v => console.log("Subscription 3 : "+ v))
    obs.subscribe(shared)
    // obs.subscribe( v => console.log("Subscription 1:   "+ v))
    // obs.subscribe(v => console.log("Subscription 2 :   "+ v))
    // obs.subscribe(v => console.log("Subscription 3 :   "+ v))

  }// ngOnInit ends here
// public course: any = []
// public course1 : any = []
//   private _dataURL = '../../../assets/sharedData/course.json'
//   //using Promise
//   getData(){
//     this._http.get(this._dataURL)
//     .toPromise().then(res => this.course = res)
//   }
//   //using Observable
//   getData1(){
//     this._http.get(this._dataURL)
//     .subscribe(res => this.course1 = res)
//   }

}
