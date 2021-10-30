import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  name = "Angular";
  positiveNum = null;
  constructor() { }

  ngOnInit(): void {
  }

}
