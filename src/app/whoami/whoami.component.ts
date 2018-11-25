import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-whoami',
  templateUrl: './whoami.component.html',
  styleUrls: ['./whoami.component.sass']
})
export class WhoamiComponent implements OnInit {

  whoAmI:any = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getWhoAmI();
  }

  getWhoAmI() {
    this.whoAmI = [];
    this.rest.getWhoAmI().subscribe((data: {}) => {
      this.whoAmI = data;
    });
  }

}
