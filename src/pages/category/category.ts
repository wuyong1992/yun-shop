import {AfterViewInit, Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Category} from "../../model/category.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare let $: any;
declare let Swiper: any;

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage implements AfterViewInit {


  categoryInput: string;
  h: string;
  // mySwiper: any;
  items: any;
  Lv2CategoryList: Category[] = [];



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public httpClient:HttpClient) {
    $(function () {

      this.h = $(window).height() - $(".header").height() - $(".searchbar").height() - $(".tabbar").height() - 15 + "px";
      $("#categorySwiper").height(this.h);
      $("#categroyLeft").height(this.h);

      console.log(this.h);

      let mySwiper = new Swiper('#categorySwiper', {
        direction: 'vertical',
        observer:true,
        observeParents:true
      });

      $(".category-item").click(function (event) {
        let id = event.currentTarget.id;
        console.log(id);
        mySwiper.slideTo(id -1, 500, false);

      })
    });

    console.log("haha");
    this.getCategory().subscribe(
      data=>{
        this.items = data;

        console.log(this.items);
        this.items.forEach((item) => {
          this.Lv2CategoryList.push(item.value);
        });
        console.log(this.Lv2CategoryList);
      }
    )

  }

  ngAfterViewInit(): void {

  }

  getCategory(){
    return this.httpClient.get("../../assets/mock/category-list.json");
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  ionViewWillEnter() {

  }

  cancelInput() {
    // this.categoryInput = "";
  }

  gotoSearch() {
    let modal = this.modalCtrl.create("SearchPage");
    modal.present();
  }


  showCategory(itemId){
    // this.mySwiper
    // this.mySwiper.slideTo(itemId, 500, false);
  }

}
