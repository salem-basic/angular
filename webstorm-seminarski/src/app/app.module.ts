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


@NgModule({
  declarations: [
    AppComponent,
    RegistracijaComponent,
    TestComponent,
    LoginComponent,
    MenuComponent
  ],
    imports: [
        BrowserModule,
      RouterModule.forRoot([
        {path: 'registracija', component: RegistracijaComponent},
        {path: 'login', component: LoginComponent},
        {path: 'test', component: TestComponent}


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
        MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
