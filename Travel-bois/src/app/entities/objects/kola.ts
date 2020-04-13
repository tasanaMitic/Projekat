import { NgIf } from '@angular/common';
import { Ocena } from 'src/app/entities/misc/ocena'
import { TipVozila } from 'src/app/_enums'
import { IdHandler } from 'src/app/_id-handler'

export class Kola {
    BrojMesta: number;
    BrzaRezervacija: boolean;
    Cena: number;
    Godiste: number;
    ID: number;
    Naziv: string;
    Ocene: Array<Ocena>;
    Tip: TipVozila;
    Zauzet: boolean;
    Zauzetost: Array<[Date, Date]>

    

    constructor(brMesta:number, godiste:number, marka:string, model:string, 
        tip:TipVozila, brzaRezervacija:boolean = false, cena:number = 0){
        this.BrojMesta = brMesta;
        this.Godiste = godiste;
        this.Naziv = marka + '-' + model;
        this.Tip = tip;
        this.BrzaRezervacija = brzaRezervacija;
        this.Cena = cena;
        
        //Ne radi kako treba
        //this.ID = IdHandler.GenerateKolaID();
        this.Ocene = new Array<Ocena>();
        this.Zauzet = false;
        this.Zauzetost = new Array<[Date, Date]>();
    }

    private NazivParser(){
        return this.Naziv.split('-');
    }
    GetMarka(){
        return this.NazivParser()[0];
    }
    GetModel(){
        return this.NazivParser()[1];
    }
    SetMarka(marka:string){
        this.Naziv = marka + '-' + this.GetModel();
    }
    SetModel(model:string){
        this.Naziv = this.GetMarka() + '-' + model;
    }
}