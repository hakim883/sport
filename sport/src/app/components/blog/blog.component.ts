import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
blogTab=[

{id:1,title:"Romolu to stay at Real Nadrid?",description:"sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.",date:"Mars 10, 2022"},
{id:2,title:"stay at Real Nadrid?",description:"Possimus deserunt saepe tempora dolorem.",date:"Mars 10, 2022"},
{id:3,title:"Real Nadrid?",description:"adipisicing elit. Possimus deserunt saepe tempora dolorem.",date:"jan 02, 2019"}
]
  constructor() { }

  ngOnInit() {
  }

}
