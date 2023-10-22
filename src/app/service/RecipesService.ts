import { Injectable } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
//   appareilsList?: Appareil[];

// constructor(private http : HttpClient){}
// getAppareils(){
//   return this.http.get('assets/data/produits.json')
// }
export class RecipesService {

  recipesList: Recipe[] =
  [
    {
      name: 'Homard',
      title: 'Homard en Lorem ipsum',
      description:[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
      image:'homardRecette.png',
      icon:'homardRecette_icon.png',
    },
    {
      name: 'StJacques',
      title: 'StJacques Lorem ipsum dolor sit amet',
      description:[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
      image:'saintJacques.png',
      icon:'saintJacques_icon.png',
    },
    {
      name: 'Bar',
      title: 'Bar Lorem ipsum dol',
      description:[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
      image:'barRecette.png',
      icon:'barRecette_icon.png',
    },
    {
      name: 'Poulpe 1',
      title: 'Poulpe 1 Lorem ipsum dolor sit amet',
      description:[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
      image:'poulpe.png',
      icon:'poulpe.png',
    },
    {
      name: 'Poulpe 2',
      title: 'Poulpe 2 Lorem',
      description:[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
      image:'poulpe.png',
      icon:'poulpe.png',
    },
    {
      name: 'Tourteau',
      title: 'Tourteau Lorem ipsu',
      description:[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris, eget consequat nisi lobortis nec. Mauris ultricies luctus molestie. Sed auctor diam eu ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt vehicula mauris',
      ],
      image:'tourteau.png',
      icon:'tourteau.png',
    }
  ];

}
