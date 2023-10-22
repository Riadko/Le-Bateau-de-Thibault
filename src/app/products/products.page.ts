import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductsService } from '../service/ProductsService';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],

})




export class ProductsPage implements OnInit {

  productsList?: Product[];
  ImgPoulpe: SafeResourceUrl;
  logoHome: SafeResourceUrl;
  logoPanier: SafeResourceUrl;


  constructor(

    private router: Router,
    private productsService: ProductsService,
    private sanitizer: DomSanitizer
    ) {

      this.ImgPoulpe = this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/poulpe.png');
      this.logoPanier = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/cartLogo.png');
      this.logoHome = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/homeLogo.png');
    }
  ngOnInit() {


       this.productsList = this.productsService.productsList.slice();
  }

  onLoadProduct(product: Product) {
    let navigationExtras: NavigationExtras = {
      state: {
        product: product
      },
    };
    this.router.navigate(['products','single-product'], navigationExtras);
  }

  onGoToHome(){
    this.router.navigate(['/home']);
  }

  onGoToPanier(){
    this.router.navigate(['/cart']);
  }

}
