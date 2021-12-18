import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {LoginResponseDto} from "./dto/login-response.dto";
import {HttpClient} from "@angular/common/http";
import {CONSTANTES} from "../config/constantes.config";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(credenitals): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(CONSTANTES.apis.login, credenitals);
  }
  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !! localStorage.getItem('token');
  }
}
