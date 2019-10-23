import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReceiptComponent } from './receipt/receipt.component';
import { FoodOutletComponent } from './food-outlet/food-outlet.component';
import { FoodDeliveryService } from './app.service';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

const routes: Routes = [
  { path:  '', component: HomeComponent },
  { path: 'food-outlets', component: FoodOutletComponent},
  { path: 'receipt', component: ReceiptComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodOutletComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatChipsModule,
    MatListModule,
    MatDividerModule,
    BrowserAnimationsModule
  ],
  providers: [
    FoodDeliveryService,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
