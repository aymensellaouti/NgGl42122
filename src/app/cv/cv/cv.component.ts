import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {LoggerService} from "../../services/logger.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedCv: Cv = null;
  date = new Date();
  constructor(
    private logger: LoggerService
  ) { }

  ngOnInit(): void {
    this.logger.logger('cc je suis le cvComponent');
  }

  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
