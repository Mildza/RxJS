import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

   
  constructor() {
    
  }

  createObs(){
   return  Observable.create((observer) =>{
      observer.next({name:"milan"})
    })
  }




}
