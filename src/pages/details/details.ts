import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GitHubService} from '../../app/services/github';

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [GitHubService]

})
export class Details {
  public readme = '';
  public repo;

  constructor(public github: GitHubService,
  	public navCtrl: NavController, 
  	public navParams: NavParams) {

    this.repo = navParams.get('repo');
    this.github.getDetails(this.repo).subscribe(
  		data => this.readme = data.text(),
  		err => {
  			if(err.status == 404){
  				this.readme = 'Este repo no tiene un README. :(';
  			}else{
  				console.error(err);
  			}
  		}
  	)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Details');
  }

}
