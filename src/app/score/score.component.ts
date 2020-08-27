import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  constructor(public dataservice: DataService) { }

  ngOnInit(): void {
    // console.log(this.dataservice.data);
    // this.dataservice.data = this.dataservice.data.pipe(map(arr => arr.sort((a,b) => a.rank > b))); 
    this.dataservice.data.sort((a,b)=> a.rank > b.rank ? -1: a.rank < b.rank ? 1 : 0 );
  }

}
