import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientPage } from './client.page';
import { LoaderService } from '../services/loader.service';
import { ToastService } from '../services/toast.service';
import { AlertService } from '../services/alert.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ClientPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [
    ClientPage,
  ],
  providers: [
    LoaderService,
    ToastService,
    AlertService
  ],
  exports: [RouterModule]
})
export class ClientModule { }
