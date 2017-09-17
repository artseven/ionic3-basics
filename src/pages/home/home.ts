import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';
import { Component } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usrPage = UsersPage;

  constructor( private navCtrl: NavController) {}

  onGoToUsers() {
    this.navCtrl.push(this.usrPage).then((error) => console.log('Argument was ' + error));
  }
}
