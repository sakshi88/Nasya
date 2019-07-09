import { Component, OnInit } from '@angular/core';
import { WhyChooseUsArray } from './why-choose-us-array';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  WhyChooseUsArray = WhyChooseUsArray;
}
