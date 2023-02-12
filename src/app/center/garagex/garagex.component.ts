import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShipDataService } from 'src/app/_core/services/ship-data.service';
import { ShipsService } from 'src/app/_core/services/ships.service';

@Component({
  selector: 'app-garage',
  templateUrl: './garagex.component.html',
  styleUrls: ['./garagex.component.scss']
})
export class GaragexComponent implements OnInit {
  shipList = [];
  shipName: string;

  constructor(
    private router: Router,
    private shipsService: ShipsService,
  ) { }

  ngOnInit(): void {
    this.shipsService.getShips().subscribe( (res) => { this.shipList = res } );
  }

}
