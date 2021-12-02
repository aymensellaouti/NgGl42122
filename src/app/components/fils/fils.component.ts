import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() message = 'cc';
  @Output() sendDataToDad = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  sendMessage() {
    this.sendDataToDad.emit('cc papa');
  }
  /*
  * 1- creer un emetteur d evenement
  * 2- methode qui emet cette evenement et qui y cache la data à emettre
  * 3- quand déclencher cette méthode
  * */

}
