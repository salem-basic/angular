import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiService} from "./api.service";
import {Subject} from "rxjs";

export interface Korisnik extends LoginKorisnik{
  ime:string,
  prezime:string,
  datumRodjenja: Date,
  grad : string,
  brojTelefona : string,
  adresa : string,
  drzavaId : number,
  spolId : number,
  roles : string[]
}

export interface LoginKorisnik extends Token{
  email : string,
  lozinka : string
}

export interface Token {
  token : string,
  refreshToken : string,
  IsAuthSuccessful : boolean
}

@Injectable({
  providedIn: 'root'
})
export class KorisnikService extends ApiService<Korisnik>{

  private authChangeSub = new Subject<boolean>()
  public authChanged = this.authChangeSub.asObservable();

  constructor(htppKlijent : HttpClient) { super('Korisnik', htppKlijent) }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this.authChangeSub.next(isAuthenticated);
  }

  Registracija(object : Korisnik){
    return this.httpKlijent.post<Korisnik>(`${this._url}${'Korisnik/registration'}`, object );
  }

  Login(object : LoginKorisnik){
    return this.httpKlijent.post<LoginKorisnik>(`${this._url}${'Korisnik/login'}`, object );
  }

  public logout = () => {
    localStorage.removeItem("token");
    this.sendAuthStateChangeNotification(false);
  }
}
