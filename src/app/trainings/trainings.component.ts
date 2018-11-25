import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.sass']
})
export class TrainingsComponent implements OnInit {

  trainings:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getTrainings();
  }

  getTrainings() {
    this.trainings = [];
    this.rest.getTrainings().subscribe((data: {}) => {
      this.trainings = data;
    });
  }

}
