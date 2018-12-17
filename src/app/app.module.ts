import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ObservableService} from './services/observable.service';
import {OperatorsService} from './services/operators.service';

import { OperatorsComponent } from './operators/operators.component';
import { ObservablesComponent } from './observables/observables.component';
import { TransformationComponent } from './transformation/transformation.component';
import { CombinationComponent } from './combination/combination.component'

@NgModule({
  declarations: [
    AppComponent,
    OperatorsComponent,
    ObservablesComponent,
    TransformationComponent,
    CombinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ObservableService, OperatorsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
