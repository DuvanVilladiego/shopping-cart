import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ListFullItemDataComponent } from './list-full-item-data/list-full-item-data.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AdminComponent,
    CartComponent,
    AddItemComponent,
    DeleteItemComponent,
    UpdateItemComponent,
    ListFullItemDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'admin', component: AdminComponent, pathMatch: 'full' },
      { path: 'admin/list-full-item-data', component: ListFullItemDataComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
