import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { WhoamiComponent } from './whoami/whoami.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { DevexpsComponent } from './devexps/devexps.component';
import { OtherexpsComponent } from './otherexps/otherexps.component';
import { DevskillsComponent } from './devskills/devskills.component';
import { OtherskillsComponent } from './otherskills/otherskills.component';
import { DevexpDetailComponent } from './devexp-detail/devexp-detail.component';

const appRoutes: Routes = [
  { path: 'dev-xp/:id', component: DevexpDetailComponent },

  { path: '', component: WhoamiComponent},
  { path: '', component: TrainingsComponent, outlet:'secondary' },
  { path: '', component: DevexpsComponent, outlet:'tertiary' },
  { path: '', component: OtherexpsComponent, outlet:'quaternary' },
  { path: '', component: DevskillsComponent, outlet:'quinary' },
  { path: '', component: OtherskillsComponent, outlet:'senary' },
]

@NgModule({
  declarations: [
    AppComponent,
    WhoamiComponent,
    TrainingsComponent,
    DevexpsComponent,
    OtherexpsComponent,
    DevskillsComponent,
    OtherskillsComponent,
    DevexpDetailComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
