import { Component, OnInit } from '@angular/core';
import { ApexRandomData, RadialBarCircleData, mapData} from 'src/app/shared/data/ecommerce/dahboard';
import * as L from 'leaflet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  map!: L.Map;
  json:any;

  public RandomData = ApexRandomData;
  public radicalbarData = RadialBarCircleData;
   //Popup map
   options2 = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      }),
      L.circleMarker([20.5937, 78.9629]).bindPopup("<b>Hello world!<\/b><br />I am a popup.").openPopup()
    ],
    zoom: 5,
    center: L.latLng(20.5937, 78.9629)
  };

}
