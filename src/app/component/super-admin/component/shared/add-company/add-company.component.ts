import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';

import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  public routes = routes;
  addUserForm !: FormGroup;
  ckForm = false;
constructor(
  private _fb : FormBuilder
){}

ngOnInit(): void {
  this.addUserForm = this._fb.group({
    username : [null,Validators.required],
    email : [null,Validators.required],
    password : [null,Validators.required]
  });
}
onSubmit(): void{
  if ( this.addUserForm.invalid) {
      this.ckForm = true;
      return
  }

  console.log(this.addUserForm.value)

}
   
}
