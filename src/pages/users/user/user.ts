import { NavController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})
export class UserPage implements OnInit{
    name: string;

    constructor (
        private navParams: NavParams,
        private navCtrl: NavController 
    ) {}

    ngOnInit() {
        //get fetches data from navController from previous page in stack
        this.name = this.navParams.get('userName');
    }

    onGoBack() {
        // to navigate back one page|
        // this.navCtrl.pop();
        // to navigate to root page|
        this.navCtrl.popToRoot();

    }
}