import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv = null;
  @Input() size = 50;

  @Output() selectCvItem = new EventEmitter<Cv>();
  constructor() { }

  ngOnInit(): void {
  }

  selectCv() {
    this.selectCvItem.emit(this.cv);
  }
}
