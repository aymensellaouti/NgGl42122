import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  // Descriptiond e l'etat a travers les attributs
  isHidden = true;
  message = 'Cc';
  constructor() { }

  ngOnInit(): void {
  }
  //Change the state of p by changing its state
  showHide() {
    this.isHidden = !this.isHidden;
  }
  changeMessage(newMessage) {
    this.message = newMessage;
  }

}
