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
import { ProfilAdminaComponent } from './profil-admina/profil-admina.component';
import { RegAdminaAvioComponent } from './reg-admina-avio/reg-admina-avio.component';
import { RegAdminaRenteComponent } from './reg-admina-rente/reg-admina-rente.component';
import { RegAvioKompanijuComponent } from './reg-avio-kompaniju/reg-avio-kompaniju.component';
import { RegRentaKompanijuComponent } from './reg-renta-kompaniju/reg-renta-kompaniju.component';
import { LetoviComponent } from './letovi/letovi.component';


const routes: Routes = [
  { path:'', redirectTo:'pocetna', pathMatch:'full'},
  { path:'pocetna', component: PocetnaStranaComponent},
  { path:'registration', component: RegistracijaComponent},
  { path:'kontakt', component: KontaktComponent},
  { path:'login', component: LoginComponent},
  { path:'brzeRezervacije', component: BrzeRezervacijeComponent},
  { path:'avioKompanije', component: AvioKompanijeComponent},
  {path: 'letovi', component: LetoviComponent},
  { path:'rentAcar', component: RentACarComponent},
  { path:'onama', component: InfoComponent},
  { path:'profil', component: ProfilAdminaComponent},
  { path:'regAdminaAvio', component: RegAdminaAvioComponent},
  { path:'regAdminaRente', component: RegAdminaRenteComponent},
  { path:'regAvioKomp', component: RegAvioKompanijuComponent},
  { path:'regRentaKomp', component: RegRentaKompanijuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
