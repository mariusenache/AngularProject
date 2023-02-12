import { PersonsService } from './../_core/services/persons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-manage',
  templateUrl: './person-manage.component.html',
  styleUrls: ['./person-manage.component.scss']
})
export class PersonManageComponent implements OnInit {
  personName: string;
  personAvatar: string;
  personDescription: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private personsService: PersonsService,
  ) {
    this.getPersonInfo(this.activatedRoute.snapshot.queryParams['personId']);
  }

  ngOnInit(): void {
  }
  
  getPersonInfo(id: number): void {
    this.personsService.getPersonInfo(id).subscribe({
      next: (response) => {
        this.personName = response.title;
        this.personAvatar = response.avatar;
        this.personDescription = response.description;
      }
    })
  }

  editPerson(): void {
    const personInfo = {
      id: this.activatedRoute.snapshot.queryParams['personId'],
      title: this.personName,
      avatar: this.personAvatar,
      description: this.personDescription
    }
    this.personsService.updatePerson(personInfo).subscribe();
  }

  deletePerson(): void {
    const personId = this.activatedRoute.snapshot.queryParams['personId'];
    this.personsService.deletePerson(personId).subscribe({
      next: () => {
        this.router.navigate(['/center']);
      }
    });
  }

}
