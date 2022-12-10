import { Component, OnInit } from '@angular/core';
import {Korisnik, LoginKorisnik, Token} from "../servisi/korisnik.service";
import {HttpClient} from "@angular/common/http";
import {KorisnikService} from "../servisi/korisnik.service";
import {ApiService} from "../servisi/api.service";
import {UntypedFormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpKlijent : HttpClient, private service : KorisnikService,
              private formBuilder:UntypedFormBuilder) { }

  loginKorisnik:LoginKorisnik = <LoginKorisnik>{};

  profileForm = this.formBuilder.group({
    email:['' , [Validators.minLength(3),Validators.required]],
    lozinka:['' , [Validators.minLength(3),Validators.required]],
  })

  ngOnInit(): void {
  }

  Login(x:LoginKorisnik) {
    this.service.Login(x).subscribe((res : Token) => {
      localStorage.setItem("token", res.token);
      this.service.sendAuthStateChangeNotification(res.IsAuthSuccessful);
      alert("Uspjesno ste se logovali");
    })
  }
}
