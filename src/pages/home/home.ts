import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ProfilePage=ProfilePage;

  constructor(public navCtrl: NavController) {

  }


}
