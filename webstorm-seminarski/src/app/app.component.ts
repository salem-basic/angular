import { Component, OnInit } from '@angular/core';
import {SignalrService} from "./servisi/signalr.service";
import {HttpClient} from "@angular/common/http";
import {KorisnikService} from "./servisi/korisnik.service";
import {LoginComponent} from "./login/login.component";
import {MatDialog} from "@angular/material/dialog";
import {Signalr2Service} from "./servisi/signalr2.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';

  constructor(public signalRService: SignalrService, public servis : KorisnikService,
              private http: HttpClient,
              private dialog:MatDialog,
              public SignalR2Service : Signalr2Service) { }
  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();
    this.startHttpRequest();

    this.SignalR2Service.startConnection();
    this.SignalR2Service.addTransferChartDataListener();
    this.startHttpRequest2();
  }

  private startHttpRequest = () => {
    this.http.get('https://localhost:7025/api/chart')
      .subscribe(res => {
        console.log(res);
      })
  }

  private startHttpRequest2 = () => {
    this.http.get('https://localhost:7025/api/chart2')
      .subscribe(res => {
        console.log(res);
      })
  }
  onCreate(){
    this.dialog.open(LoginComponent);
  }

  isAdmin(){
    if(this.servis.isUserAdmin())
      return true;
    return false;
  }
}
