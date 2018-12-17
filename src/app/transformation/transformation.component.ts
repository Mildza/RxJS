import { Component, OnInit } from "@angular/core";
import { from, fromEvent, Subscription, of, interval } from "rxjs";
import { map, mapTo, scan, reduce, buffer, bufferToggle } from "rxjs/operators";

@Component({
  selector: "app-transformation",
  templateUrl: "./transformation.component.html",
  styleUrls: ["./transformation.component.css"],
})
export class TransformationComponent implements OnInit {
  maps;
  scans;
  reduces;
  buffers;
  clicks;
  clicks2: Subscription;
  bufferToggles;
  mapBtn: boolean = false;
  reduceBtn: boolean = false;
  btn;
  Reduce: Subscription;
  Map: Subscription;

  constructor() {}

  ngOnInit() {
    ///////BufferToggles/////////
    fromEvent(document, "copy")
      .pipe(
        bufferToggle(fromEvent(document, "copy"), x =>
          fromEvent(document, "paste")
        )
      )
      .subscribe(x => (this.bufferToggles = "Copy - paste done"));
    ////////////////

    //////Scan//////
    this.btn = document.getElementById("id") as HTMLButtonElement;
    this.clicks2 = fromEvent(this.btn, "click").subscribe(x => console.log(x));

    this.clicks = fromEvent(document, "click");
    const ones = this.clicks.pipe(mapTo(1));
    const seed = 0;
    const count = ones.pipe(scan((acc, one) => acc + one, seed));
    count.subscribe(x => {
      this.scans = x;
    });
    ///////////////////
    ////// Buffer /////

    /////////////////
    const ob = { user: "name", pass: "miki" };
    let { user, pass } = ob;
    console.log(user, pass);

    const arr = [1, 2, 3, 4, 5, 6, 7];

    let [a, b, ...rest] = arr;
    console.log(a, b, rest);

    const attitude = function(original, replacement) {
      return function(source) {
        return source.replace(original, replacement);
      };
    };

    const snakify = attitude(/millenials/gi, "Snake People");
    const hippify = attitude(/baby boomers/gi, "Aging Hippies");

    console.log(snakify("The Millenials are always up to something."));
    // The Snake People are always up to something.
    console.log(hippify("The Baby Boomers just look the other way."));
    // The Aging Hippies just look the other way.
  }
///////Map////////
  startMap() {
    this.mapBtn = !this.mapBtn;
    const source = from([1, 2, 3, 4, 5]);
    this.maps = [];
    const example = source.pipe(
      map((val, i) => ({ index: i, values: val * 5 }))
    );

    this.Map = example.subscribe(val => this.maps.push(val));
    console.log(this.maps);
  }

  stopMap() {
    this.mapBtn = !this.mapBtn;
    this.Map.unsubscribe();
    this.maps = [];
  }
/////////////////
/////Reduce///////
  startReduce() {
    this.reduceBtn = !this.reduceBtn;
    const source = of(1, 2, 3, 4);
    const example = source.pipe(reduce((acc, val) => acc + val));
    this.Reduce = example.subscribe(val => {
      this.reduces = val;
    });
  }

  stopReduce() {
    this.reduceBtn = !this.reduceBtn;
    this.reduces = 0;
    this.Reduce.unsubscribe();
  }
////////////////
//////Buffer////
  startBuffer() {
    const myInterval = interval(1000);
    const myBufferedInterval = myInterval
      .pipe(buffer(this.clicks))
      .subscribe(val => (this.buffers = val));
  }
}
