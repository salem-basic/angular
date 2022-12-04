import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";

export interface Brend{
  id:number,
  nazivBrenda:string
}

@Injectable({
  providedIn: 'root'
})
export class BrendService extends ApiService<Brend>{

  constructor(httpKlijent: HttpClient) {super('Brend',httpKlijent) }
}
