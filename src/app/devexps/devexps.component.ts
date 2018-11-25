import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-devexps',
  templateUrl: './devexps.component.html',
  styleUrls: ['./devexps.component.scss']
})
export class DevexpsComponent implements OnInit {

  devExps:any = []

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getDevExps();
  }

  getDevExps() {
    this.devExps = [];
    this.rest.getDevExps().subscribe((data: {}) => {
      this.devExps = data;
    });
  }

}
