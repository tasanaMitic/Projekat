import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LetoviService } from '../../../shared/letovi.service';
import { element } from 'protractor';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-let-brza-rezervacija',
  templateUrl: './let-brza-rezervacija.component.html',
  styleUrls: ['./let-brza-rezervacija.component.css']
})
export class LetBrzaRezervacijaComponent implements OnInit {
  cenaForm: FormGroup;

  private seatConfig: any = null;
  private seatmap = [];
  empty = 0;

  private seatChartConfig = {
    showRowsLabel: false,
    showRowWisePricing: false,
    newSeatNoForRow: false
  }

  private cart = {
    selectedSeats: [],
    seatstoStore: [],
    totalamount: 0,
    cartId: "",
    eventId: 0
  };

  idLeta: number;

  constructor(private route: ActivatedRoute, private location: Location, private service: LetoviService) {
    this.cenaForm = new FormGroup({
      'cena': new FormControl('', Validators.required)
    });

    this.ucitajSedista();
  }

  ngOnInit(): void {
    this.idLeta = parseInt(this.route.snapshot.paramMap.get("id"));
    
    this.seatConfig = [
      {
        "seat_price": 0,
        "seat_map": [
          {
            "seat_label": "A",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "B",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "C",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "D",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "E",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "F",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "G",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "H",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "I",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "J",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "K",
            "layout": "ggg__ggg"
          },
          {
            "seat_label": "L",
            "layout": "ggg__ggg"
          }
        ]
      }
    ]
    this.processSeatChart(this.seatConfig);
  }

  public processSeatChart(map_data: any[]) {

    if (map_data.length > 0) {
      var seatNoCounter = 1;
      for (let __counter = 0; __counter < map_data.length; __counter++) {
        var row_label = "";
        var item_map = map_data[__counter].seat_map;

        //Get the label name and price
        row_label = "Row " + item_map[0].seat_label + " - ";
        if (item_map[item_map.length - 1].seat_label != " ") {
          row_label += item_map[item_map.length - 1].seat_label;
        }
        else {
          row_label += item_map[item_map.length - 2].seat_label;
        }
        row_label += " : Rs. " + map_data[__counter].seat_price;

        item_map.forEach(map_element => {
          var mapObj = {
            "seatRowLabel": map_element.seat_label,
            "seats": [],
            "seatPricingInformation": row_label
          };
          row_label = "";
          var seatValArr = map_element.layout.split('');
          if (this.seatChartConfig.newSeatNoForRow) {
            seatNoCounter = 1; //Reset the seat label counter for new row
          }
          var totalItemCounter = 1;
          seatValArr.forEach(item => {
            var seatObj = {
              "key": map_element.seat_label + "_" + totalItemCounter,
              "price": map_data[__counter]["seat_price"],
              "status": "available"
            };

            if (item != '_') {
              seatObj["seatLabel"] = map_element.seat_label + " " + seatNoCounter;
              if (seatNoCounter < 10) { seatObj["seatNo"] = "0" + seatNoCounter; }
              else { seatObj["seatNo"] = "" + seatNoCounter; }

              seatNoCounter++;
            }
            else {
              seatObj["seatLabel"] = "";
            }
            totalItemCounter++;
            mapObj["seats"].push(seatObj);
          });
          this.seatmap.push(mapObj);

        });
      }
    }
  }

  public selectSeat(seatObject: any) {
    if (seatObject.status == "available") {
      seatObject.status = "booked";
      this.cart.selectedSeats.push(seatObject.seatLabel);
      this.cart.seatstoStore.push(seatObject.key);
      this.cart.totalamount += seatObject.price;
    }
    else if (seatObject.status = "booked") {
      seatObject.status = "available";
      var seatIndex = this.cart.selectedSeats.indexOf(seatObject.seatLabel);
      if (seatIndex > -1) {
        this.cart.selectedSeats.splice(seatIndex, 1);
        this.cart.seatstoStore.splice(seatIndex, 1);
        this.cart.totalamount -= seatObject.price;
      }

    }
  }

  public blockSeats(seatsToBlock: string) {
    if (seatsToBlock != "") {
      var seatsToBlockArr = seatsToBlock.split(',');
      for (let index = 0; index < seatsToBlockArr.length; index++) {
        var seat = seatsToBlockArr[index] + "";
        var seatSplitArr = seat.split("_");
        for (let index2 = 0; index2 < this.seatmap.length; index2++) {
          const element = this.seatmap[index2];
          if (element.seatRowLabel == seatSplitArr[0]) {
            var seatObj = element.seats[parseInt(seatSplitArr[1]) - 1];
            if (seatObj) {
              seatObj["status"] = "unavailable";
              this.seatmap[index2]["seats"][parseInt(seatSplitArr[1]) - 1] = seatObj;
              break;
            }
          }
        }
      }
    }
  }

  ucitajSedista() {
    this.service.getSediste().subscribe(sedista => {
      sedista.forEach(element => {
        if (element.idLeta == this.idLeta) {
          var sediste = element.idSedista.replace(" ", "_");
          this.blockSeats(sediste);
        }
      })
    });
  }

  processBooking() {
    this.empty = 1;
  }

  NapraviBrzuRezervaciju() {
    console.log(this.cart.selectedSeats);
  }

  onBack() {
    if (this.empty == 0) {
      this.location.back();
    }
    else {
      this.empty = 0;
    }

    
  }

}
