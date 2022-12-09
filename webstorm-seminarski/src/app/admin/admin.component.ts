import { Component, OnInit } from '@angular/core';
import {ChartConfiguration, ChartType} from "chart.js";
import {SignalrService} from "../servisi/signalr.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: {
        min: 0
      }
    }
  };
  chartLabels: string[] = ['Real time chartovi - SignalR'];
  chartType: ChartType = 'bar';
  chartLegend: boolean = true;

  constructor(public signalRService: SignalrService) { }

  ngOnInit(): void {
  }

}
