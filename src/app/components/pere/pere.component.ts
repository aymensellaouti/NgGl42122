import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  processMessage(sonMessage: string) {
    alert(sonMessage);
  }
}
