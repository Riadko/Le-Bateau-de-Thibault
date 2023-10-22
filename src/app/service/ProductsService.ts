import { Injectable } from '@angular/core';
import {Product} from '../models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
//   appareilsList?: Appareil[];

// constructor(private http : HttpClient){}
// getAppareils(){
//   return this.http.get('assets/data/produits.json')
// }
export class ProductsService {

productsList: Product[] =
  [
    {
      name: 'Poisson',
      description:[
        'Filet Bar en ligne',
        'Filet Bar en portion',
        'Aile de raie',
        'Loup au bar',
        'Filet de julienne',
        'Bar en ligne',
      ],
      price:[
        '2€',
        '10€',
        '10',
        '12€',
        '10€',
        '30€',
      ],
    },
    {
      name: 'Coquillage',
      description:[
        'Amande de mer',
        'Bigorneau',
        'Bucarde',
        'Bulot',
        'Clam',
        'Coque',
        'Couteaux',
        'Coquille Saint-Jacques',

      ],
      price:[
        '102€',
        '20€',
        '2€',
        '12€',
        '8€',
        '40€',
        '5€',
        '0.8€',
      ],
    },
    {
      name: 'Crustacés',
      description:[
        'Crevette',
        'Crabe',
        'Homard',
        'Tourteau',
        'Araignée de mer',

      ],
      price:[
        '12€',
        '8€',
        '21€',
        '6€',
        '9€',
      ],
    },
    {
      name: 'Promotions',
      description:[
        'Moule',
        'Crevette impériale',
      ],
      price:[
        '6€',
        '2€',
      ],
    }
  ];

}
