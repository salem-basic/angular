import {Component, Inject, OnInit} from '@angular/core';
import {Dobavljac, DobavljacService} from "../../servisi/dobavljac.service";
import {Kategorija, KategorijaService} from "../../servisi/kategorija.service";
import {Brend, BrendService} from "../../servisi/brend.service";
import {Valuta, ValutaService} from "../../servisi/valuta.service";
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpParams} from "@angular/common/http";
import {Observable, Subscriber} from "rxjs";
import {Korisnik, KorisnikService} from "../../servisi/korisnik.service";


@Component({
  selector: 'app-pmodal',
  templateUrl: './pmodal.component.html',
  styleUrls: ['./pmodal.component.css']
})
export class PmodalComponent implements OnInit {

  dobavljaci!:Dobavljac[];
  kategorija!:Kategorija[];
  brend!:Brend[];
  valuta!:Valuta[];
  korisnik!:Korisnik[];

  profileForm = this.formBuilder.group({
    nazivProizvoda:['' , [Validators.minLength(3),Validators.required]],
    cijena:['' , [Validators.required]],
    serijskiBroj:['' , [Validators.required]],
    dobavljac:['' , Validators.required],
    kategorija:['' , Validators.required],
    brend:['' , Validators.required],
    valuta:['' , Validators.required],
    korisnik:['' , Validators.required]
  })


  constructor(private dialog:MatDialogRef<PmodalComponent>, private serviceDobavljac:DobavljacService,
              private serviceKategorija : KategorijaService, private serviceValuta:ValutaService,
              private serviceBrend : BrendService, private serviceKorisnik: KorisnikService,
              @Inject(MAT_DIALOG_DATA) public data:any , private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.serviceDobavljac.Get(new HttpParams()).subscribe(x => {
      this.dobavljaci = x;
    })
    this.serviceKategorija.Get(new HttpParams()).subscribe(x => {
      this.kategorija = x;
    })
    this.serviceValuta.Get(new HttpParams()).subscribe(x => {
      this.valuta = x;
    })
    this.serviceBrend.Get(new HttpParams()).subscribe(x => {
      this.brend = x;
    })
    this.serviceKorisnik.Get(new HttpParams()).subscribe(x => {
      this.korisnik = x;
    })
  }

  Save() {
    if(this.profileForm.valid)
    {
      this.dialog.close(this.data);
    }
    else {
      alert("Niste popunili sva obavezna polja");
    }
  }

  onSelectedNewFile($event:Event) {
    const file:any = ($event.target as HTMLInputElement)?.files?.[0];
    console.log(file);
    this.convertToBase64(file);
  }

  convertToBase64(file:File){
    const observable = new Observable((subscriber:Subscriber<any>)=> {
      this.readFile(file,subscriber);
    })
    observable.subscribe((d) => {
      this.data.slika = d;
    })
  }

  readFile(file:File,subscriber:Subscriber<any>){
    const filereader = new FileReader();

    filereader.readAsDataURL(file);

    filereader.onload= () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    }

    filereader.onerror= (error) => {
      subscriber.error(error);
    }

  }

}
