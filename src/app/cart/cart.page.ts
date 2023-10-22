import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { Product } from '../models/Product';
import { ProductsService } from '../service/ProductsService';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit {
  productsList?: Product[];

  logoHome: SafeResourceUrl;
  logoPanier: SafeResourceUrl;
  ImgPoulpe: SafeResourceUrl;

  public alertButtons = [
    {
      text: 'Non',
      role: 'cancel',
    },
    {
      text: 'Oui',
      role: 'confirm',
    },
  ];

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

  selectedQuantities: { [key: string]: number } = {};

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private sanitizer: DomSanitizer,
    private alertController: AlertController
    ) {
    this.logoPanier = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/cartLogo.png');
    this.logoHome = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/homeLogo.png');
    this.ImgPoulpe = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/poulpe.png');
  }

  async openQuantityDialog(description: string) {
    const alert = await this.alertController.create({
      header: 'Select Quantity',
      inputs: [
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Quantity',
          value: this.selectedQuantities[description] || 1, // Set a default quantity if needed
          min: 0,
          max: 20,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: (data) => {
            const selectedQuantity = data.quantity;
          this.selectedQuantities[description] = selectedQuantity;
          console.log(`Selected quantity for ${description}: ${selectedQuantity}`);
          },
        },
      ],
    });
  
    await alert.present();
  }

  ngOnInit() {
    this.productsList = this.productsService.productsList.slice();
  }

  onGoToHome(){
    this.router.navigate(['/home']);
  }

  onGoToPanier(){
    this.router.navigate(['/cart']);
  }

  calculateTotalPrice(desc: string, quantity: number, price: string) {
    if (quantity && price) {
      return (quantity * parseFloat(price)).toFixed(2);
    }
    return '0.00';
  }

  calculateTotalSum() {
    let totalSum = 0;
    for (let product of this.productsList!) {
      for (let i = 0; i < product.description!.length; i++) {
        totalSum += parseFloat(this.calculateTotalPrice(product.description![i], this.selectedQuantities[product.description![i]], product.price![i]));
      }
    }
    return totalSum.toFixed(2);
  }
  
}
