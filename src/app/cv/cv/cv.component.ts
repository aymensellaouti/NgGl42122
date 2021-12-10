import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {LoggerService} from "../../services/logger.service";
import {TodoService} from "../../todo/services/todo.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedCv: Cv = null;
  date = new Date();
  constructor(
    private logger: LoggerService,
    private todoService: TodoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.logger.logger('cc je suis le cvComponent');
    this.toastr.info('Bienvenu dans notre CvTech :D');
  }

  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
    this.todoService.loggerTodo();
  }
}
