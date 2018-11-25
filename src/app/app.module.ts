import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevskillsComponent } from './devskills/devskills.component';
import { OtherskillsComponent } from './otherskills/otherskills.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: DevskillsComponent },
  { path: '', component: OtherskillsComponent, outlet:'secondary' }
]

// const appRoutes: Routes = [
//   {
//     path: '', component: DevskillsComponent, children: [
//       { path: 'devskills', component: DevskillsComponent },
//       { path: 'otherskills', component: OtherskillsComponent }
//     ]
//   }
// const appRoutes: Routes = [
//   {
//     path: 'home',
//     component: [
//       DevskillsComponent,
//       OtherskillsComponent
//     ]
//     data: { title: 'DevSkills List' }
//   },
  // {
  //   path: 'product-details/:id',
  //   component: ProductDetailComponent,
  //   data: { title: 'Product Details' }
  // },
  // {
  //   path: 'product-add',
  //   component: ProductAddComponent,
  //   data: { title: 'Product Add' }
  // },
  // {
  //   path: 'product-edit/:id',
  //   component: ProductEditComponent,
  //   data: { title: 'Product Edit' }
  // },
  // { path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // }
// ];

@NgModule({
  declarations: [
    AppComponent,
    DevskillsComponent,
    OtherskillsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
