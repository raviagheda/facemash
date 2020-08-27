import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = [
    { url: 'assets/images/1.jpg', rank: 1200},
    { url: 'assets/images/2.jpg', rank: 1200},
    { url: 'assets/images/3.jpg', rank: 1200},
    { url: 'assets/images/4.jpg', rank: 1200},
    { url: 'assets/images/5.jpg', rank: 1200},
    { url: 'assets/images/6.jpg', rank: 1200},
    { url: 'assets/images/7.jpg', rank: 1200},
    { url: 'assets/images/8.jpg', rank: 1200},
    { url: 'assets/images/9.jpg', rank: 1200},
    { url: 'assets/images/10.jpg', rank: 1200},
    { url: 'assets/images/11.jpg', rank: 1200},
  ]
  constructor() { }
}
