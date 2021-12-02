import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  @Input() color = 'lightblue';
  size = 75;
  font: 'Arial';
  allume = true;

  constructor() { }

  ngOnInit(): void {
  }

  allumerEteindre() {
    this.allume = !this.allume;
  }
}
