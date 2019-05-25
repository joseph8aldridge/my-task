import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ViewComponent } from './view/view.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';


const myTaskRoutes: Routes = [
    {path: '', component: AboutComponent},    
    {path: 'about', component: AboutComponent},    
    {path: 'view', component: ViewComponent},    
    // {path: '', component: HomeComponent},    
    // {path: 'wishlist', component: WishlistComponent},    
    // {path: 'contacts', component: ContactsComponent},    
    {path: '**', component: NotFoundComponent}    
]

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ViewComponent,
    WishlistComponent,
    ContactsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myTaskRoutes)
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
