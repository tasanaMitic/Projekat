export class BrzaRezervacija {
  idLeta: number;
  cenaSedista: number;
  idSedista: string;

  constructor(idLeta: number, idSedista: string, ime: string, prezime: string, brojPasosa: string, rezervisano: boolean, cenaSedista: number) {
    this.idLeta = idLeta;
    this.idSedista = idSedista;
    this.cenaSedista = cenaSedista;
  }
}
