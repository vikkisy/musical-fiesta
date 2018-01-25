import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),

    ])
  ]

})
export class HomeComponent implements OnInit {

  show = false;

  constructor() { }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    this.show= !this.show;
  }

  ngOnInit() {
    $(document).ready(function () {
      // $("button").click(function () {
        $(".card1").fadeIn(1000);
        $(".card2").fadeIn(2000);
        $(".smile").fadeIn(3000);
        $(".card3").fadeIn(4000);
        $(".card4").fadeIn(5000);
      // });
    });
  }

}
