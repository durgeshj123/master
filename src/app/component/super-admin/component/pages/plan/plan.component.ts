import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  public routes = routes;
  constructor ( private route:Router){}

  ngOnInit(): void {}

add(){
this.route.navigate(["super-admin/plan/add"])
}
}
