import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {
  public routes = routes;
  constructor ( private route:Router){}

  ngOnInit(): void {}

addcoupon(){
this.route.navigate(["super-admin/coupons/add"])
}
}
