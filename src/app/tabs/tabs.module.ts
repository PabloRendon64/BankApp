import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
//import { ClientModule } from '../client/client.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    //ClientModule
  ],
  declarations: [
    TabsPage
  ]
})
export class TabsPageModule {}
