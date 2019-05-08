import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class ToastService {
  constructor(private toastCtrl: ToastController) {}

  async presentToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 4000
    });
    toast.present();
  }

  async presentErrorToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      position: "top",
      duration: 300000,
      cssClass: 'toast-error'
    });
    toast.present();
  }
}
