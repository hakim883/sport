import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
@Input() matchInput : any;

  constructor() { }

  ngOnInit() {
    
  }
  compare(a,b){
    console.log([a , b] );

    if (a>b){
      return ['win','green'] ;
    }
    else if (a<b) {
      return ['loss','blue'];
    }
    else{
      return ['draw','yellow'];
    }
  }
}
// @Input() matchInput : any ; 
//   constructor() { }

//   ngOnInit(): void {
//   }

//   compare (a : number , b : number  ){
//       if ( a>b) 
//       {
//          return ["win",'green']
//       }
//      else  if (a<b) 
//      {
//         return ["loss",'blue']
//      }
//       else {
//         return ["draw",'yellow']
//       }
//   }

// }
