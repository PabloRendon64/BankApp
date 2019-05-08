import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CreditPage } from './credit.page';
import { ClientsService } from '../services/clients.service';
import { CurrencyMaskModule } from "ionicng2-currency-mask";

const routes: Routes = [
  {
    path: '',
    component: CreditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    CurrencyMaskModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CreditPage
  ],
  providers: [ClientsService],
  exports: [RouterModule]
})
export class CreditModule { }
