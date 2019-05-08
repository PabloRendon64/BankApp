import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertCtrl: AlertController) { }

  async presentAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
