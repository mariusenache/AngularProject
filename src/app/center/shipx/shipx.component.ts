import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipx',
  templateUrl: './shipx.component.html',
  styleUrls: ['./shipx.component.scss']
})
export class ShipxComponent implements OnInit {

  @Input() shipx: any;
  constructor() { }

  ngOnInit(): void {
  }

}
