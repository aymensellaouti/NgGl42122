import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {ActivatedRoute, Router} from "@angular/router";
import {CvService} from "../services/cv.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css']
})
export class DetailsCvComponent implements OnInit {
  cv: Cv = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
          this.cv = this.cvService.findCvById(+params['id']);
          if (!this.cv) {
            this.router.navigate(['cv']);
          }
      }
    );
    this.activatedRoute.queryParams.subscribe(
      qp => {
        console.log(qp);
      }
    )
  }

  delete() {
    if (this.cvService.deleteCv(this.cv)) {
      this.toaster.success(`Cv supprimé avec succès`);
      this.router.navigate(['cv']);
    } else {
      this.toaster.error(`Problème Système veuillez contacter l'admin`);
    }
  }
}
