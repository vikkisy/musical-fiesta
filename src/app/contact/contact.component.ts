import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {

      // $(".email").mouseover(function () {
      //   $(".email").css("width", "15%")
        // $(".email").css("border-bottom", "5px solid #5f4d8c");
        // $(".email").css("border-radius", "5px");
      // });
      // $(".email").mouseout(function () {
      //   $(".email").css("width", "10%")
        // $(".email").css("border-bottom", "5px solid white");
      // });


    });


  }

}
