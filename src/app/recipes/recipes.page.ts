import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Recipe } from '../models/Recipe';
import { RecipesService } from '../service/RecipesService';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipesList?: Recipe[];
  ImgPoulpe: SafeResourceUrl;


  constructor(

    private router: Router,
    private recipesService: RecipesService,
    private sanitizer: DomSanitizer
    ) {

      this.ImgPoulpe = this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/poulpe.png');

    }
  ngOnInit() {


       this.recipesList = this.recipesService.recipesList.slice();
  }

  onLoadRecipe(recipe: Recipe) {
    let navigationExtras: NavigationExtras = {
      state: {
        recipe: recipe
      },
    };
    this.router.navigate(['recipes','single-recipe'], navigationExtras);
  }

}