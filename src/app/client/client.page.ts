import { Component, OnInit } from "@angular/core";
import { LoaderService } from "../services/loader.service";
import { ToastService } from "../services/toast.service";
import { Client } from "../models/client.model";
import { ClientsService } from "../services/clients.service";
import {catchError, tap, map} from 'rxjs/operators';

@Component({
  selector: "app-client",
  templateUrl: "./client.page.html"
})
export class ClientPage implements OnInit {
  clientes;
  client: Client;
  fechaActual: Date = new Date();
  fechaMax: Date;

  constructor(
    private loaderService: LoaderService,
    private toastService: ToastService,
    private _clientsService: ClientsService
  ) { }

  ngOnInit() {
    this.client = new Client();
    this.loadMaxDate();
    this.loadClients();
  }

  loadMaxDate() {
    let fechaMax: Date = new Date();
    fechaMax.setFullYear(this.fechaActual.getFullYear() - 18);
    this.fechaMax = fechaMax;
  }

  save() {
    this.loaderService.presentLoading();
    this._clientsService.putClient(this.client)
      .subscribe((data) => {
        console.log(data);
        this.toastService.presentToast('Se ha registrado el cliente exitosamente.');
        this.loaderService.dismissLoading();
      }, () => {
        this.loaderService.dismissLoading();
      });
  }

  loadClients() {
    this.loaderService.presentLoading();
    setTimeout(() => {
      this._clientsService.getClients()
        .subscribe((data) => {
          console.log(data);

          this.loaderService.dismissLoading();
        }, () => {
          this.loaderService.dismissLoading();
        });
    }, 2000);
  }

}
