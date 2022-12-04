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
      {path: '', component: PocetnaComponent}

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
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
