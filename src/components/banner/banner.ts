import { Component } from '@angular/core';

/**
 * Generated class for the BannerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

declare let $: any;

declare let Swiper: any;

@Component({
  selector: 'banner',
  templateUrl: 'banner.html'
})
export class BannerComponent {


  constructor() {
    console.log('Hello BannerComponent Component');

    $(function () {
      let mySwiper = new Swiper('#demo-banner', {
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
          delay: 2000,//2秒切换一次
          disableOnInteraction: false,  //操作后不停止自动轮播
        },
      });

      console.log($(".swiper-container").css("height"));
    })
  }

}
