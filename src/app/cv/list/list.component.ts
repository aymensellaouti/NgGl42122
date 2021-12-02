import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  @Output() forwardCvItem = new EventEmitter<Cv>();
  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'rotating_card_profile.png','teacher', '1234', 39),
      new Cv(2, 'sellaouti', 'aymen', 'rotating_card_profile2.png','teacher', '1234', 39),
      // new Cv(3, 'sellaouti', 'aymen', '                 ','teacher', '1234', 39),
      // new Cv(4, 'sellaouti', 'aymen', '','teacher', '1234', 39),
    ];
  }

  ngOnInit(): void {
  }

  forwardCv(cv: Cv) {
    this.forwardCvItem.emit(cv);
  }
}
