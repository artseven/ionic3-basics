import { UserPage } from './user/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})

export class UsersPage {
  constructor (private navCtrl: NavController) {}

  onLoadUser( name: string) {
    this.navCtrl.push(UserPage, {userName: name}, {
      direction: 'back', // default for push is 'forward'
      duration: 2000, // 2 seconds
      easing: 'ease-out'
    });
  }

  ionViewCanEnter(): boolean | Promise<boolean> {
    console.log('ionViewCanEnter');
    const rnd = Math.random();
    return rnd > 0.1;
  }

  ionViewDidLoad(){
   console.log('ionViewDidLoad');
  }

  ionViewWillEnter(){
   console.log('ionViewWillEnter');
  }

  ionViewDidEnter(){
   console.log('ionViewWillEnter');
  }

  ionViewCanLeave(): boolean | Promise<void> {
    const promise = new Promise<void>((resolve, reject) => {
      setTimeout(()=> {
      resolve()
     }, 1000);
    });
    return promise;
  }



}
