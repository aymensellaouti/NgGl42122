import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private cvs: Cv[] = [];
  constructor() {}
  getEmbauches(): Cv[] {
    return this.cvs;
  }
  embaucher(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if(index === -1) {
      this.cvs.push(cv);
      return true;
    }
    return false;
  }
}
