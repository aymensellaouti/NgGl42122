import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../model/cv";
import {EmbaucheService} from "../services/embauche.service";
import {ToastrService} from "ngx-toastr";
import {CvService} from "../services/cv.service";
import {distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // detailComponent() , detailComponent(cv)
  // @Input()
  cv: Cv = null;
  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService,
    private cvService: CvService
  ) { }

  ngOnInit(): void {
    this.cvService.selectCvSubject
      .pipe(distinctUntilChanged())
      .subscribe(
      newCv => this.cv = newCv
    );
  }
  embaucher() {
    if (this.embaucheService.embaucher(this.cv)) {
      this.toastr.success(`Le cv de ${this.cv.name} a été embauché avec succès`);
    } else {
      this.toastr.warning(`Le cv de ${this.cv.name} est déjà embauché`);
    }
  }
}
