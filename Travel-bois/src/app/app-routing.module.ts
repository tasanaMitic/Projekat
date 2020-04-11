import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocetnaStranaComponent } from './pocetna-strana/pocetna-strana.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LoginComponent } from './login/login.component';
import { BrzeRezervacijeComponent } from './brze-rezervacije/brze-rezervacije.component';
import { AvioKompanijeComponent } from './avio-kompanije/avio-kompanije.component';
import { RentACarComponent } from './rent-a-car/rent-a-car.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  { path:'', redirectTo:'pocetna', pathMatch:'full'},
  { path:'pocetna', component: PocetnaStranaComponent},
  { path:'registration', component: RegistracijaComponent},
  { path:'kontakt', component: KontaktComponent},
  { path:'login', component: LoginComponent},
  { path:'brzeRezervacije', component: BrzeRezervacijeComponent},
  { path:'avioKompanije', component: AvioKompanijeComponent},
  { path:'rentAcar', component: RentACarComponent},
  { path:'onama', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
