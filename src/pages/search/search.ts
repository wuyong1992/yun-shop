import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Searchbar, ViewController} from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage implements OnInit{




  items: string[] = [
    "macbook pro",
    "小米6",
    "ionic",
    "小米6 Google Play"
  ];

  recommendList: string[] = [
    "小米6",
    "MacBook Pro",
    "三星S9+",
    "iPhone X",
    "Macbook pro 16G"
  ];

  ngOnInit(): void {
    /**
     * 获取焦点事件必须setTimeout，否则不起效果
     * https://github.com/ionic-team/ionic/issues/12288
     */
    setTimeout(() => {
      this.searchbar.setFocus();
    }, 500);
  }

  @ViewChild("searchbar") searchbar:Searchbar;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  dismissSearch(){
    this.viewCtrl.dismiss();
  }


  searchFromList(item){
    console.log(item);
  }

  searchFromRecommend(recommend){
    console.log(recommend);
  }
  cleatSearchHistory(){
    this.items = [];
    console.log("clear search history OK!")
  }

}
