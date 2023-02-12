import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() person: any;
  @Output() clickedEdit = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  navigateToPersonPage() {
    this.clickedEdit.emit();
  }
}
