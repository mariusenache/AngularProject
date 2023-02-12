import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonDataService } from 'src/app/_core/services/person-data.service';
import { PersonsService } from 'src/app/_core/services/persons.service';


@Component({
  selector: 'app-center-page',
  templateUrl: './center-page.component.html',
  styleUrls: ['./center-page.component.scss']
})
export class CenterPageComponent implements OnInit {
  personList = [];
  personName: string;
  personDescription: string;

  constructor(
    private router: Router,
    private personsService: PersonsService,
    private personDataService: PersonDataService,
  ) { }

  ngOnInit(): void {
    this.personsService.getPersons().subscribe( (res) => { this.personList = res } );
  }

  navigateToPersonPage(personInfo: any):void{
    this.personDataService.selectedPerson = personInfo;
    this.router.navigate(['/person-manage'], {queryParams: {personId: personInfo.id}})
  }

  addNewPerson(): void {
    const personInfo = {
      title: this.personName,
      description: this.personDescription
    }
    this.personsService.addPerson(personInfo).subscribe((res) => this.personList.push(res))
  }

}
