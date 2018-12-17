import { Component,OnInit} from '@angular/core';
import { Observable, from, fromEvent, Subscription } from 'rxjs'
import { of, timer, interval, range } from 'rxjs';
import { take, takeLast, takeUntil, takeWhile } from 'rxjs/operators';
import {OperatorsService} from '../services/operators.service'

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

rangeArr
  
timers:number = 0
intervals:number
from:string = ''
of:any
create:any
keyStroke: string
range

timerBtn:boolean = false
intervalBtn:boolean = false
fromBtn:boolean = false
ofBtn:boolean = false
createBtn:boolean = false
subjecteBtn:boolean =false
rangeBtn: boolean = false

sub:Subscription
sub2:Subscription
sub3:Subscription
sub4:Subscription
sub5:Subscription
sub6:Subscription

subject1: Subscription
subject2: Subscription

constructor(private operatorsService:OperatorsService){

  } 

  ngOnInit(): void {
///// fromEvent //////
    const keys$:Observable<any> = fromEvent( document, 'keyup');
    keys$.subscribe(x=> this.keyStroke = x.key)
/////////////////////
//     const intervals = interval(1000);
//     const clicks = fromEvent(document, 'click');
//     const many = range(1, 15);
// ///// take ///////
//     const Take = intervals.pipe(take(4))
//     Take.subscribe(x => console.log("take(4): " +  x));
// ///// takeLast /////
//     const TakeLast = many.pipe(takeLast(2))
//     TakeLast.subscribe(x => console.log("takeLast: " +  x));
// ////// takeUntil //////
//     const TakeUntil = intervals.pipe(takeUntil(clicks));
//     TakeUntil.subscribe(x => console.log("takeUntil Click: " +  x));
// ////// takeWhile
//     const TakeWhile = intervals.pipe(takeWhile(x => x < 10 ));
//     TakeWhile.subscribe(x => console.log("takeWhile 10: " + x));

  
  }

///////// Create ///////
createObs(){
  this.sub6 = this.operatorsService.createObs()
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
///////////////////////

  ////// Timer ///////
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
  //////////////////

  ////// Interval ////////
  startInterval(){
    this.intervalBtn = !this.intervalBtn
    const startInterval = interval(1000)
    this.sub2 = startInterval.subscribe(num => {
      this.intervals = num
    })
  }
  stopInterval(){
    this.intervalBtn = !this.intervalBtn
    this.sub2.unsubscribe()
    this.intervals = null
  }
  ////////////////////////

startRange(){
  this.rangeBtn=!this.rangeBtn
  this.rangeArr=[]
  const Range = range(3,7)
  Range.subscribe(x => {
    this.rangeArr.push(x)
  })
}

stopRange(){
  this.rangeArr=[]
  this.rangeBtn=!this.rangeBtn
}




  //////// From //////////
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
///////////////////////////
////////// Of ////////////
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
///////////////////////////


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
      console.log(x);
    })}
////////////////////////

}
