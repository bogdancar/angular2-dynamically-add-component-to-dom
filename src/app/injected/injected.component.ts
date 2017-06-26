import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-injected',
  templateUrl: './injected.component.html',
  styleUrls: ['./injected.component.css']
})
export class InjectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
