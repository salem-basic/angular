import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import { TestComponent } from './test/test.component';
import {MatNativeDateModule} from "@angular/material/core";
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { ProizvodiComponent } from './proizvodi/proizvodi.component';
import { PmodalComponent } from './proizvodi/pmodal/pmodal.component';
import { ProizvodiPregledComponent } from './proizvodi-pregled/proizvodi-pregled.component';
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import { AdminComponent } from './admin/admin.component';
import { RouterPanelComponent } from './router-panel/router-panel.component';
import { ZaposleniciComponent } from './zaposlenici/zaposlenici.component';
import { ZmodalComponent } from './zaposlenici/zmodal/zmodal.component';
import { LokacijaComponent } from './lokacija/lokacija.component';
import { ProdavnicaComponent } from './prodavnica/prodavnica.component';
import { PrmodalComponent } from './prodavnica/prmodal/prmodal.component';
import { ProdavnicaPregledComponent } from './prodavnica-pregled/prodavnica-pregled.component';
import { KorpaProizvodiComponent } from './korpa-proizvodi/korpa-proizvodi.component';
import { DostavljacComponent } from './dostavljac/dostavljac.component';
import { DmodalComponent } from './dostavljac/dmodal/dmodal.component';
import {NgChartsModule} from "ng2-charts";



@NgModule({
  declarations: [
    AppComponent,
    RegistracijaComponent,
    TestComponent,
    LoginComponent,
    MenuComponent,
    PocetnaComponent,
    ProizvodiComponent,
    PmodalComponent,
    ProizvodiPregledComponent,
    AdminComponent,
    RouterPanelComponent,
    ZaposleniciComponent,
    ZmodalComponent,
    LokacijaComponent,
    ProdavnicaComponent,
    PrmodalComponent,
    ProdavnicaPregledComponent,
    KorpaProizvodiComponent,
    DostavljacComponent,
    DmodalComponent,

  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path: 'registracija', component: RegistracijaComponent},
            {path: 'login', component: LoginComponent},
            {path: 'pocetna', component: PocetnaComponent},
            {path: 'proizvodi-pregled', component: ProizvodiPregledComponent},
            {path: 'admin', component: AdminComponent},
            {path: 'proizvodi', component: ProizvodiComponent},
            {path: '', component: PocetnaComponent},
            {path: 'zaposlenici', component: ZaposleniciComponent},
            {path: 'lokacija', component: LokacijaComponent},
            {path: 'prodavnica', component: ProdavnicaComponent},
            {path: 'prodavnica-pregled', component: ProdavnicaPregledComponent},
            {path: 'dostavljac', component: DostavljacComponent}

        ]),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatInputModule,
        MatDatepickerModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatDialogModule,
        MatSelectModule,
        MatGridListModule,
        MatCardModule,
        MatPaginatorModule,
        MatNativeDateModule,
        NgChartsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
