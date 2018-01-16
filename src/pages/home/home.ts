import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  homeInput: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


  gotoSearch(){
    let search = this.modalCtrl.create("SearchPage");
    search.present();
  }

  cancelInput(){
    this.homeInput = "";
  }
}
