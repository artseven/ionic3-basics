import { Component, OnInit } from '@angular/core';

import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})
export class UserPage implements OnInit{
    name: string;

    constructor (private navParams: NavParams) {}

    ngOnInit() {
        //get fetches data from navController from previous page in stack
        this.name = this.navParams.get('userName');
    }
}