import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-otherexps',
  templateUrl: './otherexps.component.html',
  styleUrls: ['./otherexps.component.sass']
})
export class OtherexpsComponent implements OnInit {

  otherExps:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getOtherExps();
  }

  getOtherExps() {
    this.otherExps = [];
    this.rest.getOtherExps().subscribe((data: {}) => {
      this.otherExps = data;
    });
  }
}
