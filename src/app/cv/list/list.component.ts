import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Cv} from "../model/cv";
import {CvService} from "../services/cv.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  // @Output() forwardCvItem = new EventEmitter<Cv>();
  constructor(
    private cvService: CvService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.cvService.getCvs().subscribe(
      cvs => {this.cvs = cvs;},
      (erreur) => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.warning(`Data are Fake please contact the admin`);
    }
    )
  }
  // forwardCv(cv: Cv) {
  //   this.forwardCvItem.emit(cv);
  // }
}
