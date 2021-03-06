import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-devskills',
  templateUrl: './devskills.component.html',
  styleUrls: ['./devskills.component.scss']
})
export class DevskillsComponent implements OnInit {

  devSkills:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getDevSkills();
  }

  getDevSkills() {
    this.devSkills = [];
    this.rest.getDevSkills().subscribe((data: {}) => {
      this.devSkills = data;
    });
  }

  // add() {
  //   this.router.navigate(['/product-add']);
  // }
  //
  // delete(id) {
  //   this.rest.deleteProduct(id)
  //   .subscribe(res => {
  //     this.getProducts();
  //   }, (err) => {
  //     console.log(err);
  //   }
  // );
}
