import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GitHubService} from '../../app/services/github';
import {Details} from '../details/details';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
	providers: [GitHubService]
})
export class Page1 {
  public foundRepos;
  public username;

  constructor(public navCtrl: NavController,private github: GitHubService) {
    
  }
  
  getRepos() {
      this.github.getRepos(this.username).subscribe(
          data => {
              this.foundRepos = data.json();
          },
          err => console.error(err),
          () => console.log('getRepos completed')
      );
  }
  goToDetails(repo){
  	this.navCtrl.push(Details, { repo: repo });
  }

}