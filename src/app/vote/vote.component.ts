import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  constructor(public dataservice: DataService) { }

  public img1;
  public img2;
  private k = 100;
  innerwidth = 1211;

  ngOnInit(): void {
    this.innerwidth = window.innerWidth;
    console.log(this.innerwidth);
    this.select_two_images();
  }

  select_two_images(){
    this.img1 = Math.floor(Math.random() * 1000) % this.dataservice.data.length;
    this.img2 = Math.floor(Math.random() * 1000) % this.dataservice.data.length;
    if(this.img1 == this.img2){
      this.img2 = Math.floor(Math.random() * 1000) % this.dataservice.data.length;
    }
    // console.log(this.img1)
    // console.log(this.img2)
  }

  private Expectation_of_winning(rating1, rating2){
    return 1.0 / (1 + 1.0 * Math.pow(10, 1.0*(rating1-rating2)/400));
  }

  private Update_Rank(w,k){
    const ea = this.Expectation_of_winning(this.dataservice.data[this.img1].rank,this.dataservice.data[this.img2].rank);
    const eb = this.Expectation_of_winning(this.dataservice.data[this.img2].rank,this.dataservice.data[this.img1].rank)

    if(w == this.img1){
      this.dataservice.data[this.img1].rank += k*(1-ea);
      this.dataservice.data[this.img2].rank += k*(0-eb);
    }
    else{
      this.dataservice.data[this.img1].rank += k*(0-ea);
      this.dataservice.data[this.img2].rank += k*(1-eb);
    }
    // console.log(this.dataservice.data);
  }

  /**
   * @param {Number} clickedImage - id of img1 of img2 based on selection of user
   */
  onVote(clickedImage){
    this.Update_Rank(clickedImage, this.k);
    this.select_two_images();
  }


}
