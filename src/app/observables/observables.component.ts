import { Component, OnInit} from '@angular/core';
import {ObservableService} from '../services/observable.service'

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  areja
  areja2
  areja3
  areja4
  areja5
  areja6
  areja7
  areja8
  
  constructor(private observableService:ObservableService){
  ////// Subject //////
    this.areja =[]
    this.areja2 =[]
    this.observableService.getSubject().
    subscribe(x => {
     this.areja.push(x)
  })
  //////////////////////
  ////// Subject //////
  this.areja3 =[]
  this.areja4 =[]
  this.observableService.getBehavior().
  subscribe(x => {
   this.areja3.push(x)
  })
  //////////////////////
  ////// Replay //////
  this.areja5 =[]
  this.areja6 =[]
  this.observableService.getReplay().
  subscribe(x => {
   this.areja5.push(x)
  })
  //////////////////////
  ////// ASync //////
  this.areja7 =[]
  this.areja8 =[]
  this.observableService.getAsync().
  subscribe(x => {
   this.areja7.push(x)
  })
  //////////////////////
  
  }
    ngOnInit(): void {

    }
  ///// Subject //////
    pushToSubject(){
       this.observableService.feedSubject()
    }
    pushToSubject2(){
      this.observableService.getSubject().
      subscribe(x => {
        this.areja2.push(x)
      })
      this.observableService.sendToSubject(4)  
   }
   ///////////////////
  ///// Behavior //////
  pushToBehavior(){
    this.observableService.feedBehavior()
  }
  pushToBehavior2(){
   this.observableService.getBehavior().
   subscribe(x => {
     this.areja4.push(x)
   })
   this.observableService.sendToBehavior(3)  
  }
  ///////////////////
  
  ///// Replay //////
  pushToReplay(){
    this.observableService.feedReplay()
  }
  pushToReplay2(){
   this.observableService.getReplay().
   subscribe(x => {
     this.areja6.push(x)
   })
   this.observableService.sendToReplay(5)  
  }
  ///////////////////
  
  ///// Async //////
  pushToAsync(){
    this.observableService.feedAsync()
  }
  pushToAsync2(){
   this.observableService.getAsync().
   subscribe(x => {
     this.areja8.push(x)
   })
   this.observableService.sendToAsync(5)
   this.observableService.async.complete();  
  }
  ///////////////////
   

}
