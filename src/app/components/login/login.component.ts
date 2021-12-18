import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toaster: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe(
      (data) => {
        localStorage.setItem('token', data.id);
        this.toaster.success('Bienvenu :D');
        this.router.navigate(['cv']);
      },
      (erreur) => {
        this.toaster.error('Veuillez vérifier vos credentials');
      }
    )
  }
}
