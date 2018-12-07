import { Component, ElementRef} from '@angular/core';
import { Observable, from, fromEvent, pipe, Subscription } from 'rxjs'
import { of, timer, interval } from 'rxjs';
import { debounceTime, map, merge, mapTo, scan } from 'rxjs/operators';
import {DataService} from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

timers:number = 0
intervals: string ="a"
from:string = ''
of:any
create:any
keyStroke: string
areja
areja2
areja3
areja4
areja5
areja6
areja7
areja8

timerBtn:boolean = false
intervalBtn:boolean = false
fromBtn:boolean = false
ofBtn:boolean = false
createBtn:boolean = false
subjecteBtn:boolean =false

sub:Subscription
sub2:Subscription
sub3:Subscription
sub4:Subscription
sub5:Subscription
sub6:Subscription

subject1: Subscription
subject2: Subscription

constructor(private dataService:DataService){
////// Subject //////
  this.areja =[]
  this.areja2 =[]
  this.dataService.getSubject().
  subscribe(x => {
   this.areja.push(x)
})
//////////////////////
////// Subject //////
this.areja3 =[]
this.areja4 =[]
this.dataService.getBehavior().
subscribe(x => {
 this.areja3.push(x)
})
//////////////////////
////// Replay //////
this.areja5 =[]
this.areja6 =[]
this.dataService.getReplay().
subscribe(x => {
 this.areja5.push(x)
})
//////////////////////
////// ASync //////
this.areja7 =[]
this.areja8 =[]
this.dataService.getAsync().
subscribe(x => {
 this.areja7.push(x)
})
//////////////////////

}
  ngOnInit(): void {
///// fromEvent //////
    const keys$:Observable<any> = fromEvent( document, 'keyup');
    keys$.subscribe(x=> this.keyStroke = x.key)
/////////////////////
  }
///// Subject //////
  pushToSubject(){
     this.dataService.feedSubject()
  }
  pushToSubject2(){
    this.dataService.getSubject().
    subscribe(x => {
      this.areja2.push(x)
    })
    this.dataService.sendToSubject(4)  
 }
 ///////////////////
///// Behavior //////
pushToBehavior(){
  this.dataService.feedBehavior()
}
pushToBehavior2(){
 this.dataService.getBehavior().
 subscribe(x => {
   this.areja4.push(x)
 })
 this.dataService.sendToBehavior(3)  
}
///////////////////

///// Replay //////
pushToReplay(){
  this.dataService.feedReplay()
}
pushToReplay2(){
 this.dataService.getReplay().
 subscribe(x => {
   this.areja6.push(x)
 })
 this.dataService.sendToReplay(5)  
}
///////////////////

///// Async //////
pushToAsync(){
  this.dataService.feedAsync()
}
pushToAsync2(){
 this.dataService.getAsync().
 subscribe(x => {
   this.areja8.push(x)
 })
 this.dataService.sendToAsync(5)
 this.dataService.async.complete();  
}
///////////////////
 
  

  startTimer(){
    this.timerBtn = !this.timerBtn
    const startTimer = timer(2000, 2000)
    this.sub = startTimer.subscribe(num => {
      this.timers = num
    })
  }

  stopTimer(){
    this.timerBtn = !this.timerBtn
    this.sub.unsubscribe()
    this.timers = 0
  }
  
  startInterval(){
    this.intervalBtn = !this.intervalBtn
    const startInterval = interval(1000)
    this.sub2 = startInterval.subscribe(num => {
      this.intervals += "a"
    })
  }

  stopInterval(){
    this.intervalBtn = !this.intervalBtn
    this.sub2.unsubscribe()
    this.intervals = "a"
  }

  startFrom(){
    this.fromBtn = !this.fromBtn
    const obs = from(['m', 'i', 'l','a', 'n'])
    this.sub3 = obs.subscribe(word => 
       this.from += word
    )
  }
  stopFrom(){
    this.fromBtn = !this.fromBtn
    this.sub3.unsubscribe()
    this.from = ""
  }

  startOf(){
    this.ofBtn = !this.ofBtn
    const obs = of(['m', 'i', 'l','a', 'n'])
    this.sub4 = obs.subscribe(word => 
       this.of = word
    )
  }
  stopOf(){
    this.ofBtn = !this.ofBtn
    this.sub4.unsubscribe()
    this.of = ""
  }



  multiplyByTen(input) {
    var output = Observable.create(function subscribe(observer) {
      input.subscribe({
        next: (v) => observer.next(10 * v),
        error: (err) => observer.error(err),
        complete: () => console.log("copmlete")        
      });
    });
    return output;
  }

  makeObs(){
    var input = from([1, 2, 3, 4]);
    var output = this.multiplyByTen(input);
    output.subscribe(x => {
      this.create = x;
      console.log(x);
      
    })}

    createObs(){
      this.sub6 = this.dataService.createObs()
      .subscribe(x => {
        this.create = x
      })
      this.createBtn = !this.createBtn
    }

    stopCreate(){
      this.sub6.unsubscribe()
      this.createBtn = !this.createBtn
      this.create = ""
    }
  
}