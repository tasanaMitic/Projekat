import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocetnaStranaComponent } from './Komponente/Deljeno-avio-renta/pocetna-strana/pocetna-strana.component';
import { RegistracijaComponent } from './Komponente/Korisnicki/registracija/registracija.component';
import { KontaktComponent } from './Komponente/Deljeno-avio-renta/kontakt/kontakt.component';
import { LoginComponent } from './Komponente/Korisnicki/login/login.component';
import { BrzeRezervacijeComponent } from './Komponente/Deljeno-avio-renta/brze-rezervacije/brze-rezervacije.component';
import { AvioKompanijeComponent } from './Komponente/Avio/avio-kompanije/avio-kompanije.component';
import { RentACarComponent } from './Komponente/Renta/rent-a-car/rent-a-car.component';
import { ProfilAdminaComponent } from './Komponente/Korisnicki/profil-admina/profil-admina.component';
import { RegAdminaAvioComponent } from './Komponente/Korisnicki/reg-admina-avio/reg-admina-avio.component';
import { RegAdminaRenteComponent } from './Komponente/Korisnicki/reg-admina-rente/reg-admina-rente.component';
import { RegAvioKompanijuComponent } from './Komponente/Korisnicki/reg-avio-kompaniju/reg-avio-kompaniju.component';
import { RegRentaKompanijuComponent } from './Komponente/Korisnicki/reg-renta-kompaniju/reg-renta-kompaniju.component';
import { LetoviComponent } from './Komponente/Avio/letovi/letovi.component';
import { SveRenteComponent } from './Komponente/Renta/sve-rente/sve-rente.component';
import { ProfilRegistrovanogComponent } from './Komponente/Korisnicki/profil-registrovanog/profil-registrovanog.component';
import { ProfilAvioComponent } from './Komponente/Avio/profil-avio/profil-avio.component';
import { PrijateljiComponent } from './Komponente/Korisnicki/prijatelji/prijatelji.component';
import { IstorijaComponent } from './Komponente/Korisnicki/istorija/istorija.component';
import { VozilaComponent } from './Komponente/Renta/vozila/vozila.component';
import { CenovnikComponent } from './Komponente/Renta/cenovnik/cenovnik.component';
import { DodajKolaComponent } from './Komponente/Renta/dodaj-kola/dodaj-kola.component';
import { IzvestajOPoslovanjuRentaComponent } from './Komponente/Renta/izvestaj-o-poslovanju-renta/izvestaj-o-poslovanju-renta.component';
import { RaspolozivostVozilaComponent } from './Komponente/Renta/raspolozivost-vozila/raspolozivost-vozila.component';
import { CenovnikAvioComponent } from './Komponente/Avio/cenovnik-avio/cenovnik-avio.component';
import { IzvestajOPoslovanjuAvioComponent } from './Komponente/Avio/izvestaj-o-poslovanju-avio/izvestaj-o-poslovanju-avio.component';
import { ListaLetovaComponent } from './Komponente/Avio/lista-letova/lista-letova.component';
import { DodajLetComponent } from './Komponente/Avio/dodaj-let/dodaj-let.component';
import { DestinacijeAvioComponent } from './Komponente/Avio/destinacije-avio/destinacije-avio.component';
import { MapsComponent } from './Komponente/Deljeno-avio-renta/maps/maps.component';
import { OcenjivanjeComponent } from './Komponente/Deljeno-avio-renta/ocenjivanje/ocenjivanje.component';
import { OceniLetComponent } from './Komponente/Avio/oceni-let/oceni-let.component';
import { PozivniceComponent } from './Komponente/Korisnicki/pozivnice/pozivnice.component';
import { RezervacijaLetaComponent } from './Komponente/Avio/rezervacija-leta/rezervacija-leta.component';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'pocetna', pathMatch: 'full' },
  { path: 'pocetna', component: PocetnaStranaComponent },
  { path: 'registration', component: RegistracijaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'brzeRezervacije', component: BrzeRezervacijeComponent },
  { path: 'avioKompanije', component: AvioKompanijeComponent },
  { path: 'letovi/:naziv', component: LetoviComponent },
  { path: 'rentAcar', component: RentACarComponent },
  { path: 'sveRente', component: SveRenteComponent },
  { path: 'profilAdmina', component: ProfilAdminaComponent },
  { path: 'regAdminaAvio', component: RegAdminaAvioComponent },
  { path: 'regAdminaRente', component: RegAdminaRenteComponent },
  { path: 'regAvioKomp', component: RegAvioKompanijuComponent },
  { path: 'regRentaKomp', component: RegRentaKompanijuComponent },
  { path: 'profilKorisnika', component: ProfilRegistrovanogComponent, canActivate: [AuthGuard] },
  { path: 'profilAvio', component: ProfilAvioComponent, canActivate: [AuthGuard] },
  { path: 'prijatelji', component: PrijateljiComponent, canActivate: [AuthGuard]},
  { path: 'istorija', component: IstorijaComponent },
  { path: 'vozila', component: VozilaComponent },
  { path: 'cenovnik', component: CenovnikComponent },
  { path: 'dodaj-kola', component: DodajKolaComponent },
  { path: 'izvestaj-renta', component: IzvestajOPoslovanjuRentaComponent },
  { path: 'raspolozivost-vozila', component: RaspolozivostVozilaComponent },
  { path: 'cenovnik-avio', component: CenovnikAvioComponent },
  { path: 'izvestaj-avio', component: IzvestajOPoslovanjuAvioComponent },
  { path: 'lista-letova', component: ListaLetovaComponent },
  { path: 'dodaj-let', component: DodajLetComponent },
  { path: 'destinacije-avio', component: DestinacijeAvioComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'oceni/:naziv', component: OcenjivanjeComponent },
  { path: 'oceniLet/:id/:relacija', component: OceniLetComponent },
  { path: 'pozivnice', component: PozivniceComponent },
  { path: 'rezervacija/:naziv/:id', component: RezervacijaLetaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
