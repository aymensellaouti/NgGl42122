import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() { }
  logger(message) {
    console.log('From Logger : ',message);
  }
}
