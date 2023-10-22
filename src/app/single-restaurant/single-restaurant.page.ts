import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../models/restaurants';

@Component({
  selector: 'app-single-restaurant',
  templateUrl: './single-restaurant.page.html',
  styleUrls: ['./single-restaurant.page.scss'],
})
export class SingleRestaurantPage implements OnInit {

  newImage!: string;
  restaurant!: Restaurant;

  constructor(private route: ActivatedRoute,
    private router: Router) {
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation()?.extras.state){
          this.restaurant = this.router.getCurrentNavigation()?.extras.state?.['restaurant'];
          this.newImage = this.restaurant.image.replace("_icon", "");
        }
      })
     }

  ngOnInit() {
  }

}