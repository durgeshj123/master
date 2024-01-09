import { Component } from '@angular/core';

import { routes } from 'src/app/core/helpers/routes';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  public routes = routes;


 
}
