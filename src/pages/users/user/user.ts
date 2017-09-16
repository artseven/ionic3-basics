import { NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'page-user',
    template: 'user.html'
})
export class UserPage implements OnInit{
    name: string;

    constructor (private navParams: NavParams) {}

    ngOnInit() {
        //get fetches data from navController from previous page in stack
        this.name = this.navParams.get('username');
    }
}