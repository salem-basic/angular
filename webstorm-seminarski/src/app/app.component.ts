import { Component, OnInit } from '@angular/core';
import {SignalrService} from "./servisi/signalr.service";
import {HttpClient} from "@angular/common/http";
import {KorisnikService} from "./servisi/korisnik.service";
import {LoginComponent} from "./login/login.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';

  constructor(public signalRService: SignalrService, public servis : KorisnikService,
              private http: HttpClient,
              private dialog:MatDialog) { }
  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();
    this.startHttpRequest();
  }

  private startHttpRequest = () => {
    this.http.get('https://localhost:7025/api/chart')
      .subscribe(res => {
        console.log(res);
      })
  }
  onCreate(){
    this.dialog.open(LoginComponent);
  }
}
