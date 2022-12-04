import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  prijava() {
    this.router.navigateByUrl('/login')
  }

  gost() {
    this.router.navigateByUrl('/proizvodi-pregled')
  }
}