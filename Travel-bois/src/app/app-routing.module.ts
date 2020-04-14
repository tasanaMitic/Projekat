import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocetnaStranaComponent } from './pocetna-strana/pocetna-strana.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LoginComponent } from './login/login.component';
import { BrzeRezervacijeComponent } from './brze-rezervacije/brze-rezervacije.component';
import { AvioKompanijeComponent } from './avio-kompanije/avio-kompanije.component';
import { RentACarComponent } from './rent-a-car/rent-a-car.component';
import { ProfilAdminaComponent } from './profil-admina/profil-admina.component';
import { RegAdminaAvioComponent } from './reg-admina-avio/reg-admina-avio.component';
import { RegAdminaRenteComponent } from './reg-admina-rente/reg-admina-rente.component';
import { RegAvioKompanijuComponent } from './reg-avio-kompaniju/reg-avio-kompaniju.component';
import { RegRentaKompanijuComponent } from './reg-renta-kompaniju/reg-renta-kompaniju.component';
import { LetoviComponent } from './letovi/letovi.component';
import { SveRenteComponent } from './sve-rente/sve-rente.component';
import { ProfilRegistrovanogComponent } from './profil-registrovanog/profil-registrovanog.component';
import { ProfilAvioComponent } from './profil-avio/profil-avio.component';
import { PrijateljiComponent } from './prijatelji/prijatelji.component';
import { IstorijaComponent } from './istorija/istorija.component';


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
  { path:'sveRente', component: SveRenteComponent},
  { path:'profilAdmina', component: ProfilAdminaComponent},
  { path:'regAdminaAvio', component: RegAdminaAvioComponent},
  { path:'regAdminaRente', component: RegAdminaRenteComponent},
  { path:'regAvioKomp', component: RegAvioKompanijuComponent},
  { path:'regRentaKomp', component: RegRentaKompanijuComponent},
  { path: 'profilKorisnika', component: ProfilRegistrovanogComponent},
  { path: 'profilAvio', component: ProfilAvioComponent},
  { path: 'prijatelji', component: PrijateljiComponent},
  { path: 'istorija', component: IstorijaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
