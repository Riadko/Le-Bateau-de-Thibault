import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {
  bateauxList = [
    {
      name: 'De la Brise',
      image: '../../assets/images/deLaBrise.png',
      icon: '../../assets/images/deLaBrise_icon.png',
      description: [
        'XXXYYYZZZ',
        "Qu'il est chaud le soleil Quand nous sommes en vacances Y a d'la joie, des hirondelles C'est le sud de la France Papa bricole au garage Maman lit dans la chaise longue Dans ce joli paysage Moi, je me balade en tonge",
        'Que de bonheur! Que de bonheur!'
      ]
    },
    {
      name: 'Saphir',
      image: '../../assets/images/saphir.png',
      icon: '../../assets/images/saphir_icon.png',
      description: [
        'XXXYYYZZZ',
        "Qu'il est chaud le soleil Quand nous sommes en vacances Y a d'la joie, des hirondelles C'est le sud de la France Papa bricole au garage Maman lit dans la chaise longue Dans ce joli paysage Moi, je me balade en tonge",
        'Que de bonheur! Que de bonheur!'
      ]
    }, 
    {
      name: 'Gast Micher',
      image: '../../assets/images/gastMicher.png',
      icon: '../../assets/images/gastMicher_icon.png',
      description: [
        'XXXYYYZZZ',
        "Qu'il est chaud le soleil Quand nous sommes en vacances Y a d'la joie, des hirondelles C'est le sud de la France Papa bricole au garage Maman lit dans la chaise longue Dans ce joli paysage Moi, je me balade en tonge",
        'Que de bonheur! Que de bonheur!'
      ]
    },
    {
      name: 'Aquilon',
      image: '../../assets/images/aquilon.png',
      icon: '../../assets/images/aquilon_icon.png',
      description: [
        'XXXYYYZZZ',
        "Qu'il est chaud le soleil Quand nous sommes en vacances Y a d'la joie, des hirondelles C'est le sud de la France Papa bricole au garage Maman lit dans la chaise longue Dans ce joli paysage Moi, je me balade en tonge",
        'Que de bonheur! Que de bonheur!'
      ]
    }
  ];
  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  onGoToContact(){
    this.router.navigate(['/contact']);
  }

  onGoToBateau(bateau: {name: string, image: string, icon: string, description: string[]}){
    let navigationExtras: NavigationExtras = {
      state: {
        bateau:bateau
      }
    };
    this.router.navigate(['bateaux', 'single-bateau'],navigationExtras);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: '⚠️ Votre requête est actuellement indisponible, veuillez réessayer ultérieurement !!',
      duration: 1500,
    });

    await toast.present();
  }
}
