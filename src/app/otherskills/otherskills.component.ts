import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-otherskills',
  templateUrl: './otherskills.component.html',
  styleUrls: ['./otherskills.component.sass']
})
export class OtherskillsComponent implements OnInit {

  otherSkills:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getOtherSkills();
  }

  getOtherSkills() {
    this.otherSkills = [];
    this.rest.getOtherSkills().subscribe((data: {}) => {
      this.otherSkills = data;
    });
  }
}
