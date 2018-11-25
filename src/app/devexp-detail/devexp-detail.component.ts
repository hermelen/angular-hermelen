import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-devexp-detail',
  templateUrl: './devexp-detail.component.html',
  styleUrls: ['./devexp-detail.component.scss']
})
export class DevexpDetailComponent implements OnInit {

  devExp:any = [];

  constructor(
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDevExpDetail();
  }

  getDevExpDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.rest.getDevExpDetail(id)
    .subscribe(devExp => this.devExp = devExp);
  }
}
