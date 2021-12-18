import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {LoggerService} from "../../services/logger.service";
import {TodoService} from "../../todo/services/todo.service";
import {ToastrService} from "ngx-toastr";
import {CvService} from "../services/cv.service";
import {distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  // selectedCv: Cv = null;
  nbClick = 0;
  date = new Date();
  constructor(
    private logger: LoggerService,
    private todoService: TodoService,
    private toastr: ToastrService,
    private cvService: CvService
  ) { }

  ngOnInit(): void {
    this.logger.logger('cc je suis le cvComponent');
    this.toastr.info('Bienvenu dans notre CvTech :D');
    this.cvService.selectCvSubject
      .pipe(distinctUntilChanged())
      .subscribe(
      (onSenFou) => {this.nbClick++;}
    )
  }

  // getSelectedCv(cv: Cv) {
  //   this.selectedCv = cv;
  //   this.todoService.loggerTodo();
  // }

}
