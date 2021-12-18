import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnInit {
  counterObseervable: Observable<number>;
  constructor(
    private toastr: ToastrService
  ) {
    this.counterObseervable= new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    this.counterObseervable.subscribe((val) => {
      console.log(val);
    });
    this.counterObseervable
      .pipe(
        map( x => x * 3),
        filter( y => !(y % 2) )
      )
      .subscribe(
      (data) => {
        this.toastr.info(''+data);
      },
      (erreur) => {
        console.log(erreur)},
      () => {this.toastr.success('Fin du flux');}
    )

  }

  ngOnInit(): void {
  }

}
