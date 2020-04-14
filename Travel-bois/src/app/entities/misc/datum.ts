import { Meseci } from 'src/app/_enums';

export class Datum {
    datum: Date;
    dan: number;
    mesec: number;
    godina: number;
    danaUMesecu: number;
    danUNedelji: number;

    constructor(){
        this.datum = new Date();
        this.dan = this.datum.getDate();
        this.mesec = this.datum.getMonth();
        this.godina = this.datum.getFullYear();
        this.danUNedelji = this.datum.getDay();

        if(this.mesec === 2){
          if(this.datum.getFullYear() % 4 === 0){
            this.danaUMesecu = 29;
          }
          else{
            this.danaUMesecu = 28;
          }
        }
        else if(this.mesec <= 7){
          if(this.mesec % 2 !== 0){
            this.danaUMesecu = 30;
          }
          else{
            this.danaUMesecu = 31;
          }
        }
        else{
          if(this.mesec % 2 === 0){
            this.danaUMesecu = 31;
          }
          else{
            this.danaUMesecu = 30;
          }
        }
    }
    //Getters
    GetWeekday(){
        return this.datum.getDay();
    }
    GetDay(){
        return this.datum.getDate();
    }
    GetMonth(){
        return Meseci[this.datum.getMonth()];
    }
    GetYear(){
        return this.datum.getFullYear();
    }
    //Setters
    SetDay(dan: number){
        this.datum.setDate(dan);
    }
    SetMonth(mon: number){
        this.datum.setMonth(mon);
    }
    SetYear(god: number){
        this.datum.setFullYear(god);
    }
}