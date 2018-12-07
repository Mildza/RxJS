import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject = new Subject()
  private behavior = new BehaviorSubject(0)
  private replay = new ReplaySubject(3)
  public async = new AsyncSubject
  
  constructor() {
    
  }

  createObs(){
   return  Observable.create((observer) =>{
      observer.next({name:"milan"})
    })
  }

////// Subject /////////
feedSubject(){
  this.subject.next(1)
  this.subject.next(2)
  this.subject.next(3)      
}
sendToSubject(value){
  this.subject.next(value)
}
getSubject(){
  return this.subject
}
/////////////////////////

////// Behavior /////////
  feedBehavior(){
    this.behavior.next(1)
    this.behavior.next(2)      
  }
  sendToBehavior(value){
    this.behavior.next(value)
  }
  getBehavior(){
    return this.behavior
  }
/////////////////////////


////// Replay /////////
feedReplay(){
  this.replay.next(1)
  this.replay.next(2)
  this.replay.next(3)
  this.replay.next(4)
       
}
sendToReplay(value){
  this.replay.next(value)
}
getReplay(){
  return this.replay
}
/////////////////////////

////// Async /////////
feedAsync(){
  this.async.next(1)
  this.async.next(2)
  this.async.next(3)
  this.async.next(4)
       
}
sendToAsync(value){
  this.async.next(value)
}
getAsync(){
  return this.async
}
/////////////////////////



}
