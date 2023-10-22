import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Restaurant } from '../models/restaurants';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})

export class RestaurantsPage implements OnInit {

  restaurantList: Restaurant[] = [
    {
      name: "Bistrot Landais",
      image: "../../assets/images/bistrotLandais_icon.png",
      description: ["Bienvenu dans le plus bon restaurant", "Service à la carte", "Poisson frais", "jnczjdvnzjv"]
    },
    {
      name: "Fous de l'Ile",
      image: "../../assets/images/fousDeLIle_icon.png",
      description: ["Bienvenu dans le plus bon restaurant", "Service à la carte", "Poisson frais", "jnczjdvnzjv"]
    },
    {
      name: "Des Gascons",
      image: "../../assets/images/desGascons_icon.png",
      description: ["Bienvenu dans le plus bon restaurant", "Service à la carte", "Poisson frais", "jnczjdvnzjv"]
    },
    {
      name: "Villa 9 Trois",
      image: "../../assets/images/villa9Trois_icon.png",
      description: ["Bienvenu dans le plus bon restaurant", "Service à la carte", "Poisson frais", "jnczjdvnzjv"]
    },
    {
      name: "Sommelier",
      image: "../../assets/images/duSommelier_icon.png",
      description: ["Bienvenu dans le plus bon restaurant", "Service à la carte", "Poisson frais", "jnczjdvnzjv"]
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadRestaurant(restaurant: Restaurant) {
    let navigateExtras: NavigationExtras = {
      state: {
        restaurant: restaurant
      }
    };
    this.router.navigate(['restaurants', 'single-restaurant'], navigateExtras);
  }

  onGoToContact(){
    this.router.navigate(['/contact']);
  }

}